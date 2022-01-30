#!/usr/bin/env node

import { QandA, randomize } from '../src/utils.js';
import { resultOutput } from '../src/cli.js';

export const even = () => {
  const num = randomize(0, 100);
  const answer = QandA(num);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  resultOutput(answer, rightAnswer);
  return answer == rightAnswer;
};
