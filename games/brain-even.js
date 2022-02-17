import { randomize } from '../src/utils.js';
import { QandA, resultOutput } from '../src/cli.js';

export default () => {
  const num = randomize(0, 100);
  const answer = QandA(num).toString();
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  resultOutput(answer, rightAnswer);
  return answer === rightAnswer;
};
