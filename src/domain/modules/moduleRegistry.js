import { recognitionQuestions } from "../../data/recognitionQuestions.js";
import { handQuestions } from "../../data/handQuestions.js";
import { checkRecognitionAnswer } from "../evaluators/checkRecognitionAnswer.js";
import { checkHandAnswer } from "../evaluators/checkHandAnswer.js";
import RecognitionModule from "../../modules/RecognitionModule.jsx";
import HandModule from "../../modules/HandModule.jsx";

export const MODULE_REGISTRY = {
  RecognitionTrainer: {
    id: "RecognitionTrainer",
    title: "Tile Recognition",
    description: "Identify Mahjong tiles by name and appearance.",
    dataset: recognitionQuestions,
    evaluator: checkRecognitionAnswer,
    component: RecognitionModule,
  },

  HandTrainer: {
    id: "HandTrainer",
    title: "Winning Hand Check",
    description: "Decide whether a 14-tile hand is a complete winning hand.",
    dataset: handQuestions,
    evaluator: checkHandAnswer,
    component: HandModule,
  },
};