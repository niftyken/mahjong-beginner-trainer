import Tile from '../components/Tile'
import Feedback from '../components/Feedback'
import { discardQuestions } from '../data/discardQuestions'

export default function DiscardModule({
  showChinese,
  discardIndex,
  discardSelected,
  setDiscardSelected,
  nextDiscard,
}) {
  const q = discardQuestions[Math.min(discardIndex, discardQuestions.length - 1)]
  const discardAnswered = discardSelected !== null
  const discardCorrect = q.answers.includes(discardSelected)

  return (
    <div className="card stack">
      <div>
        <h2>Module 3: Beginner Discard Trainer</h2>
        <p className="muted small">
          Practice a simple decision rule: keep connected suited tiles and be cautious with isolated honor tiles.
        </p>
      </div>

      {discardIndex < discardQuestions.length ? (
        <>
          <div className="small">
            <strong>{q.title}</strong>
          </div>

          <div className="hand-grid">
            {q.hand.map((code, index) => (
              <Tile
                key={`${code}-${index}`}
                code={code}
                showChinese={showChinese}
                selected={discardSelected === code}
                onClick={() => !discardAnswered && setDiscardSelected(code)}
              />
            ))}
          </div>

          {!discardAnswered && (
            <div className="small muted">
              Tap the tile you would discard first.
            </div>
          )}

          {discardAnswered && (
            <Feedback
              correct={discardCorrect}
              text={discardCorrect ? q.correct : q.wrong}
              hint={q.hint}
            />
          )}

          {discardAnswered && (
            <button onClick={nextDiscard} type="button">
              {discardIndex < discardQuestions.length - 1
                ? 'Next Hand'
                : 'Finish Module'}
            </button>
          )}
        </>
      ) : (
        <div className="feedback good">
          <strong>Module complete.</strong>
          <div className="small" style={{ marginTop: 6 }}>
            Nice. You are beginning to think about tile efficiency, not just hand recognition.
          </div>
        </div>
      )}
    </div>
  )
}