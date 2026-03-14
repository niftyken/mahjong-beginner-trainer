import { recognitionQuestions } from "../../data/recognitionQuestions.js";
import { handQuestions } from "../../data/handQuestions.js";
import { discardQuestions } from "../../data/discardQuestions.js";
import { checkRecognitionAnswer } from "../evaluators/checkRecognitionAnswer.js";
import { checkHandAnswer } from "../evaluators/checkHandAnswer.js";
import { checkDiscardAnswer } from "../evaluators/checkDiscardAnswer.js";
import RecognitionModule from "../../modules/RecognitionModule.jsx";
import HandModule from "../../modules/HandModule.jsx";
import DiscardModule from "../../modules/DiscardModule.jsx";

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
    description: "Decide whether a Mahjong hand is a winning hand.",
    dataset: handQuestions,
    evaluator: checkHandAnswer,
    component: HandModule,
  },

  DiscardTrainer: {
    id: "DiscardTrainer",
    title: "Discard Decision",
    description: "Choose the best tile to discard from a Mahjong hand.",
    dataset: discardQuestions,
    evaluator: checkDiscardAnswer,
    component: DiscardModule,
  },
};