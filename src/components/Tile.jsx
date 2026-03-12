import { tiles } from '../data/tiles'

export default function Tile({
  code,
  large = false,
  selected = false,
  showChinese = true,
  onClick,
}) {
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