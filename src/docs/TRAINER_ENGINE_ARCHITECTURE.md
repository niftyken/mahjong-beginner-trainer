```markdown
# Mahjong Beginner Trainer  
## Trainer Engine Architecture

This document defines the canonical architecture for the Mahjong Beginner Trainer web application. It exists to ensure that future development — whether by humans or AI tools — follows consistent structural rules.

---

# Core Architecture Model

The trainer engine follows this flow:

```

questions → moduleConfig → trainingSession → moduleUI → evaluator → feedback

```

Each layer has a specific responsibility.

| Layer | Responsibility |
|------|----------------|
| **questions** | Define question content and instructional metadata |
| **moduleConfig** | Declares dataset, evaluator, and UI module |
| **trainingSession** | Controls progression, scoring, and session state |
| **moduleUI** | Renders the question and captures user input |
| **evaluator** | Determines correctness of an answer |
| **feedback** | Displays result, explanation, and progression controls |

---

# Design Principles

The system follows four architectural rules:

```

Data defines content.
Evaluators define correctness.
Session defines flow.
Modules define presentation.

```

Modules **must not implement scoring logic** or determine correctness.

Evaluators **must not render UI**.

Datasets **must not contain React code or logic**.

---

# QuestionObject Schema

Each dataset contains an array of QuestionObject records.

## Shared Canonical Fields

These fields are common across all trainers:

```

{
id: string,
hint?: string,
correctExplanation?: string,
wrongExplanation?: string
}

```

These fields provide instructional support for learners.

---

# Trainer-Specific Extensions

Different trainers extend the schema with their own fields.

## RecognitionTrainer

Used for tile identification exercises.

```

{
id,
tile: TileCode,
choices: string[],
correctAnswer: string,
hint?,
correctExplanation?,
wrongExplanation?
}

```

---

## HandTrainer

Used for determining whether a hand is a valid Mahjong winning hand.

```

{
id,
hand: TileCode[],
prompt?: string,
choices: string[],
correctAnswer: string,
hint?,
correctExplanation?,
wrongExplanation?
}

```

---

## DiscardTrainer

Used for identifying the best discard from a hand.

```

{
id,
hand: TileCode[],
choices: TileCode[],
correctAnswer: TileCode,
hint?,
correctExplanation?,
wrongExplanation?
}

```

### DiscardTrainer semantics

| Field | Meaning |
|------|--------|
| `hand` | The full 14-tile hand shown to the user |
| `choices` | Subset of tiles intended as plausible discard candidates |
| `correctAnswer` | The best discard tile |

The UI renders the **entire hand**, but only tiles present in `choices` are clickable.

---

# TileCode Standard

Tiles are represented using canonical TileCodes.

## Suited tiles

```

b1–b9   Bamboo
c1–c9   Characters
d1–d9   Dots

```

## Honor tiles

```

we  East Wind
ws  South Wind
ww  West Wind
wn  North Wind

dr  Red Dragon
dg  Green Dragon
dw  White Dragon

```

All modules and datasets must use these codes.

---

# Evaluator Contract

Each trainer has a dedicated evaluator.

Function signature:

```

checkXAnswer(question, userAnswer)

```

Evaluators return an **EvaluationResult**.

### Correct result

```

createCorrectResult({
correctAnswer,
message,
explanation
})

```

### Incorrect result

```

createIncorrectResult({
correctAnswer,
message,
explanation
})

```

Evaluators must be **pure functions**.

They must not modify session state.

---

# Module UI Contract

Trainer modules receive the following props:

```

moduleConfig
currentQuestion
currentIndex
totalQuestions
score
streak
lastEvaluation
submitAnswer
goNext
restart

```

Modules are responsible for:

* rendering the question
* collecting the user's answer
* displaying feedback

Modules must **not**:

* compute correctness
* manipulate the question dataset
* manage session progression

---

# Module Registry

All trainers are registered in:

```

src/trainerEngine/moduleRegistry.js

```

Example entry:

```

{
id: "DiscardTrainer",
title: "Discard Decision",
description: "Choose the best tile to discard from a Mahjong hand.",
dataset: discardQuestions,
evaluator: checkDiscardAnswer,
component: DiscardModule
}

```

The registry binds:

* dataset
* evaluator
* UI module

---

# TrainerShell

`TrainerShell` connects the trainer engine to module UI.

Responsibilities:

* loading the trainer from `moduleRegistry`
* managing the training session
* providing props to the module component

Modules should assume that TrainerShell provides **fully prepared session state**.

---

# Architectural Constraints

To maintain stability:

### Datasets must not contain:

* React components
* scoring logic
* answer validation logic

### Evaluators must not:

* render UI
* manipulate DOM
* manage session state

### Modules must not:

* compute correctness
* modify datasets

---

# Future Trainer Types

The architecture supports additional puzzle trainers such as:

* TenpaiTrainer
* WaitIdentificationTrainer
* MeldCompletionTrainer
* DefensiveDiscardTrainer

These should follow the same engine model.

---

# Repository Structure

Typical structure:

```

src/
components/
Tile.jsx
FullTile.jsx

modules/
RecognitionModule.jsx
HandModule.jsx
DiscardModule.jsx

data/
recognitionQuestions.js
discardQuestions.js

trainerEngine/
moduleRegistry.js
evaluators/
useTrainingSession.js

docs/
TRAINER_ENGINE_ARCHITECTURE.md

```

---

# Development Workflow

When adding a new trainer:

1. Create dataset file
2. Create evaluator
3. Create module UI
4. Register module in `moduleRegistry`
5. Add tab entry in `App.jsx`

---

# Long-Term Stability

The trainer engine is designed to:

* support multiple independent learning modules
* keep UI, evaluation logic, and data cleanly separated
* allow new trainers without modifying core engine logic

This separation enables maintainable growth of the project.

```

