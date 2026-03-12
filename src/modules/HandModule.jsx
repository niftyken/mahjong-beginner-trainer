import Tile from '../components/Tile'
import Feedback from '../components/Feedback'
import { handQuestions } from '../data/handQuestions'

export default function HandModule({
  showChinese,
  handIndex,
  handSelected,
  sethandSelected,
  nexthand,
}) {
  const q = handQuestions[Math.min(handIndex, handQuestions.length - 1)]
  const handAnswered = handSelected !== null
  const handCorrect = handSelected === q.isWinning

  return (
    <div className="card stack">
      <div>
        <h2>Module 2: 14-Tile Hand Drill</h2>
        <p className="muted small">
          Decide whether a full 14-tile hand is complete. This trains the core
          beginner skill of recognizing four groups plus one pair.
        </p>
      </div>

      {handIndex < handQuestions.length ? (
        <>
          <div className="hand-grid">
            {q.hand.map((code, index) => (
              <Tile
                key={`${code}-${index}`}
                code={code}
                showChinese={showChinese}
              />
            ))}
          </div>

          <div className="options">
            <button
              className="secondary"
              disabled={handAnswered}
              onClick={() => sethandSelected(true)}
              type="button"
            >
              Winning Hand
            </button>
            <button
              className="secondary"
              disabled={handAnswered}
              onClick={() => setHandSelected(false)}
              type="button"
            >
              Not Winning Yet
            </button>
          </div>

          {handAnswered && (
            <Feedback
              correct={handCorrect}
              text={handCorrect ? q.correct : q.wrong}
              hint={q.hint}
            />
          )}

          {handAnswered && (
            <button onClick={nextHand} type="button">
              {handIndex < handQuestions.length - 1
                ? 'Next hand'
                : 'Finish Module'}
            </button>
          )}
        </>
      ) : (
        <div className="feedback good">
          <strong>Module complete.</strong>
          <div className="small" style={{ marginTop: 6 }}>
            Nice. You are starting to read complete Mahjong hand shapes.
          </div>
        </div>
      )}
    </div>
  )
}