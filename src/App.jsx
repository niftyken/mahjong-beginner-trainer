import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2 } from 'lucide-react'

const tiles = {
  b1: { label: '1 Bamboo', zh: '一索', jyutping: 'jat1 sok3', glyph: '🀐', suitWordZh: '索', suitWordJyutping: 'sok3', kind: 'suit' },
  b2: { label: '2 Bamboo', zh: '二索', jyutping: 'ji6 sok3', glyph: '🀑', suitWordZh: '索', suitWordJyutping: 'sok3', kind: 'suit' },
  b3: { label: '3 Bamboo', zh: '三索', jyutping: 'saam1 sok3', glyph: '🀒', suitWordZh: '索', suitWordJyutping: 'sok3', kind: 'suit' },
  b4: { label: '4 Bamboo', zh: '四索', jyutping: 'sei3 sok3', glyph: '🀓', suitWordZh: '索', suitWordJyutping: 'sok3', kind: 'suit' },
  b5: { label: '5 Bamboo', zh: '五索', jyutping: 'ng5 sok3', glyph: '🀔', suitWordZh: '索', suitWordJyutping: 'sok3', kind: 'suit' },
  b6: { label: '6 Bamboo', zh: '六索', jyutping: 'luk6 sok3', glyph: '🀕', suitWordZh: '索', suitWordJyutping: 'sok3', kind: 'suit' },
  c2: { label: '2 Characters', zh: '二萬', jyutping: 'ji6 maan6', glyph: '🀈', suitWordZh: '萬', suitWordJyutping: 'maan6', kind: 'suit' },
  c3: { label: '3 Characters', zh: '三萬', jyutping: 'saam1 maan6', glyph: '🀉', suitWordZh: '萬', suitWordJyutping: 'maan6', kind: 'suit' },
  c4: { label: '4 Characters', zh: '四萬', jyutping: 'sei3 maan6', glyph: '🀊', suitWordZh: '萬', suitWordJyutping: 'maan6', kind: 'suit' },
  c5: { label: '5 Characters', zh: '五萬', jyutping: 'ng5 maan6', glyph: '🀋', suitWordZh: '萬', suitWordJyutping: 'maan6', kind: 'suit' },
  c6: { label: '6 Characters', zh: '六萬', jyutping: 'luk6 maan6', glyph: '🀌', suitWordZh: '萬', suitWordJyutping: 'maan6', kind: 'suit' },
  d2: { label: '2 Dots', zh: '二筒', jyutping: 'ji6 tung4', glyph: '🀚', suitWordZh: '筒', suitWordJyutping: 'tung4', kind: 'suit' },
  d3: { label: '3 Dots', zh: '三筒', jyutping: 'saam1 tung4', glyph: '🀛', suitWordZh: '筒', suitWordJyutping: 'tung4', kind: 'suit' },
  d4: { label: '4 Dots', zh: '四筒', jyutping: 'sei3 tung4', glyph: '🀜', suitWordZh: '筒', suitWordJyutping: 'tung4', kind: 'suit' },
  d6: { label: '6 Dots', zh: '六筒', jyutping: 'luk6 tung4', glyph: '🀞', suitWordZh: '筒', suitWordJyutping: 'tung4', kind: 'suit' },
  d7: { label: '7 Dots', zh: '七筒', jyutping: 'cat1 tung4', glyph: '🀟', suitWordZh: '筒', suitWordJyutping: 'tung4', kind: 'suit' },
  d8: { label: '8 Dots', zh: '八筒', jyutping: 'baat3 tung4', glyph: '🀠', suitWordZh: '筒', suitWordJyutping: 'tung4', kind: 'suit' },
  east: { label: 'East Wind', zh: '東', jyutping: 'dung1', glyph: '🀀', kind: 'honor' },
  south: { label: 'South Wind', zh: '南', jyutping: 'naam4', glyph: '🀁', kind: 'honor' },
  west: { label: 'West Wind', zh: '西', jyutping: 'sai1', glyph: '🀂', kind: 'honor' },
  north: { label: 'North Wind', zh: '北', jyutping: 'bak1', glyph: '🀃', kind: 'honor' },
  red: { label: 'Red Dragon', zh: '中', jyutping: 'zung1', glyph: '🀄', kind: 'honor' },
  green: { label: 'Green Dragon', zh: '發', jyutping: 'faat3', glyph: '🀅', kind: 'honor' },
  white: { label: 'White Dragon', zh: '白板', jyutping: 'baak6 baan2', glyph: '🀆', kind: 'honor' },
}

const tileOrder = [
  'b1', 'b2', 'b3', 'b4', 'b5', 'b6',
  'c2', 'c3', 'c4', 'c5', 'c6',
  'd2', 'd3', 'd4', 'd6', 'd7', 'd8',
  'east', 'south', 'west', 'north', 'red', 'green', 'white',
]

const recognitionQuestions = [
  {
    tile: 'red',
    options: ['Red Dragon', 'East Wind', 'White Dragon', '3 Dots'],
    answer: 'Red Dragon',
    correct: 'Correct. This is Red Dragon, 中 (zung1). It is an honor tile, so it cannot be part of a chow / 食 (sik6).',
    wrong: 'This tile is Red Dragon, 中 (zung1). Honor tiles do not form chows / 食 (sik6), which makes them less flexible than suited tiles.',
    hint: 'Start by noticing whether the tile is a suit tile or an honor tile.',
  },
  {
    tile: 'b3',
    options: ['3 Bamboo', '3 Dots', '4 Bamboo', '3 Characters'],
    answer: '3 Bamboo',
    correct: 'Correct. This is 3 Bamboo, 三索 (saam1 sok3). The word 索 (sok3) tells you it belongs to the Bamboo suit.',
    wrong: 'This is 3 Bamboo, 三索 (saam1 sok3). A very useful Cantonese habit is learning 萬, 索, and 筒 as the three suit words.',
    hint: 'When you see 索, think Bamboo. When you see 萬, think Characters. When you see 筒, think Dots.',
  },
]

const phrases = [
  { phrase: '食', jyutping: 'sik6', english: 'Chow', example: '我食。', exampleJyutping: 'ngo5 sik6.' },
  { phrase: '碰', jyutping: 'pung3', english: 'Pung', example: '我碰。', exampleJyutping: 'ngo5 pung3.' },
  { phrase: '槓', jyutping: 'gong3', english: 'Kong', example: '我槓。', exampleJyutping: 'ngo5 gong3.' },
  { phrase: '胡', jyutping: 'wu4', english: 'Win / Mahjong', example: '我胡。', exampleJyutping: 'ngo5 wu4.' },
]

function speak(text) {
  if (!('speechSynthesis' in window)) return
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'zh-HK'
  utterance.rate = 0.85
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}

function PronounceButton({ text }) {
  return (
    <button className="ghost" onClick={() => speak(text)} type="button" aria-label={`Play ${text}`}>
      <Volume2 size={16} />
    </button>
  )
}

function Tile({ code, large = false, selected = false, showChinese = true, onClick }) {
  const tile = tiles[code]
  return (
    <button
      type="button"
      className={`tile ${large ? 'large' : ''} ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="glyph">{tile.glyph}</div>
      <div className="label">{tile.label}</div>
      {showChinese && (
        <>
          <div className="zh">{tile.zh}</div>
          <div className="jp">{tile.jyutping}</div>
        </>
      )}
    </button>
  )
}

function Feedback({ correct, text, hint }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`feedback ${correct ? 'good' : ''}`}
    >
      <div><strong>{correct ? 'Nice — here’s why' : 'Not quite — here’s why'}</strong></div>
      <div className="small" style={{ marginTop: 6 }}>{text}</div>
      <div className="hint small">
        <strong>Beginner hint:</strong> {hint}
      </div>
    </motion.div>
  )
}

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
            <span className="badge">React v1</span>
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
                    Nice. Your first React Mahjong module is working.
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
              This is now a proper React app with no missing UI-library imports.
            </div>
          </div>

          <div className="card">
            <h2>Next milestones</h2>
            <div className="small muted" style={{ marginTop: 10 }}>
              After this works, we can add the 14-tile puzzle drill, discard trainer, then connect GitHub and deploy to Vercel.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}