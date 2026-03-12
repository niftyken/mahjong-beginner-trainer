export const discardQuestions = [
    {
      hand: ['b2', 'b3', 'b4', 'b5', 'b6', 'c2', 'c3', 'c4', 'red', 'red', 'd6', 'd7', 'east', 'north'],
      answers: ['east', 'north'],
      title: 'Which discard is best for a beginner here?',
      correct:
        'Good choice. East / 東 and North / 北 are isolated honor tiles. They cannot form chows / 食 (sik6), so they are often weak early discards.',
      wrong:
        'A strong beginner discard here is East or North. The suited tiles already have structure, while isolated honors usually need exact matches to improve.',
      hint:
        'A simple beginner rule is: keep connected suited tiles, and be suspicious of isolated honors.',
    },
    {
      hand: ['b2', 'b3', 'b4', 'c2', 'c3', 'c4', 'd6', 'd7', 'd8', 'red', 'red', 'white', 'south', 'b6'],
      answers: ['south'],
      title: 'Which tile is the weakest discard?',
      correct:
        'Correct. South / 南 is an isolated honor, while the other tiles already form or nearly form useful groups.',
      wrong:
        'The weakest tile is South. It is isolated and cannot join a sequence. The suited tiles already have much better shape.',
      hint:
        'Pairs and connected runs are usually more valuable to keep than lone honors.',
    },
    {
      hand: ['c2', 'c3', 'c4', 'd2', 'd3', 'd4', 'b3', 'b4', 'red', 'green', 'white', 'east', 'east', 'b6'],
      answers: ['red', 'green', 'white'],
      title: 'Which discard is most reasonable for a beginner?',
      correct:
        'Good choice. A lone dragon here is less flexible than the suited tiles and less immediately useful than the East pair.',
      wrong:
        'A beginner-friendly discard here is one of the isolated dragons: Red, Green, or White. The suited tiles have developing structure, and East-East is already a pair.',
      hint:
        'When comparing isolated honors, prefer keeping an existing pair over scattered single honors.',
    },
  ]