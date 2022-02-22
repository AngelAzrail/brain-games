import { mathGcd, randomize } from '../src/math.js';
import { QandA, resultOutput } from '../src/cli.js';
import startGame from '../src/index.js';

const gameMessage = 'Find the greatest common divisor of given numbers.';

export const gcd = () => {
  const first = randomize(2, 100);
  const second = randomize(2, 100);
  const rightAnswer = mathGcd(first, second, first > second ? second : first);
  const answer = QandA(`${first} ${second}`);
  resultOutput(answer, rightAnswer);
  return answer === rightAnswer;
};

export default () => {
  startGame(gameMessage, gcd);
};
