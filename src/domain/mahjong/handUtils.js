import {
    ALL_TILE_CODES,
    assertTileCode,
    isTileCode,
  } from "../tiles/tileCodes.js";
  
  const TILE_SORT_INDEX = ALL_TILE_CODES.reduce((indexMap, code, index) => {
    indexMap[code] = index;
    return indexMap;
  }, {});
  
  function countTiles(hand) {
    return hand.reduce((counts, tileCode) => {
      assertTileCode(tileCode);
      counts[tileCode] = (counts[tileCode] || 0) + 1;
      return counts;
    }, {});
  }
  
  function sortHand(hand) {
    return [...hand].sort((a, b) => {
      assertTileCode(a);
      assertTileCode(b);
      return TILE_SORT_INDEX[a] - TILE_SORT_INDEX[b];
    });
  }
  
  function hasTile(hand, tileCode) {
    assertTileCode(tileCode);
    return hand.includes(tileCode);
  }
  
  function getTileCount(hand, tileCode) {
    assertTileCode(tileCode);
    return hand.reduce((count, currentTileCode) => {
      assertTileCode(currentTileCode);
      return currentTileCode === tileCode ? count + 1 : count;
    }, 0);
  }
  
  function findPairs(hand) {
    const counts = countTiles(hand);
  
    return Object.keys(counts)
      .filter((tileCode) => isTileCode(tileCode) && counts[tileCode] >= 2)
      .sort((a, b) => TILE_SORT_INDEX[a] - TILE_SORT_INDEX[b]);
  }
  
  function findTriplets(hand) {
    const counts = countTiles(hand);
  
    return Object.keys(counts)
      .filter((tileCode) => isTileCode(tileCode) && counts[tileCode] >= 3)
      .sort((a, b) => TILE_SORT_INDEX[a] - TILE_SORT_INDEX[b]);
  }
  
  export {
    countTiles,
    sortHand,
    hasTile,
    getTileCount,
    findPairs,
    findTriplets,
  };