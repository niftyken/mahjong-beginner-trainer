import {
    ALL_TILE_CODES,
    assertTileCode,
    isDragonTileCode,
    isSuitedTileCode,
    isWindTileCode,
  } from "./tileCodes.js";
  
  const SUIT_INFO = Object.freeze({
    b: {
      suit: "bamboo",
      kind: "suit",
      zhSuffix: "索",
      jyutpingSuffix: "sok3",
      glyphs: ["🀐", "🀑", "🀒", "🀓", "🀔", "🀕", "🀖", "🀗", "🀘"],
    },
    c: {
      suit: "character",
      kind: "suit",
      zhSuffix: "萬",
      jyutpingSuffix: "maan6",
      glyphs: ["🀇", "🀈", "🀉", "🀊", "🀋", "🀌", "🀍", "🀎", "🀏"],
    },
    d: {
      suit: "dot",
      kind: "suit",
      zhSuffix: "筒",
      jyutpingSuffix: "tung4",
      glyphs: ["🀙", "🀚", "🀛", "🀜", "🀝", "🀞", "🀟", "🀠", "🀡"],
    },
  });
  
  const NUMBER_INFO = Object.freeze({
    1: { labelEn: "1", labelZh: "一", jyutping: "jat1" },
    2: { labelEn: "2", labelZh: "二", jyutping: "ji6" },
    3: { labelEn: "3", labelZh: "三", jyutping: "saam1" },
    4: { labelEn: "4", labelZh: "四", jyutping: "sei3" },
    5: { labelEn: "5", labelZh: "五", jyutping: "ng5" },
    6: { labelEn: "6", labelZh: "六", jyutping: "luk6" },
    7: { labelEn: "7", labelZh: "七", jyutping: "cat1" },
    8: { labelEn: "8", labelZh: "八", jyutping: "baat3" },
    9: { labelEn: "9", labelZh: "九", jyutping: "gau2" },
  });
  
  const WIND_INFO = Object.freeze({
    we: {
      code: "we",
      suit: "wind",
      rank: null,
      kind: "honor",
      labelEn: "East Wind",
      labelZh: "東",
      jyutping: "dung1",
      glyph: "🀀",
    },
    ws: {
      code: "ws",
      suit: "wind",
      rank: null,
      kind: "honor",
      labelEn: "South Wind",
      labelZh: "南",
      jyutping: "naam4",
      glyph: "🀁",
    },
    ww: {
      code: "ww",
      suit: "wind",
      rank: null,
      kind: "honor",
      labelEn: "West Wind",
      labelZh: "西",
      jyutping: "sai1",
      glyph: "🀂",
    },
    wn: {
      code: "wn",
      suit: "wind",
      rank: null,
      kind: "honor",
      labelEn: "North Wind",
      labelZh: "北",
      jyutping: "bak1",
      glyph: "🀃",
    },
  });
  
  const DRAGON_INFO = Object.freeze({
    dr: {
      code: "dr",
      suit: "dragon",
      rank: null,
      kind: "honor",
      labelEn: "Red Dragon",
      labelZh: "中",
      jyutping: "zung1",
      glyph: "🀄",
    },
    dg: {
      code: "dg",
      suit: "dragon",
      rank: null,
      kind: "honor",
      labelEn: "Green Dragon",
      labelZh: "發",
      jyutping: "faat3",
      glyph: "🀅",
    },
    dw: {
      code: "dw",
      suit: "dragon",
      rank: null,
      kind: "honor",
      labelEn: "White Dragon",
      labelZh: "白",
      jyutping: "baak6",
      glyph: "🀆",
    },
  });
  
  function buildSuitedTile(code) {
    const suitCode = code[0];
    const rank = Number(code[1]);
    const suitInfo = SUIT_INFO[suitCode];
    const numberInfo = NUMBER_INFO[rank];
  
    return Object.freeze({
      code,
      suit: suitInfo.suit,
      rank,
      kind: suitInfo.kind,
      labelEn: `${numberInfo.labelEn} ${capitalize(suitInfo.suit)}`,
      labelZh: `${numberInfo.labelZh}${suitInfo.zhSuffix}`,
      jyutping: `${numberInfo.jyutping} ${suitInfo.jyutpingSuffix}`,
      glyph: suitInfo.glyphs[rank - 1],
    });
  }
  
  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  
  const TILE_CATALOG = Object.freeze(
    ALL_TILE_CODES.reduce((catalog, code) => {
      if (isSuitedTileCode(code)) {
        catalog[code] = buildSuitedTile(code);
        return catalog;
      }
  
      if (isWindTileCode(code)) {
        catalog[code] = Object.freeze({ ...WIND_INFO[code] });
        return catalog;
      }
  
      if (isDragonTileCode(code)) {
        catalog[code] = Object.freeze({ ...DRAGON_INFO[code] });
        return catalog;
      }
  
      return catalog;
    }, {})
  );
  
  function getTileMeta(code) {
    return TILE_CATALOG[assertTileCode(code)];
  }
  
  export { TILE_CATALOG, getTileMeta };