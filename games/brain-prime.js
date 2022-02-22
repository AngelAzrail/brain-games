import { mathPrime, randomize } from '../src/math.js';
import { QandA, resultOutput } from '../src/cli.js';
import startGame from '../src/index.js';

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const prime = () => {
  const num = randomize(0, 1000);
  const answer = String(QandA(num));
  const rightAnswer = mathPrime(num) ? 'yes' : 'no';
  resultOutput(answer, rightAnswer);
  return answer === rightAnswer;
};

export default () => {
  startGame(gameMessage, prime);
};
