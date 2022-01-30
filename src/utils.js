import readlineSync from 'readline-sync';
import { playerName } from './cli.js';

export const randomize = (min, max) => Math.floor(min + Math.random() * max);

export const doStep = (gameStep, stepCounter = 0) => {
  if (stepCounter < 3) {
    const isCorrect = gameStep();
    isCorrect ? doStep(gameStep, stepCounter + 1) : null;
  } else {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export const QandA = (question) => {
  console.log('Question:', question);
  return readlineSync.question('Answer: ');
};
