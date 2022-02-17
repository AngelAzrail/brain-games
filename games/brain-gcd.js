import { randomize } from '../src/utils.js';
import { QandA, resultOutput } from '../src/cli.js';

export const mathGcd = (first, second, result) => (first % result === 0 && second % result === 0
  ? result
  : mathGcd(first, second, result - 1));

export const gcd = () => {
  const first = randomize(2, 100);
  const second = randomize(2, 100);
  const rightAnswer = mathGcd(first, second, first > second ? second : first);
  const answer = QandA(`${first} ${second}`);
  resultOutput(answer, rightAnswer);
  return answer == rightAnswer;
};
