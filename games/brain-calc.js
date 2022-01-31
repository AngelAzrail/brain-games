import { resultOutput } from '../src/cli.js';
import { QandA, randomize } from '../src/utils.js';

export const operators = ['+', '-', '*', '/'];

export const expression = (op, num1, num2) => {
  switch (op) {
    case '+': {
      return num1 + num2;
    }
    case '-': {
      return num1 - num2;
    }
    case '*': {
      return num1 * num2;
    }
    case '/': {
      return num1 / num2;
    }
    default: return null;
  }
};

export const calc = () => {
  const operatorId = randomize(0, 3);
  const num1 = randomize(0, 100);
  const num2 = randomize(0, 100);
  const question = `${num1} ${operators[operatorId]} ${num2}`;
  const answer = QandA(question);
  const rightAnswer = expression(operators[operatorId], num1, num2);
  resultOutput(answer, rightAnswer);
  return answer == rightAnswer;
};
