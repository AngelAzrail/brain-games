import { QandA, randomize } from '../src/utils.js';
import { resultOutput } from '../src/cli.js';

export const mathGcd = (first, second, result) => {
  const max = first > second ? second === result : first === result;
  return first % result === 0 && second % result === 0 || max
    ? result
    : mathGcd(first, second, result + 1);
};

export const gcd = () => {
  const first = randomize(2, 100);
  const second = randomize(2, 100);
  const rightAnswer = mathGcd(first, second, 2);
  const answer = QandA(`${first} ${second}`);
  resultOutput(answer, rightAnswer);
  return answer == rightAnswer;
};
