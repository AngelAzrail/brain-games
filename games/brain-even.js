import { randomize } from '../src/math.js';
import { QandA, resultOutput } from '../src/cli.js';
import startGame from '../src/index.js';

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

export const even = () => {
  const num = randomize(0, 100);
  const answer = String(QandA(num));
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  resultOutput(answer, rightAnswer);
  return answer === rightAnswer;
};

export default () => {
  startGame(gameMessage, even);
};
