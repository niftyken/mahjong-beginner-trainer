# Mahjong Beginner Trainer

A browser-based training application for learning **Hong Kong style Mahjong** and **Cantonese table terminology**.

The goal of this project is to help beginners develop Mahjong intuition through **interactive trainers**, **puzzle-style exercises**, and **vocabulary learning**, preparing players to participate comfortably in real Mahjong games with Cantonese-speaking groups.

This project is designed to run entirely in a **web browser**, with no backend server required.

---

# Project Goals

The trainer focuses on three learning areas:

## 1. Tile Recognition
Learn to visually recognize Mahjong tiles quickly.

## 2. Hand Strategy
Practice identifying:
- winning hands
- correct discards
- waiting states (tenpai)

## 3. Table Vocabulary
Learn Cantonese Mahjong terminology used during gameplay.

---

# Technology Stack

Frontend framework:

- **React**

Build tool:

- **Vite**

Languages:

- JavaScript
- JSX
- CSS

Deployment:

- **Vercel**

Development environment:

- **StackBlitz**

Version control:

- **GitHub**

Animation / UI utilities:

- framer-motion
- lucide-react

---

# Architecture

The application is a **React Single Page Application (SPA)** organized into modular training systems.

Each training activity is implemented as an independent **module**, allowing new training types to be added without restructuring the entire application.

Shared UI components provide consistent tile rendering, pronunciation playback, and feedback messaging.

---

# Module System

The project uses two naming layers.

## Feature Modules (user-facing training systems)

- RecognitionTrainer
- HandTrainer
- DiscardTrainer
- TenpaiTrainer
- VocabularyTrainer
- PhraseTrainer

These represent the **training modes available to users**.

---

## Implementation Modules (code modules)

- RecognitionModule
- HandModule
- DiscardModule
- TenpaiModule
- VocabularyModule
- PhraseModule

Each implementation module contains the React components and logic powering the corresponding trainer.

Example mapping:

- RecognitionTrainer → RecognitionModule  
- HandTrainer → HandModule  
- DiscardTrainer → DiscardModule  
- TenpaiTrainer → TenpaiModule  
- VocabularyTrainer → VocabularyModule  
- PhraseTrainer → PhraseModule  

---

# Shared Components

Common UI components used across modules:

- Tile
- PronounceButton
- Feedback

These ensure consistent presentation of Mahjong tiles and learning feedback.

---

# Data Model

## Tile

Represents a Mahjong tile.

```javascript
{
  label: string,
  zh: string,
  jyutping: string,
  glyph: string,
  kind: "suit" | "honor"
}
```

---

## PuzzleQuestion

Used by the Hand Trainer.

```javascript
{
  hand: TileCode[],
  isWinning: boolean,
  correct: string,
  wrong: string,
  hint: string
}
```

---

## DiscardQuestion

```javascript
{
  hand: TileCode[],
  answers: TileCode[]
}
```

---

## TenpaiQuestion

```javascript
{
  hand: TileCode[],
  choices: TileCode[],
  answer: TileCode
}
```

---

# Data Sets

Current datasets include:

- tiles
- tileOrder
- recognitionQuestions
- handQuestions
- discardQuestions
- tenpaiQuestions
- phrases

These datasets drive the training exercises.

---

# Project Structure

Typical structure:

```
src/

  components/
    Tile.jsx
    PronounceButton.jsx
    Feedback.jsx

  modules/
    RecognitionModule.jsx
    HandModule.jsx
    DiscardModule.jsx
    TenpaiModule.jsx
    VocabularyModule.jsx
    PhraseModule.jsx

  data/
    tiles.js
    tileOrder.js
    recognitionQuestions.js
    handQuestions.js
    discardQuestions.js
    tenpaiQuestions.js
    phrases.js
```

---

# Design Constraints

The project intentionally maintains several constraints:

- Browser-only runtime
- No backend server
- Mobile-friendly layout
- Free-tier hosting
- Cloud-based development workflow

This allows the project to remain easy to deploy and accessible from any device.

---

# Current Development Status

Early prototype.

Current work focuses on:

- establishing the modular architecture
- building training datasets
- implementing the first interactive trainers
- refining UI/UX for learning workflows

---

# Future Directions

Possible future features include:

- scoring trainer
- meld recognition trainer
- simulated Mahjong table play
- adaptive difficulty
- spaced repetition for vocabulary
- audio pronunciation improvements
