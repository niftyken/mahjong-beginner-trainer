export const tenpaiQuestions = [
    {
      hand: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'c2', 'c3', 'c4', 'red', 'red', 'red', 'east'],
      choices: ['east', 'north', 'white', 'b1'],
      answer: 'east',
      title: 'Which tile completes this hand?',
      correct:
        'Correct. East completes the pair, giving you four groups plus one pair: 1-2-3 Bamboo, 4-5-6 Bamboo, 2-3-4 Characters, Red Dragon pung, and East-East as the pair.',
      wrong:
        'The winning tile is East. The hand already has four groups almost finished; it only needs East to complete the pair.',
      hint:
        'When a hand looks almost done, first ask: which tile would complete the pair?',
    },
    {
      hand: ['d2', 'd3', 'd4', 'd6', 'd7', 'd8', 'c2', 'c3', 'c4', 'green', 'green', 'green', 'white'],
      choices: ['white', 'red', 'c2', 'east'],
      answer: 'white',
      title: 'What tile are you waiting on?',
      correct:
        'Correct. White completes the pair. The rest of the hand already forms three sequences and a Green Dragon pung.',
      wrong:
        'The winning tile is White. This hand is waiting on White to become the pair, while the other four groups are already complete.',
      hint:
        'A very common beginner wait is “everything is done except the pair.”',
    },
    {
      hand: ['b2', 'b3', 'b4', 'c2', 'c3', 'c4', 'd6', 'd7', 'd8', 'red', 'red', 'south', 'south'],
      choices: ['red', 'south', 'white', 'b6'],
      answer: 'red',
      title: 'Which tile wins this hand?',
      correct:
        'Correct. Red gives you a Red Dragon pung, while South-South remains the pair. That makes four groups plus one pair.',
      wrong:
        'The winning tile is Red. South is already serving naturally as the pair, so the hand wants a third Red to complete the pung.',
      hint:
        'Do not automatically assume the missing tile completes the pair. Sometimes the pair is already present, and the missing tile completes a pung.',
    },
  ]