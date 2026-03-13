import React from "react";
import { MODULE_REGISTRY } from "../domain/modules/moduleRegistry.js";
import { useTrainingSession } from "../domain/session/useTrainingSession.js";

export default function TrainerShell({ trainerId }) {
  const moduleConfig = MODULE_REGISTRY[trainerId] ?? null;

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    streak,
    lastEvaluation,
    submitAnswer,
    goNext,
    restart,
  } = useTrainingSession(moduleConfig);

  if (!moduleConfig) {
    return <div>Unknown trainer.</div>;
  }

  const ModuleComponent = moduleConfig.component;

  return (
    <ModuleComponent
      moduleConfig={moduleConfig}
      currentQuestion={currentQuestion}
      currentIndex={currentIndex}
      totalQuestions={totalQuestions}
      score={score}
      streak={streak}
      lastEvaluation={lastEvaluation}
      submitAnswer={submitAnswer}
      goNext={goNext}
      restart={restart}
    />
  );
}