import Tile from '../components/Tile'
import Feedback from '../components/Feedback'
import PronounceButton from '../components/PronounceButton'
import { tiles } from '../data/tiles'
import { recognitionQuestions } from '../data/recognitionQuestions'

export default function RecognitionModule({
  showChinese,
  recognitionIndex,
  recognitionSelected,
  setRecognitionSelected,
  nextRecognition,
}) {
  const q = recognitionQuestions[Math.min(recognitionIndex, recognitionQuestions.length - 1)]
  const recognitionAnswered = recognitionSelected !== null
  const recognitionCorrect = recognitionSelected === q.answer

  return (
    <div className="card stack">
      <div>
        <h2>Module 1: Tile Recognition</h2>
        <p className="muted small">
          Learn to identify tiles by sight and connect them to useful Cantonese terms.
        </p>
      </div>

      {recognitionIndex < recognitionQuestions.length ? (
        <>
          <div className="center">
            <Tile code={q.tile} large showChinese={showChinese} />
          </div>

          {showChinese && (
            <div className="center small muted">
              {tiles[q.tile].zh} ({tiles[q.tile].jyutping}){' '}
              <PronounceButton text={tiles[q.tile].zh} />
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
              {recognitionIndex < recognitionQuestions.length - 1
                ? 'Next Question'
                : 'Finish Module'}
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
  )
}