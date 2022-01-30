import { even } from '../bin/brain-even.js';
import { calc } from '../bin/brain-calc.js';

export const games = {
  'brain-even':
      {
        startMessage: 'Answer "yes" if the number is even, otherwise answer "no".',
        game: even,
      },
  'brain-calc':
      {
        startMessage: 'What is the result of the expression?',
        game: calc,
      },
};
