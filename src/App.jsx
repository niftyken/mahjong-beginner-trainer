import { useMemo, useState } from 'react'
import { recognitionQuestions } from './data/recognitionQuestions'
import RecognitionModule from './modules/RecognitionModule'
import VocabularyModule from './modules/VocabularyModule'
import PhraseModule from './modules/PhraseModule'

export default function App() {
  const [showChinese, setShowChinese] = useState(true)
  const [activeTab, setActiveTab] = useState('recognition')
  const [recognitionIndex, setRecognitionIndex] = useState(0)
  const [recognitionSelected, setRecognitionSelected] = useState(null)
  const [selectedTile, setSelectedTile] = useState('b2')

  const completed = useMemo(
    () => ({
      recognition: recognitionIndex >= recognitionQuestions.length,
    }),
    [recognitionIndex]
  )

  const completedCount = Object.values(completed).filter(Boolean).length
  const progress = (completedCount / 1) * 100

  function nextRecognition() {
    if (recognitionIndex < recognitionQuestions.length - 1) {
      setRecognitionIndex(recognitionIndex + 1)
      setRecognitionSelected(null)
    } else {
      setRecognitionIndex(recognitionQuestions.length)
      setRecognitionSelected(null)
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
                A browser-based trainer for absolute beginners learning Hong Kong style Mahjong,
                with optional Cantonese tile names and table phrases.
              </p>
            </div>
            <span className="badge">React v3</span>
          </div>

          <div className="row" style={{ marginTop: 14 }}>
            <div className="small muted">
              Progress: {completedCount} / 1 module complete
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
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'recognition' ? 'active' : ''}`}
              onClick={() => setActiveTab('recognition')}
              type="button"
            >
              Recognition
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

          {activeTab === 'vocabulary' && (
            <VocabularyModule
              showChinese={showChinese}
              selectedTile={selectedTile}
              setSelectedTile={setSelectedTile}
            />
          )}

          {activeTab === 'phrases' && (
            <PhraseModule showChinese={showChinese} />
          )}
        </div>

        <div className="stack">
          <div className="card">
            <h2>Why this version matters</h2>
            <div className="small muted" style={{ marginTop: 10 }}>
              App-level layout and state are now separated from module-level rendering.
            </div>
          </div>

          <div className="card">
            <h2>Next milestones</h2>
            <div className="small muted" style={{ marginTop: 10 }}>
              Add a 14-tile puzzle module, a tenpai trainer, and then move shared header content into reusable layout components.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}