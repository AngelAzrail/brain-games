#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { takeName } from '../src/cli.js';

const name = takeName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let steps = 0;

while (steps < 3) {
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Answer: ');
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  const result = answer === rightAnswer;
  console.log(result
    ? 'Correct!'
    : `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
  if (result) steps += 1;
  else break;
}
if (steps === 3) {
  console.log(`Congratulations, ${name}!`);
}
