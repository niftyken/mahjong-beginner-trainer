import Tile from '../components/Tile'
import Feedback from '../components/Feedback'
import { tenpaiQuestions } from '../data/tenpaiQuestions'

export default function TenpaiModule({
  showChinese,
  tenpaiIndex,
  tenpaiSelected,
  setTenpaiSelected,
  nextTenpai,
}) {
  const q = tenpaiQuestions[Math.min(tenpaiIndex, tenpaiQuestions.length - 1)]
  const tenpaiAnswered = tenpaiSelected !== null
  const tenpaiCorrect = tenpaiSelected === q.answer

  return (
    <div className="card stack">
      <div>
        <h2>Module 4: Tenpai / One-Tile-Away Trainer</h2>
        <p className="muted small">
          Practice recognizing the tile that completes a nearly finished hand.
        </p>
      </div>

      {tenpaiIndex < tenpaiQuestions.length ? (
        <>
          <div className="small">
            <strong>{q.title}</strong>
          </div>

          <div className="hand-grid one-away-grid">
            {q.hand.map((code, index) => (
              <Tile
                key={`${code}-${index}`}
                code={code}
                showChinese={showChinese}
              />
            ))}
            <div className="empty-slot">?</div>
          </div>

          <div className="tile-grid">
            {q.choices.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => !tenpaiAnswered && setTenpaiSelected(code)}
                disabled={tenpaiAnswered}
                aria-pressed={tenpaiSelected === code}
                aria-label={`Select ${code}`}
                style={{
                  background: 'transparent',
                  border: tenpaiSelected === code ? '2px solid #2563eb' : 'none',
                  padding: 0,
                  borderRadius: '8px',
                  cursor: tenpaiAnswered ? 'default' : 'pointer',
                }}
              >
                <Tile
                  code={code}
                  showChinese={showChinese}
                  selected={tenpaiSelected === code}
                />
              </button>
            ))}
          </div>

          {tenpaiAnswered && (
            <Feedback
              correct={tenpaiCorrect}
              text={tenpaiCorrect ? q.correct : q.wrong}
              hint={q.hint}
            />
          )}

          {tenpaiAnswered && (
            <button onClick={nextTenpai} type="button">
              {tenpaiIndex < tenpaiQuestions.length - 1
                ? 'Next Hand'
                : 'Finish Module'}
            </button>
          )}
        </>
      ) : (
        <div className="feedback good">
          <strong>Module complete.</strong>
          <div className="small" style={{ marginTop: 6 }}>
            Nice. You are now practicing one of the most useful real-game Mahjong skills: recognizing the winning tile.
          </div>
        </div>
      )}
    </div>
  )
}