export const puzzleQuestions = [
    {
      hand: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'c2', 'c3', 'c4', 'red', 'red', 'red', 'east', 'east'],
      isWinning: true,
      correct:
        'Correct. This hand has four valid groups and one pair: 1-2-3 Bamboo, 4-5-6 Bamboo, 2-3-4 Characters, a Red Dragon pung, and an East Wind pair / 眼 (ngaan5).',
      wrong:
        'This hand is complete: four sets plus one pair. A good beginner check is to first spot the pair, then see whether the remaining 12 tiles split into four legal groups.',
      hint:
        'A normal Mahjong win usually means 14 tiles arranged as four groups plus one pair.',
    },
    {
      hand: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'c2', 'c3', 'c4', 'red', 'red', 'east', 'east', 'north'],
      isWinning: false,
      correct:
        'Correct. This hand is not complete. After forming the obvious sequences and a pair, loose honors remain that do not become a valid set.',
      wrong:
        'This hand is not yet a win / 胡 (wu4). You can form three sequences, but the remaining honors do not become a legal group plus pair structure.',
      hint:
        'After removing the obvious groups, always ask what the leftover tiles become.',
    },
    {
      hand: ['d2', 'd3', 'd4', 'd6', 'd7', 'd8', 'c2', 'c3', 'c4', 'green', 'green', 'green', 'white', 'white'],
      isWinning: true,
      correct:
        'Correct. This hand has three sequences, one dragon pung, and one dragon pair. That satisfies the normal four-groups-plus-a-pair structure.',
      wrong:
        'This hand is a valid win. The groups are 2-3-4 Dots, 6-7-8 Dots, 2-3-4 Characters, Green Dragon pung, and White Dragon pair.',
      hint:
        'When a hand looks busy, group the suited runs first, then check whether the honors cleanly become a pung and a pair.',
    },
  ]