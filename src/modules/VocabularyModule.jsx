import Tile from '../components/Tile'
import PronounceButton from '../components/PronounceButton'
import { tiles } from '../data/tiles'
import { tileOrder } from '../data/tileOrder'

export default function VocabularyModule({
  showChinese,
  selectedTile,
  setSelectedTile,
}) {
  const tile = tiles[selectedTile]

  return (
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
          <div>
            <strong>{tile.label}</strong>
          </div>
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
  )
}