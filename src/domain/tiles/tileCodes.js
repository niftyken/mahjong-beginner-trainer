const SUITED_TILE_CODES = Object.freeze([
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
  ]);
  
  const WIND_TILE_CODES = Object.freeze(["we", "ws", "ww", "wn"]);
  
  const DRAGON_TILE_CODES = Object.freeze(["dr", "dg", "dw"]);
  
  const HONOR_TILE_CODES = Object.freeze([
    ...WIND_TILE_CODES,
    ...DRAGON_TILE_CODES,
  ]);
  
  const ALL_TILE_CODES = Object.freeze([
    ...SUITED_TILE_CODES,
    ...HONOR_TILE_CODES,
  ]);
  
  const TILE_CODE_SET = new Set(ALL_TILE_CODES);
  
  function isTileCode(value) {
    return typeof value === "string" && TILE_CODE_SET.has(value);
  }
  
  function isSuitedTileCode(value) {
    return typeof value === "string" && SUITED_TILE_CODES.includes(value);
  }
  
  function isWindTileCode(value) {
    return typeof value === "string" && WIND_TILE_CODES.includes(value);
  }
  
  function isDragonTileCode(value) {
    return typeof value === "string" && DRAGON_TILE_CODES.includes(value);
  }
  
  function isHonorTileCode(value) {
    return typeof value === "string" && HONOR_TILE_CODES.includes(value);
  }
  
  function assertTileCode(value, message) {
    if (!isTileCode(value)) {
      throw new Error(message || `Invalid TileCode: ${String(value)}`);
    }
  
    return value;
  }
  
  function normalizeTileCode(value) {
    if (typeof value !== "string") {
      return null;
    }
  
    const normalized = value.trim().toLowerCase();
    return isTileCode(normalized) ? normalized : null;
  }
  
  export {
    SUITED_TILE_CODES,
    WIND_TILE_CODES,
    DRAGON_TILE_CODES,
    HONOR_TILE_CODES,
    ALL_TILE_CODES,
    isTileCode,
    isSuitedTileCode,
    isWindTileCode,
    isDragonTileCode,
    isHonorTileCode,
    assertTileCode,
    normalizeTileCode,
  };