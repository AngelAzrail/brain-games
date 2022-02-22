import { QandA, resultOutput } from '../src/cli.js';
import { randomize, expression, operators } from '../src/math.js';
import startGame from '../src/index.js';

const gameMessage = 'What is the result of the expression?';

export const calc = () => {
  const operatorId = randomize(0, 3);
  const num1 = randomize(0, 100);
  const num2 = randomize(0, 100);
  const question = `${num1} ${operators[operatorId]} ${num2}`;
  const answer = String(QandA(question));
  const rightAnswer = String(expression(operators[operatorId], num1, num2));
  resultOutput(answer, rightAnswer);
  return answer === rightAnswer;
};

export default () => {
  startGame(gameMessage, calc);
};
