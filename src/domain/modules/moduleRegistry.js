import { recognitionQuestions } from "../../data/recognitionQuestions.js";
import { checkRecognitionAnswer } from "../evaluators/checkRecognitionAnswer.js";
import RecognitionModule from "../../modules/RecognitionModule.jsx";

export const MODULE_REGISTRY = {
  RecognitionTrainer: {
    id: "RecognitionTrainer",
    title: "Tile Recognition",
    description: "Identify Mahjong tiles by name and appearance.",
    dataset: recognitionQuestions,
    evaluator: checkRecognitionAnswer,
    component: RecognitionModule,
  },
};