function createEvaluationResult({
    isCorrect,
    correctAnswer = null,
    scoreDelta = 0,
    feedback = {},
  } = {}) {
    return {
      isCorrect: Boolean(isCorrect),
      correctAnswer,
      scoreDelta,
      feedback: {
        message: feedback.message || "",
        explanation: feedback.explanation || "",
      },
    };
  }
  
  function createCorrectResult({
    correctAnswer = null,
    scoreDelta = 1,
    message = "Correct.",
    explanation = "",
  } = {}) {
    return createEvaluationResult({
      isCorrect: true,
      correctAnswer,
      scoreDelta,
      feedback: {
        message,
        explanation,
      },
    });
  }
  
  function createIncorrectResult({
    correctAnswer = null,
    scoreDelta = 0,
    message = "Incorrect.",
    explanation = "",
  } = {}) {
    return createEvaluationResult({
      isCorrect: false,
      correctAnswer,
      scoreDelta,
      feedback: {
        message,
        explanation,
      },
    });
  }
  
  export {
    createEvaluationResult,
    createCorrectResult,
    createIncorrectResult,
  };