import { useMemo, useState } from 'react'
import { recognitionQuestions } from './data/recognitionQuestions'
import { handQuestions } from './data/handQuestions'
import { discardQuestions } from './data/discardQuestions'
import { tenpaiQuestions } from './data/tenpaiQuestions'
import RecognitionModule from './modules/RecognitionModule'
import VocabularyModule from './modules/VocabularyModule'
import PhraseModule from './modules/PhraseModule'
import HandModule from './modules/HandModule'
import DiscardModule from './modules/DiscardModule'
import TenpaiModule from './modules/TenpaiModule'

export default function App() {
  const [showChinese, setShowChinese] = useState(true)
  const [activeTab, setActiveTab] = useState('recognition')

  const [recognitionIndex, setRecognitionIndex] = useState(0)
  const [recognitionSelected, setRecognitionSelected] = useState(null)

  const [handIndex, setHandIndex] = useState(0)
  const [handSelected, setHandSelected] = useState(null)

  const [discardIndex, setDiscardIndex] = useState(0)
  const [discardSelected, setDiscardSelected] = useState(null)

  const [tenpaiIndex, setTenpaiIndex] = useState(0)
  const [tenpaiSelected, setTenpaiSelected] = useState(null)

  const [selectedTile, setSelectedTile] = useState('b2')

  const completed = useMemo(
    () => ({
      recognition: recognitionIndex >= recognitionQuestions.length,
      hand: handIndex >= handQuestions.length,
      discard: discardIndex >= discardQuestions.length,
      tenpai: tenpaiIndex >= tenpaiQuestions.length,
    }),
    [recognitionIndex, handIndex, discardIndex, tenpaiIndex]
  )

  const completedCount = Object.values(completed).filter(Boolean).length
  const progress = (completedCount / 4) * 100

  function nextRecognition() {
    if (recognitionIndex < recognitionQuestions.length - 1) {
      setRecognitionIndex(recognitionIndex + 1)
      setRecognitionSelected(null)
    } else {
      setRecognitionIndex(recognitionQuestions.length)
      setRecognitionSelected(null)
    }
  }

  function nextHand() {
    if (handIndex < handQuestions.length - 1) {
      setHandIndex(handIndex + 1)
      setHandSelected(null)
    } else {
      setHandIndex(handQuestions.length)
      setHandSelected(null)
    }
  }

  function nextDiscard() {
    if (discardIndex < discardQuestions.length - 1) {
      setDiscardIndex(discardIndex + 1)
      setDiscardSelected(null)
    } else {
      setDiscardIndex(discardQuestions.length)
      setDiscardSelected(null)
    }
  }

  function nextTenpai() {
    if (tenpaiIndex < tenpaiQuestions.length - 1) {
      setTenpaiIndex(tenpaiIndex + 1)
      setTenpaiSelected(null)
    } else {
      setTenpaiIndex(tenpaiQuestions.length)
      setTenpaiSelected(null)
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
            <span className="badge">React v6</span>
          </div>

          <div className="row" style={{ marginTop: 14 }}>
            <div className="small muted">
              Progress: {completedCount} / 4 core modules complete
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
          <div className="tabs six-tabs">
            <button
              className={`tab ${activeTab === 'recognition' ? 'active' : ''}`}
              onClick={() => setActiveTab('recognition')}
              type="button"
            >
              Recognition
            </button>
            <button
              className={`tab ${activeTab === 'hand' ? 'active' : ''}`}
              onClick={() => setActiveTab('hand')}
              type="button"
            >
              14-Tile
            </button>
            <button
              className={`tab ${activeTab === 'discard' ? 'active' : ''}`}
              onClick={() => setActiveTab('discard')}
              type="button"
            >
              Discard
            </button>
            <button
              className={`tab ${activeTab === 'tenpai' ? 'active' : ''}`}
              onClick={() => setActiveTab('tenpai')}
              type="button"
            >
              Tenpai
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

          {activeTab === 'hand' && (
            <HandModule
              showChinese={showChinese}
              handIndex={handIndex}
              handSelected={handSelected}
              setHandSelected={setHandSelected}
              nextHand={nextHand}
            />
          )}

          {activeTab === 'discard' && (
            <DiscardModule
              showChinese={showChinese}
              discardIndex={discardIndex}
              discardSelected={discardSelected}
              setDiscardSelected={setDiscardSelected}
              nextDiscard={nextDiscard}
            />
          )}

          {activeTab === 'tenpai' && (
            <TenpaiModule
              showChinese={showChinese}
              tenpaiIndex={tenpaiIndex}
              tenpaiSelected={tenpaiSelected}
              setTenpaiSelected={setTenpaiSelected}
              nextTenpai={nextTenpai}
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
              The curriculum now covers tile recognition, full-hand evaluation,
              discard judgment, and one-tile-away recognition.
            </div>
          </div>

          <div className="card">
            <h2>Next milestones</h2>
            <div className="small muted" style={{ marginTop: 10 }}>
              Randomize question order, add a restart/reset mechanism, and then
              consider extracting module progress logic into a reusable hook.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}