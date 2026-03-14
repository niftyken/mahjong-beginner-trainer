import React from "react";
import Tile from "../components/Tile.jsx";

export default function DiscardModule({
  moduleConfig,
  currentQuestion,
  currentIndex,
  totalQuestions,
  score,
  streak,
  lastEvaluation,
  submitAnswer,
  goNext,
  restart,
}) {
  const hasMoreQuestions = currentIndex < totalQuestions - 1;
  const allowedChoices = new Set(
    Array.isArray(currentQuestion?.choices) ? currentQuestion.choices : []
  );

  if (!currentQuestion) {
    return (
      <div>
        <h2>{moduleConfig?.title || "Discard Trainer"}</h2>
        <div>No questions available.</div>

        <div>
          <div>
            Question: {totalQuestions > 0 ? currentIndex + 1 : 0} of {totalQuestions}
          </div>
          <div>Correct: {score.correct}</div>
          <div>Incorrect: {score.incorrect}</div>
          <div>Points: {score.points}</div>
          <div>Current Streak: {streak.current}</div>
          <div>Best Streak: {streak.best}</div>
        </div>

        <button type="button" onClick={restart}>
          Restart
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>{moduleConfig?.title || "Discard Trainer"}</h2>
      {moduleConfig?.description ? <p>{moduleConfig.description}</p> : null}

      <div>
        <div>
          Question: {currentIndex + 1} of {totalQuestions}
        </div>
        <div>Correct: {score.correct}</div>
        <div>Incorrect: {score.incorrect}</div>
        <div>Points: {score.points}</div>
        <div>Current Streak: {streak.current}</div>
        <div>Best Streak: {streak.best}</div>
      </div>

      <div>
        <div>{currentQuestion.prompt || "Choose the best tile to discard."}</div>
        <div>
          {Array.isArray(currentQuestion.hand)
            ? currentQuestion.hand.map((code, index) => {
                const isClickable = allowedChoices.has(code);
                const isDisabled = Boolean(lastEvaluation) || !isClickable;

                return (
                  <button
                    key={`${code}-${index}`}
                    type="button"
                    onClick={() => submitAnswer(code)}
                    disabled={isDisabled}
                    aria-label={
                      isClickable ? `Discard ${code}` : `Tile ${code} not selectable`
                    }
                  >
                    <Tile code={code} />
                  </button>
                );
              })
            : null}
        </div>
        {currentQuestion.hint ? <div>Hint: {currentQuestion.hint}</div> : null}
      </div>

      {lastEvaluation ? (
        <div>
          <div>{lastEvaluation.isCorrect ? "Correct" : "Incorrect"}</div>
          {lastEvaluation.feedback?.explanation ? (
            <div>{lastEvaluation.feedback.explanation}</div>
          ) : null}
        </div>
      ) : null}

      <div>
        {lastEvaluation && hasMoreQuestions ? (
          <button type="button" onClick={goNext}>
            Next
          </button>
        ) : null}

        <button type="button" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
}