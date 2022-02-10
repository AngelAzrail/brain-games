import { even } from '../games/brain-even.js';
import { calc } from '../games/brain-calc.js';
import { gcd } from '../games/brain-gcd.js';
import { progression } from '../games/brain-progression.js';
import { prime } from '../games/brain-prime.js';

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
  'brain-gcd':
      {
        startMessage: 'Find the greatest common divisor of given numbers.',
        game: gcd,
      },
  'brain-progression':
      {
        startMessage: 'What number is missing in the progression?',
        game: progression,
      },
  'brain-prime':
      {
        startMessage: 'Answer "yes" if given number is prime. Otherwise answer "no".',
        game: prime,
      },
};
