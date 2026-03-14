import React, { useEffect, useState } from "react";
import Tile from "../components/Tile.jsx";
import Feedback from "../components/Feedback.jsx";

export default function TenpaiModule({
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
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    setSelectedChoice(null);
  }, [currentQuestion?.hand, currentQuestion?.answer]);

  const hasMoreQuestions = currentIndex < totalQuestions - 1;

  if (!currentQuestion) {
    return (
      <div>
        <h2>{moduleConfig?.title || "Tenpai Trainer"}</h2>
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

  function handleChoiceSelect(code) {
    if (lastEvaluation) {
      return;
    }

    setSelectedChoice(code);
    submitAnswer(code);
  }

  return (
    <div className="card stack">
      <div>
        <h2>{moduleConfig?.title || "Tenpai Trainer"}</h2>
        {moduleConfig?.description ? (
          <p className="muted small">{moduleConfig.description}</p>
        ) : null}
      </div>

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

      <div className="small">
        <strong>{currentQuestion.title}</strong>
      </div>

      <div className="hand-grid one-away-grid">
        {Array.isArray(currentQuestion.hand)
          ? currentQuestion.hand.map((code, index) => (
              <Tile key={`${code}-${index}`} code={code} />
            ))
          : null}
        <div className="empty-slot">?</div>
      </div>

      <div className="tile-grid">
        {Array.isArray(currentQuestion.choices)
          ? currentQuestion.choices.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleChoiceSelect(code)}
                disabled={Boolean(lastEvaluation)}
                aria-pressed={selectedChoice === code}
                aria-label={`Select ${code}`}
                style={{
                  background: "transparent",
                  border: selectedChoice === code ? "2px solid #2563eb" : "none",
                  padding: 0,
                  borderRadius: "8px",
                  cursor: lastEvaluation ? "default" : "pointer",
                }}
              >
                <Tile code={code} />
              </button>
            ))
          : null}
      </div>

      {currentQuestion.hint ? (
        <div className="hint small">{currentQuestion.hint}</div>
      ) : null}

      {lastEvaluation ? (
        <Feedback
          correct={lastEvaluation.isCorrect}
          text={lastEvaluation.feedback?.explanation || ""}
          hint={currentQuestion.hint || ""}
        />
      ) : null}

      <div>
        {lastEvaluation && hasMoreQuestions ? (
          <button type="button" onClick={goNext}>
            Next Hand
          </button>
        ) : null}

        <button type="button" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
}