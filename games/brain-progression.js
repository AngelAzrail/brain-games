import {QandA, randomize} from '../src/utils.js';
import {resultOutput} from "../src/cli.js";

export const mathProgression = (result, acc, el, diff) => {
  if (acc !== 0) {
    const newEl = el + diff;
    result.push(newEl);
    return mathProgression(result, acc - 1, newEl, diff);
  }
  return null;
};

export const progression = () => {
  const progLength = randomize(5, 10);
  const diff = randomize(-10, 10);
  const first = randomize(-50, 50);
  const prog = [];
  mathProgression(prog, progLength, first, diff);
  const answerIndex = randomize(0, progLength - 1);
  const rightAnswer = prog[answerIndex];
  prog[answerIndex] = '..';
  const answer = QandA(prog.join(' '));
  resultOutput(answer, rightAnswer);
  return answer == rightAnswer;
};
