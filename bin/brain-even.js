#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { doStep, randomize } from '../src/utils.js';
import { incorrectAnswer } from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const even = () => {
  const num = randomize(0, 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Answer: ');
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  const result = answer === rightAnswer;
  console.log(result
    ? 'Correct!'
    : incorrectAnswer(answer, rightAnswer));
  if (result) return true;
  return false;
};

doStep(even, 0);
// if (steps === 3) {
//   console.log(`Congratulations, ${name}!`);
// }
