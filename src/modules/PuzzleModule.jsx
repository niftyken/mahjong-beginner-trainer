import Tile from '../components/Tile'
import Feedback from '../components/Feedback'
import { puzzleQuestions } from '../data/puzzleQuestions'

export default function PuzzleModule({
  showChinese,
  puzzleIndex,
  puzzleSelected,
  setPuzzleSelected,
  nextPuzzle,
}) {
  const q = puzzleQuestions[Math.min(puzzleIndex, puzzleQuestions.length - 1)]
  const puzzleAnswered = puzzleSelected !== null
  const puzzleCorrect = puzzleSelected === q.isWinning

  return (
    <div className="card stack">
      <div>
        <h2>Module 2: 14-Tile Puzzle Drill</h2>
        <p className="muted small">
          Decide whether a full 14-tile hand is complete. This trains the core
          beginner skill of recognizing four groups plus one pair.
        </p>
      </div>

      {puzzleIndex < puzzleQuestions.length ? (
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
              disabled={puzzleAnswered}
              onClick={() => setPuzzleSelected(true)}
              type="button"
            >
              Winning Hand
            </button>
            <button
              className="secondary"
              disabled={puzzleAnswered}
              onClick={() => setPuzzleSelected(false)}
              type="button"
            >
              Not Winning Yet
            </button>
          </div>

          {puzzleAnswered && (
            <Feedback
              correct={puzzleCorrect}
              text={puzzleCorrect ? q.correct : q.wrong}
              hint={q.hint}
            />
          )}

          {puzzleAnswered && (
            <button onClick={nextPuzzle} type="button">
              {puzzleIndex < puzzleQuestions.length - 1
                ? 'Next Puzzle'
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