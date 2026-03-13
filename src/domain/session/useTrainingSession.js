import { useMemo, useState, useEffect } from "react";

const INITIAL_SCORE = Object.freeze({
  correct: 0,
  incorrect: 0,
  points: 0,
});

const INITIAL_STREAK = Object.freeze({
  current: 0,
  best: 0,
});

export function useTrainingSession(moduleConfig) {
  const dataset = useMemo(() => {
    return Array.isArray(moduleConfig?.dataset) ? moduleConfig.dataset : [];
  }, [moduleConfig]);

  const evaluator = moduleConfig?.evaluator;

  const totalQuestions = dataset.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(INITIAL_SCORE);
  const [streak, setStreak] = useState(INITIAL_STREAK);
  const [lastEvaluation, setLastEvaluation] = useState(null);

  useEffect(() => {
    setCurrentIndex(0);
    setScore(INITIAL_SCORE);
    setStreak(INITIAL_STREAK);
    setLastEvaluation(null);
  }, [moduleConfig?.id]);

  const currentQuestion = useMemo(() => {
    if (totalQuestions === 0) {
      return null;
    }

    if (currentIndex < 0 || currentIndex >= totalQuestions) {
      return null;
    }

    return dataset[currentIndex] ?? null;
  }, [dataset, currentIndex, totalQuestions]);

  function submitAnswer(userAnswer) {
    if (!currentQuestion || typeof evaluator !== "function" || lastEvaluation) {
      return;
    }

    const evaluation = evaluator(currentQuestion, userAnswer);

    setLastEvaluation(evaluation);

    setScore((prevScore) => {
      const scoreDelta =
        typeof evaluation?.scoreDelta === "number" ? evaluation.scoreDelta : 0;

      if (evaluation?.isCorrect) {
        return {
          correct: prevScore.correct + 1,
          incorrect: prevScore.incorrect,
          points: prevScore.points + scoreDelta,
        };
      }

      return {
        correct: prevScore.correct,
        incorrect: prevScore.incorrect + 1,
        points: prevScore.points + scoreDelta,
      };
    });

    setStreak((prevStreak) => {
      if (evaluation?.isCorrect) {
        const nextCurrent = prevStreak.current + 1;

        return {
          current: nextCurrent,
          best: Math.max(prevStreak.best, nextCurrent),
        };
      }

      return {
        current: 0,
        best: prevStreak.best,
      };
    });
  }

  function goNext() {
    setCurrentIndex((prevIndex) => {
      if (totalQuestions === 0) {
        return 0;
      }

      return prevIndex < totalQuestions - 1 ? prevIndex + 1 : prevIndex;
    });

    setLastEvaluation(null);
  }

  function restart() {
    setCurrentIndex(0);
    setScore(INITIAL_SCORE);
    setStreak(INITIAL_STREAK);
    setLastEvaluation(null);
  }

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    streak,
    lastEvaluation,
    submitAnswer,
    goNext,
    restart,
  };
}