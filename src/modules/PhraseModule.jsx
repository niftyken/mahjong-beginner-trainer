import PronounceButton from '../components/PronounceButton'
import { phrases } from '../data/phrases'

export default function PhraseModule({ showChinese }) {
  return (
    <div className="card stack">
      <div>
        <h2>Cantonese Table Talk</h2>
        <p className="muted small">
          Useful action words an English-speaking beginner may hear at a casual table.
        </p>
      </div>

      <div className="phrase-grid">
        {phrases.map((p) => (
          <div key={p.phrase} className="vocab">
            <div className="row">
              <div>
                <div>
                  <strong>{showChinese ? p.phrase : p.english}</strong>
                </div>
                <div className="small muted">{p.english}</div>
              </div>
              <PronounceButton text={p.phrase} />
            </div>

            {showChinese && (
              <div className="small" style={{ marginTop: 6 }}>
                {p.jyutping}
              </div>
            )}

            <div className="example small">
              <strong>Example</strong>
              <br />
              {p.example}
              <br />
              <span className="muted">{p.exampleJyutping}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}