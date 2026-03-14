export const discardQuestions = [
  {
    id: "discard-001",
    hand: ["b2", "b3", "b4", "c4", "c5", "c6", "d7", "d8", "d9", "b7", "b8", "we", "dr", "dr"],
    choices: ["we", "b7", "b8", "dr"],
    correctAnswer: "we",
    hint: "Look for the tile that is hardest to combine with the rest of the hand.",
    correctExplanation: "East Wind is isolated here. The numbered tiles already form strong runs, and the pair of Red Dragons is more useful than a single honor tile with no match.",
    wrongExplanation: "East Wind is the least useful tile in this hand. The other choices are helping form runs or a pair, while a lone honor tile has no nearby tiles to connect with."
  },
  {
    id: "discard-002",
    hand: ["b3", "b4", "b5", "c2", "c3", "c4", "d4", "d5", "d6", "c7", "c8", "wn", "dg", "dg"],
    choices: ["wn", "c7", "c8", "dg"],
    correctAnswer: "wn",
    hint: "A single honor tile is often weaker than tiles that can extend into a sequence.",
    correctExplanation: "North Wind stands alone and does not help complete any set. The 7 and 8 of Characters can still grow into a chow, and the Green Dragons already form a pair.",
    wrongExplanation: "North Wind is the weakest discard because it is isolated. The character tiles can still work together, and the pair of Green Dragons is already useful."
  },
  {
    id: "discard-003",
    hand: ["b1", "b2", "b3", "c5", "c6", "c7", "d2", "d3", "d4", "b6", "b6", "c1", "c9", "ws"],
    choices: ["ws", "c1", "c9", "b6"],
    correctAnswer: "ws",
    hint: "A lone honor tile is usually weaker than suited tiles or a pair.",
    correctExplanation: "South Wind is the clearest discard because it is an isolated honor tile with no support. The pair of 6 Bamboo is useful, and the suited tiles can still pair later or improve with nearby draws.",
    wrongExplanation: "South Wind contributes the least here. The Bamboo pair should be kept, and the suited tiles still have more future value than a lone honor tile."
  },
  {
    id: "discard-004",
    hand: ["b4", "b5", "b6", "c3", "c4", "c5", "d6", "d7", "d8", "b9", "c9", "ww", "ww", "d1"],
    choices: ["b9", "c9", "ww", "d1"],
    correctAnswer: "d1",
    hint: "An edge tile with no neighbors can be a weak fit.",
    correctExplanation: "1 Dots is isolated and does not connect to anything else in the hand. The pair of West Winds is already useful, and the 9 tiles can still become a pair or connect if an 8 appears.",
    wrongExplanation: "1 Dots is the weakest tile because it has no support at all. The West pair is valuable, and the 9 tiles are still more flexible than a lone 1 Dots."
  },
  {
    id: "discard-005",
    hand: ["b2", "b3", "b4", "c6", "c7", "c8", "d3", "d4", "d5", "b5", "b5", "b5", "we", "c1"],
    choices: ["we", "c1", "b5", "d3"],
    correctAnswer: "we",
    hint: "Do not break a completed set unless the hand gives you a much weaker tile.",
    correctExplanation: "East Wind is the obvious discard because it is isolated. The three 5 Bamboo already make a pung, and 1 Characters can still become a pair or connect with 2 and 3 if drawn.",
    wrongExplanation: "East Wind should go first. A completed pung is strong, and a lone 1 Characters still has more development potential than a single honor tile."
  },
  {
    id: "discard-006",
    hand: ["b6", "b7", "b8", "c1", "c2", "c3", "d5", "d6", "d7", "c8", "c9", "ws", "ws", "dg"],
    choices: ["c8", "c9", "ws", "dg"],
    correctAnswer: "dg",
    hint: "A lone dragon is often weaker than a pair or a near-sequence.",
    correctExplanation: "Green Dragon is isolated and does not combine with the rest of the hand. The South Winds form a pair, and 8-9 Characters is an incomplete sequence that can still improve with a 7 Characters.",
    wrongExplanation: "Green Dragon is the weakest option because it stands alone. The South pair and the 8-9 Characters shape both have clearer value."
  },
  {
    id: "discard-007",
    hand: ["b3", "b4", "b5", "c4", "c5", "c6", "d1", "d2", "d3", "b8", "b9", "dr", "dr", "wn"],
    choices: ["b8", "b9", "dr", "wn"],
    correctAnswer: "wn",
    hint: "Keep pairs and connected tiles over isolated honors.",
    correctExplanation: "North Wind is isolated and does not help form any set. The Red Dragons are already a pair, and 8-9 Bamboo is connected enough to improve if 7 Bamboo is drawn.",
    wrongExplanation: "North Wind is the discard because it is a single honor tile with no partner. The pair and the connected Bamboo tiles are both more useful."
  },
  {
    id: "discard-008",
    hand: ["b1", "b2", "b3", "c2", "c3", "c4", "d6", "d7", "d8", "c7", "c7", "dw", "we", "we"],
    choices: ["dw", "c7", "we", "d6"],
    correctAnswer: "dw",
    hint: "A lone honor is usually weaker than a pair.",
    correctExplanation: "White Dragon is isolated, while East Wind already has a pair. The pair of 7 Characters is useful, and the dot tiles already make a chow.",
    wrongExplanation: "White Dragon is the weakest tile because it is alone. The East Winds and 7 Characters both form pairs, which are much stronger to keep."
  },
  {
    id: "discard-009",
    hand: ["b5", "b6", "b7", "c3", "c4", "c5", "d2", "d3", "d4", "b1", "b9", "ws", "dg", "dg"],
    choices: ["b1", "b9", "ws", "dg"],
    correctAnswer: "ws",
    hint: "Which tile has the fewest realistic ways to help the hand?",
    correctExplanation: "South Wind is isolated and does not fit with any other tile in the hand. The Green Dragons are a pair, and even the 1 Bamboo and 9 Bamboo can still become pairs later.",
    wrongExplanation: "South Wind is the least efficient tile here. The other candidate tiles still have some pairing value, but a lone honor tile offers less."
  },
  {
    id: "discard-010",
    hand: ["b2", "b3", "b4", "c5", "c6", "c7", "d4", "d5", "d6", "c1", "c2", "ww", "dr", "dr"],
    choices: ["c1", "c2", "ww", "dr"],
    correctAnswer: "ww",
    hint: "A single honor tile is often worse than two connected suited tiles.",
    correctExplanation: "West Wind is isolated and cannot form a sequence. The 1-2 Characters are connected and can improve with a 3 Characters, while the Red Dragons already form a pair.",
    wrongExplanation: "West Wind is the best discard because it is a lone honor tile. The 1-2 Characters have sequence potential, and the Red Dragon pair is already useful."
  },
  {
    id: "discard-011",
    hand: ["b4", "b5", "b6", "c6", "c7", "c8", "d3", "d4", "d5", "b2", "b2", "c1", "c9", "dw"],
    choices: ["dw", "b2", "c1", "c9"],
    correctAnswer: "dw",
    hint: "A lone honor tile is usually a cleaner discard than a pair or a suited tile.",
    correctExplanation: "White Dragon is the weakest tile because it is a single honor with no support. The pair of 2 Bamboo is useful, and the suited tiles still have more future value than a lone dragon.",
    wrongExplanation: "White Dragon is the clearest discard. Keeping the Bamboo pair is better, and the suited tiles are still more flexible than a single honor tile."
  },
  {
    id: "discard-012",
    hand: ["b7", "b8", "b9", "c1", "c2", "c3", "d5", "d6", "d7", "b4", "c5", "we", "we", "ws"],
    choices: ["b4", "c5", "we", "ws"],
    correctAnswer: "ws",
    hint: "A single honor tile may be weaker than an isolated suited tile if a pair already exists elsewhere.",
    correctExplanation: "South Wind is the discard because it is a lone honor tile, while the East Winds already form a pair. The isolated suited tiles can still pair later, but the extra single honor is usually less efficient to keep.",
    wrongExplanation: "South Wind contributes the least. The East Winds are already a pair, and the suited tiles have more flexibility than a lone honor tile."
  },
  {
    id: "discard-013",
    hand: ["b2", "b3", "b4", "c4", "c5", "c6", "d7", "d8", "d9", "b1", "b1", "d1", "d2", "wn"],
    choices: ["b1", "d1", "d2", "wn"],
    correctAnswer: "wn",
    hint: "Keep a pair and connected suited tiles over a lone honor tile.",
    correctExplanation: "North Wind is isolated and does not help the hand. The pair of 1 Bamboo is already useful, and 1-2 Dots are connected, so the lone wind is the clearest discard.",
    wrongExplanation: "North Wind is the weakest discard because it has no support. The Bamboo pair and the connected dot tiles both have clearer value."
  },
  {
    id: "discard-014",
    hand: ["b3", "b4", "b5", "c7", "c8", "c9", "d2", "d3", "d4", "b6", "b7", "dg", "dg", "ww"],
    choices: ["b6", "b7", "dg", "ww"],
    correctAnswer: "ww",
    hint: "Connected suited tiles are often worth more than a single honor tile.",
    correctExplanation: "West Wind is isolated and does not help form a set. The 6-7 Bamboo tiles are connected and can improve, while the Green Dragons already make a pair.",
    wrongExplanation: "West Wind is the discard because it is a lone honor tile. The connected Bamboo tiles and the dragon pair both offer more value."
  },
  {
    id: "discard-015",
    hand: ["b5", "b6", "b7", "c2", "c3", "c4", "d6", "d7", "d8", "c9", "c9", "we", "c1", "d1"],
    choices: ["c9", "we", "c1", "d1"],
    correctAnswer: "we",
    hint: "A lone honor tile is usually less efficient than a pair or a suited tile.",
    correctExplanation: "East Wind is the weakest discard because it is an isolated honor tile. The pair of 9 Characters is already useful, and the suited tiles still have more flexibility than a single wind.",
    wrongExplanation: "East Wind is the least useful option here. The 9 Characters pair should be kept, and the suited tiles have more future potential than a lone honor tile."
  },
  {
    id: "discard-016",
    hand: ["b1", "b2", "b3", "c5", "c6", "c7", "d3", "d4", "d5", "b9", "ws", "ws", "dg", "c1"],
    choices: ["b9", "ws", "dg", "c1"],
    correctAnswer: "dg",
    hint: "Keep the pair and look for the tile that does not connect well with anything else.",
    correctExplanation: "Green Dragon is isolated and does not support the rest of the hand. The South Winds form a pair, and the suited tiles still offer more flexibility than a lone dragon.",
    wrongExplanation: "Green Dragon is the best discard because it is a single honor tile with no support. The South pair is stronger to keep, and the suited tiles are still workable."
  }
];