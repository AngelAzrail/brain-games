#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { resultOutput, takeName } from '../src/cli.js';
import { doStep, randomize } from '../src/utils.js';

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

console.log('What is the result of the expression?');

export const calc = () => {
  const operatorId = randomize(0, 3);
  const num1 = randomize(0, 100);
  const num2 = randomize(0, 100);
  const question = `${num1} ${operators[operatorId]} ${num2}`;
  const rightAnswer = expression(operators[operatorId], num1, num2);
  console.log('Question:', question);
  const answer = readlineSync.question('Answer: ');
  resultOutput(answer, rightAnswer.toString());
  return answer === rightAnswer.toString();
};

doStep(calc, 0);
