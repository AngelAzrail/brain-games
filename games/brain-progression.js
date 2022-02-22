import { mathProgression, randomize } from '../src/math.js';
import { QandA, resultOutput } from '../src/cli.js';
import startGame from '../src/index.js';

const gameMessage = 'What number is missing in the progression?';

export const progression = () => {
  const progLength = randomize(5, 10);
  const diff = randomize(-10, 10);
  const first = randomize(-50, 50);
  const prog = [];
  mathProgression(prog, progLength, first, diff);
  const answerIndex = randomize(0, progLength - 1);
  const rightAnswer = prog[answerIndex];
  prog[answerIndex] = '..';
  const answer = String(QandA(prog.join(' ')));
  resultOutput(answer, rightAnswer);
  return answer === rightAnswer;
};

export default () => {
  startGame(gameMessage, progression);
};
