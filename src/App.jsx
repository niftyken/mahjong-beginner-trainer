import { useMemo, useState } from 'react'
import Tile from './components/Tile'
import Feedback from './components/Feedback'
import PronounceButton from './components/PronounceButton'
import { tiles } from './data/tiles'
import { tileOrder } from './data/tileOrder'
import { recognitionQuestions } from './data/recognitionQuestions'
import { phrases } from './data/phrases'

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

  const q = recognitionQuestions[Math.min(recognitionIndex, recognitionQuestions.length - 1)]
  const recognitionAnswered = recognitionSelected !== null
  const recognitionCorrect = recognitionSelected === q.answer
  const tile = tiles[selectedTile]

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
            <span className="badge">React v2</span>
          </div>

          <div className="row" style={{ marginTop: 14 }}>
            <div className="small muted">Progress: {completedCount} / 1 module complete</div>
            <button className="secondary" onClick={() => setShowChinese(!showChinese)} type="button">
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
            <strong>Chow</strong>{showChinese ? ' / 食 (sik6)' : ''}: 3 consecutive suited tiles.
          </div>
          <div className="small">
            <strong>Pung</strong>{showChinese ? ' / 碰 (pung3)' : ''}: 3 identical tiles.
          </div>
          <div className="small">
            <strong>Kong</strong>{showChinese ? ' / 槓 (gong3)' : ''}: 4 identical tiles.
          </div>
        </div>
      </div>

      <div className="main-grid" style={{ marginTop: 16 }}>
        <div>
          <div className="tabs">
            <button className={`tab ${activeTab === 'recognition' ? 'active' : ''}`} onClick={() => setActiveTab('recognition')} type="button">
              Recognition
            </button>
            <button className={`tab ${activeTab === 'vocabulary' ? 'active' : ''}`} onClick={() => setActiveTab('vocabulary')} type="button">
              Vocabulary
            </button>
            <button className={`tab ${activeTab === 'phrases' ? 'active' : ''}`} onClick={() => setActiveTab('phrases')} type="button">
              Phrases
            </button>
          </div>

          {activeTab === 'recognition' && (
            <div className="card stack">
              <div>
                <h2>Module 1: Tile Recognition</h2>
                <p className="muted small">Learn to identify tiles by sight and connect them to useful Cantonese terms.</p>
              </div>

              {recognitionIndex < recognitionQuestions.length ? (
                <>
                  <div className="center">
                    <Tile code={q.tile} large showChinese={showChinese} />
                  </div>

                  {showChinese && (
                    <div className="center small muted">
                      {tiles[q.tile].zh} ({tiles[q.tile].jyutping}) <PronounceButton text={tiles[q.tile].zh} />
                    </div>
                  )}

                  <div className="options">
                    {q.options.map((option) => (
                      <button
                        key={option}
                        className="secondary"
                        disabled={recognitionAnswered}
                        onClick={() => setRecognitionSelected(option)}
                        type="button"
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {recognitionAnswered && (
                    <Feedback
                      correct={recognitionCorrect}
                      text={recognitionCorrect ? q.correct : q.wrong}
                      hint={q.hint}
                    />
                  )}

                  {recognitionAnswered && (
                    <button onClick={nextRecognition} type="button">
                      {recognitionIndex < recognitionQuestions.length - 1 ? 'Next Question' : 'Finish Module'}
                    </button>
                  )}
                </>
              ) : (
                <div className="feedback good">
                  <strong>Module complete.</strong>
                  <div className="small" style={{ marginTop: 6 }}>
                    Nice. Your first refactored React Mahjong module is working.
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'vocabulary' && (
            <div className="stack">
              <div className="card">
                <h2>Tile Vocabulary Trainer</h2>
                <p className="muted small" style={{ marginTop: 6 }}>
                  Tap a tile to study its English name, Chinese characters, and jyutping.
                </p>

                <div className="tile-grid" style={{ marginTop: 14 }}>
                  {tileOrder.map((code) => (
                    <Tile
                      key={code}
                      code={code}
                      showChinese={showChinese}
                      selected={selectedTile === code}
                      onClick={() => setSelectedTile(code)}
                    />
                  ))}
                </div>
              </div>

              <div className="card">
                <h3>Selected tile</h3>
                <div className="center" style={{ marginTop: 12 }}>
                  <Tile code={selectedTile} large showChinese={showChinese} />
                </div>
                <div className="vocab" style={{ marginTop: 12 }}>
                  <div><strong>{tile.label}</strong></div>
                  <div className="small" style={{ marginTop: 6 }}>
                    {tile.zh} ({tile.jyutping}) <PronounceButton text={tile.zh} />
                  </div>
                  <div className="small muted" style={{ marginTop: 8 }}>
                    {tile.kind === 'suit'
                      ? `The suit word here is ${tile.suitWordZh} (${tile.suitWordJyutping}).`
                      : 'This is an honor tile. Honor tiles do not form chows.'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'phrases' && (
            <div className="card stack">
              <div>
                <h2>Cantonese Table Talk</h2>
                <p className="muted small">Useful action words an English-speaking beginner may hear at a casual table.</p>
              </div>

              <div className="phrase-grid">
                {phrases.map((p) => (
                  <div key={p.phrase} className="vocab">
                    <div className="row">
                      <div>
                        <div><strong>{showChinese ? p.phrase : p.english}</strong></div>
                        <div className="small muted">{p.english}</div>
                      </div>
                      <PronounceButton text={p.phrase} />
                    </div>
                    {showChinese && <div className="small" style={{ marginTop: 6 }}>{p.jyutping}</div>}
                    <div className="example small">
                      <strong>Example</strong><br />
                      {p.example}<br />
                      <span className="muted">{p.exampleJyutping}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="stack">
          <div className="card">
            <h2>Why this version matters</h2>
            <div className="small muted" style={{ marginTop: 10 }}>
              Data, UI, and utility logic are now separated into files, which makes future modules much easier to add.
            </div>
          </div>

          <div className="card">
            <h2>Next milestones</h2>
            <div className="small muted" style={{ marginTop: 10 }}>
              Add a 14-tile puzzle module, a tenpai trainer, and then start extracting tab sections into their own components.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}