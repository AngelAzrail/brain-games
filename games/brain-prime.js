import { randomize } from '../src/utils.js';
import { QandA, resultOutput } from '../src/cli.js';

export const mathPrime = (num, acc = 2) => {
  if (num < 2) return false;
  if (acc <= num / 2) {
    return num % acc === 0 ? false : mathPrime(num, acc + 1);
  }
  return true;
};

export default () => {
  const num = randomize(0, 1000);
  const answer = QandA(num).toString();
  const rightAnswer = mathPrime(num) ? 'yes' : 'no';
  resultOutput(answer, rightAnswer);
  return answer === rightAnswer;
};
