import { createCorrectResult, createIncorrectResult } from "./evaluationResult.js";

export function checkTenpaiAnswer(question, userAnswer) {
  if (userAnswer === question.answer) {
    return createCorrectResult({
      correctAnswer: question.answer,
      message: "Correct.",
      explanation: question.correct || "",
    });
  }

  return createIncorrectResult({
    correctAnswer: question.answer,
    message: "Incorrect.",
    explanation: question.wrong || "",
  });
}