import { useMemo, useState } from 'react'
import { recognitionQuestions } from './data/recognitionQuestions'
import { puzzleQuestions } from './data/puzzleQuestions'
import RecognitionModule from './modules/RecognitionModule'
import VocabularyModule from './modules/VocabularyModule'
import PhraseModule from './modules/PhraseModule'
import PuzzleModule from './modules/PuzzleModule'

export default function App() {
  const [showChinese, setShowChinese] = useState(true)
  const [activeTab, setActiveTab] = useState('recognition')

  const [recognitionIndex, setRecognitionIndex] = useState(0)
  const [recognitionSelected, setRecognitionSelected] = useState(null)

  const [puzzleIndex, setPuzzleIndex] = useState(0)
  const [puzzleSelected, setPuzzleSelected] = useState(null)

  const [selectedTile, setSelectedTile] = useState('b2')

  const completed = useMemo(
    () => ({
      recognition: recognitionIndex >= recognitionQuestions.length,
      puzzle: puzzleIndex >= puzzleQuestions.length,
    }),
    [recognitionIndex, puzzleIndex]
  )

  const completedCount = Object.values(completed).filter(Boolean).length
  const progress = (completedCount / 2) * 100

  function nextRecognition() {
    if (recognitionIndex < recognitionQuestions.length - 1) {
      setRecognitionIndex(recognitionIndex + 1)
      setRecognitionSelected(null)
    } else {
      setRecognitionIndex(recognitionQuestions.length)
      setRecognitionSelected(null)
    }
  }

  function nextPuzzle() {
    if (puzzleIndex < puzzleQuestions.length - 1) {
      setPuzzleIndex(puzzleIndex + 1)
      setPuzzleSelected(null)
    } else {
      setPuzzleIndex(puzzleQuestions.length)
      setPuzzleSelected(null)
    }
  }

  return (
    <div className="container">
      <div className="hero-grid">
        <div className="card">
          <div className="row">
            <div>
              <div className="muted tiny">Vite + React prototype</div>
              <h1>Mahjong Beginner Trainer</h1>
              <p className="muted small" style={{ marginTop: 8, maxWidth: 720 }}>
                A browser-based trainer for absolute beginners learning Hong Kong
                style Mahjong, with optional Cantonese tile names and table phrases.
              </p>
            </div>
            <span className="badge">React v4</span>
          </div>

          <div className="row" style={{ marginTop: 14 }}>
            <div className="small muted">
              Progress: {completedCount} / 2 core modules complete
            </div>
            <button
              className="secondary"
              onClick={() => setShowChinese(!showChinese)}
              type="button"
            >
              {showChinese ? 'Hide Chinese Terms' : 'Show Chinese Terms'}
            </button>
          </div>

          <div className="progress" style={{ marginTop: 10 }}>
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="card">
          <h2>Tiny cheat sheet</h2>
          <p className="muted small" style={{ marginTop: 6 }}>
            A basic winning hand usually uses <strong>4 groups + 1 pair</strong>.
          </p>
          <div className="small" style={{ marginTop: 12 }}>
            <strong>Chow</strong>
            {showChinese ? ' / 食 (sik6)' : ''}: 3 consecutive suited tiles.
          </div>
          <div className="small">
            <strong>Pung</strong>
            {showChinese ? ' / 碰 (pung3)' : ''}: 3 identical tiles.
          </div>
          <div className="small">
            <strong>Kong</strong>
            {showChinese ? ' / 槓 (gong3)' : ''}: 4 identical tiles.
          </div>
        </div>
      </div>

      <div className="main-grid" style={{ marginTop: 16 }}>
        <div>
          <div className="tabs four-tabs">
            <button
              className={`tab ${activeTab === 'recognition' ? 'active' : ''}`}
              onClick={() => setActiveTab('recognition')}
              type="button"
            >
              Recognition
            </button>
            <button
              className={`tab ${activeTab === 'puzzle' ? 'active' : ''}`}
              onClick={() => setActiveTab('puzzle')}
              type="button"
            >
              14-Tile
            </button>
            <button
              className={`tab ${activeTab === 'vocabulary' ? 'active' : ''}`}
              onClick={() => setActiveTab('vocabulary')}
              type="button"
            >
              Vocabulary
            </button>
            <button
              className={`tab ${activeTab === 'phrases' ? 'active' : ''}`}
              onClick={() => setActiveTab('phrases')}
              type="button"
            >
              Phrases
            </button>
          </div>

          {activeTab === 'recognition' && (
            <RecognitionModule
              showChinese={showChinese}
              recognitionIndex={recognitionIndex}
              recognitionSelected={recognitionSelected}
              setRecognitionSelected={setRecognitionSelected}
              nextRecognition={nextRecognition}
            />
          )}

          {activeTab === 'puzzle' && (
            <PuzzleModule
              showChinese={showChinese}
              puzzleIndex={puzzleIndex}
              puzzleSelected={puzzleSelected}
              setPuzzleSelected={setPuzzleSelected}
              nextPuzzle={nextPuzzle}
            />
          )}

          {activeTab === 'vocabulary' && (
            <VocabularyModule
              showChinese={showChinese}
              selectedTile={selectedTile}
              setSelectedTile={setSelectedTile}
            />
          )}

          {activeTab === 'phrases' && <PhraseModule showChinese={showChinese} />}
        </div>

        <div className="stack">
          <div className="card">
            <h2>Why this version matters</h2>
            <div className="small muted" style={{ marginTop: 10 }}>
              The app now has more than one real training module, so the
              structure is starting to behave like a real curriculum.
            </div>
          </div>

          <div className="card">
            <h2>Next milestones</h2>
            <div className="small muted" style={{ marginTop: 10 }}>
              Add a discard trainer, then a tenpai trainer, and then consider
              moving progress tracking into a dedicated custom hook.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}