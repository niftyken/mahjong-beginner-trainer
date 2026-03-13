import { createCorrectResult, createIncorrectResult } from "./evaluationResult.js";

export function checkRecognitionAnswer(question, userAnswer) {
  if (userAnswer === question.correctAnswer) {
    return createCorrectResult({
      correctAnswer: question.correctAnswer,
      message: "Correct.",
      explanation: question.correctExplanation || "",
    });
  }

  return createIncorrectResult({
    correctAnswer: question.correctAnswer,
    message: "Incorrect.",
    explanation: question.wrongExplanation || "",
  });
}