export const handQuestions = [
  {
    id: "hand-001",
    hand: ["b1", "b2", "b3", "c3", "c4", "c5", "d7", "d8", "d9", "we", "we", "we", "dr", "dr"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Winning Hand",
    hint: "Try to group the tiles into sets of 3 first, then see whether 2 tiles remain as a pair.",
    correctExplanation:
      "This hand is a winning hand because it contains four complete groups and one pair: b1-b2-b3, c3-c4-c5, d7-d8-d9, we-we-we, and dr-dr.",
    wrongExplanation:
      "This hand is complete. It can be divided into four valid groups and one pair."
  },
  {
    id: "hand-002",
    hand: ["b4", "b5", "b6", "b7", "b8", "b9", "c2", "c2", "c2", "d5", "d6", "d7", "ws", "ws"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Winning Hand",
    hint: "Look for chows among suited tiles and remember that honors can form pungs or pairs.",
    correctExplanation:
      "This hand is a winning hand because it has four complete groups and one pair: b4-b5-b6, b7-b8-b9, c2-c2-c2, d5-d6-d7, and ws-ws.",
    wrongExplanation:
      "This hand is complete. All 14 tiles fit the standard pattern of four groups and one pair."
  },
  {
    id: "hand-003",
    hand: ["c1", "c2", "c3", "c7", "c8", "c9", "d1", "d1", "d1", "d4", "d5", "d6", "dg", "dg"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Winning Hand",
    hint: "A standard winning hand can mix chows, pungs, and one pair.",
    correctExplanation:
      "This hand is a winning hand because it contains four complete groups and one pair: c1-c2-c3, c7-c8-c9, d1-d1-d1, d4-d5-d6, and dg-dg.",
    wrongExplanation:
      "This hand is complete. The tiles form four valid groups and one pair."
  },
  {
    id: "hand-004",
    hand: ["b2", "b3", "b4", "b6", "b7", "b8", "c5", "c6", "c7", "ww", "ww", "ww", "dw", "dw"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Winning Hand",
    hint: "Check whether each suit section can make a full group of 3, and whether the last 2 tiles match.",
    correctExplanation:
      "This hand is a winning hand because it has four complete groups and one pair: b2-b3-b4, b6-b7-b8, c5-c6-c7, ww-ww-ww, and dw-dw.",
    wrongExplanation:
      "This hand is complete. It follows the standard structure of four groups plus one pair."
  },
  {
    id: "hand-005",
    hand: ["b3", "b4", "b5", "c4", "c5", "c6", "d2", "d3", "d4", "d8", "d8", "d8", "wn", "wn"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Winning Hand",
    hint: "See whether you can find exactly four groups of 3 and then one remaining pair.",
    correctExplanation:
      "This hand is a winning hand because it contains four complete groups and one pair: b3-b4-b5, c4-c5-c6, d2-d3-d4, d8-d8-d8, and wn-wn.",
    wrongExplanation:
      "This hand divides cleanly into four groups and one pair."
  },
  {
    id: "hand-006",
    hand: ["b7", "b8", "b9", "c1", "c1", "c1", "c6", "c7", "c8", "d3", "d4", "d5", "we", "we"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Winning Hand",
    hint: "Remember that identical suited tiles can form a pung, not just honor tiles.",
    correctExplanation:
      "This hand is a winning hand because it has four complete groups and one pair: b7-b8-b9, c1-c1-c1, c6-c7-c8, d3-d4-d5, and we-we.",
    wrongExplanation:
      "This hand contains four valid groups and one pair."
  },
  {
    id: "hand-007",
    hand: ["b1", "b1", "b1", "b5", "b6", "b7", "c2", "c3", "c4", "d6", "d7", "d8", "dr", "dr"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Winning Hand",
    hint: "A winning hand does not need all groups to be the same type. Mixed chows and pungs are fine.",
    correctExplanation:
      "This hand is a winning hand because it contains four complete groups and one pair: b1-b1-b1, b5-b6-b7, c2-c3-c4, d6-d7-d8, and dr-dr.",
    wrongExplanation:
      "This hand uses the standard pattern of four groups and one pair."
  },
  {
    id: "hand-008",
    hand: ["c3", "c4", "c5", "c6", "c7", "c8", "d1", "d2", "d3", "ws", "ws", "ws", "dg", "dg"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Winning Hand",
    hint: "Do not forget that honor tiles can form a pung or a pair, but not a chow.",
    correctExplanation:
      "This hand is a winning hand because it has four complete groups and one pair: c3-c4-c5, c6-c7-c8, d1-d2-d3, ws-ws-ws, and dg-dg.",
    wrongExplanation:
      "This hand forms four valid groups and one pair."
  },
  {
    id: "hand-009",
    hand: ["b1", "b2", "b3", "c3", "c4", "c5", "d7", "d8", "d9", "we", "we", "dr", "dr", "dg"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Not a Winning Hand",
    hint: "After finding complete groups, check whether the remaining tiles make exactly one matching pair.",
    correctExplanation:
      "This hand is not a winning hand because b1-b2-b3, c3-c4-c5, and d7-d8-d9 are complete groups, and we-we is a pair, but dr-dr-dg does not form a valid chow or pung.",
    wrongExplanation:
      "This hand is not complete. The final three honor tiles do not form a valid group because dr-dr-dg is not a pung."
  },
  {
    id: "hand-010",
    hand: ["b4", "b5", "b6", "b7", "b8", "b9", "c2", "c2", "c2", "d5", "d6", "d8", "ws", "ws"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Not a Winning Hand",
    hint: "Look closely at the suited tiles. One section may be missing a tile needed for a chow.",
    correctExplanation:
      "This hand is not a winning hand because d5-d6-d8 does not form a valid chow or pung. One suit section is broken.",
    wrongExplanation:
      "This hand is not complete. The d5-d6-d8 section is not a valid group."
  },
  {
    id: "hand-011",
    hand: ["c1", "c2", "c3", "c7", "c8", "c9", "d1", "d1", "d1", "d4", "d5", "d6", "dg", "dr"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Not a Winning Hand",
    hint: "After finding the groups, make sure the final 2 tiles are an exact pair.",
    correctExplanation:
      "This hand is not a winning hand because dg and dr do not make a pair. The hand has four groups, but the last two honor tiles do not match.",
    wrongExplanation:
      "This hand is not complete. A standard winning hand needs one matching pair, and dg-dr is not a pair."
  },
  {
    id: "hand-012",
    hand: ["b2", "b3", "b4", "b6", "b7", "b8", "c5", "c6", "c7", "ww", "ww", "dw", "dw", "we"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Not a Winning Hand",
    hint: "Honor tiles cannot make chows. Check whether the honor tiles form one pung or one pair cleanly.",
    correctExplanation:
      "This hand is not a winning hand because b2-b3-b4, b6-b7-b8, and c5-c6-c7 are complete groups, and ww-ww is a pair, but dw-dw-we does not form a valid pung.",
    wrongExplanation:
      "This hand is not complete. The last three honor tiles do not make a valid group because dw-dw-we is not a pung."
  },
  {
    id: "hand-013",
    hand: ["b3", "b4", "b5", "c4", "c5", "c6", "d2", "d3", "d4", "d8", "d8", "wn", "wn", "ws"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Not a Winning Hand",
    hint: "Look for three-tile groups first. Then check whether the remaining tiles make exactly one pair.",
    correctExplanation:
      "This hand is not a winning hand because b3-b4-b5, c4-c5-c6, and d2-d3-d4 are complete groups, and d8-d8 is a pair, but wn-wn-ws does not form a valid pung.",
    wrongExplanation:
      "This hand is not complete. The remaining honor tiles do not make a valid group because wn-wn-ws is not a pung."
  },
  {
    id: "hand-014",
    hand: ["b7", "b8", "b9", "c1", "c1", "c1", "c6", "c7", "c8", "d3", "d4", "d6", "we", "we"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Not a Winning Hand",
    hint: "One broken suited section can stop the whole hand from being complete.",
    correctExplanation:
      "This hand is not a winning hand because d3-d4-d6 does not form a valid chow or pung. The hand is missing a complete group there.",
    wrongExplanation:
      "This hand is not complete. The d3-d4-d6 tiles do not make a valid group."
  },
  {
    id: "hand-015",
    hand: ["b1", "b1", "b1", "b5", "b6", "b7", "c2", "c3", "c4", "d6", "d7", "d8", "dr", "dg"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Not a Winning Hand",
    hint: "A standard winning hand needs the last 2 tiles to match exactly.",
    correctExplanation:
      "This hand is not a winning hand because dr and dg are different honor tiles, so they do not form a pair.",
    wrongExplanation:
      "This hand is not complete. The final two tiles must be a matching pair, and dr-dg is not a pair."
  },
  {
    id: "hand-016",
    hand: ["c3", "c4", "c5", "c6", "c7", "c8", "d1", "d2", "d3", "ws", "ws", "dg", "dg", "dr"],
    choices: ["Winning Hand", "Not a Winning Hand"],
    correctAnswer: "Not a Winning Hand",
    hint: "Try separating the hand into groups of 3 and then see whether exactly 2 matching tiles remain.",
    correctExplanation:
      "This hand is not a winning hand because c3-c4-c5, c6-c7-c8, and d1-d2-d3 are complete groups, and ws-ws is a pair, but dg-dg-dr does not form a valid pung.",
    wrongExplanation:
      "This hand is not complete. The remaining dragon tiles do not make a valid group because dg-dg-dr is not a pung."
  }
];