import { playerName } from './cli.js';

export const randomize = (min, max) => Math.floor(min + Math.random() * max);

export const doStep = (gameStep, stepCounter) => {
  if (stepCounter < 3) {
    const isCorrect = gameStep();
    isCorrect ? doStep(gameStep, stepCounter + 1) : null;
  } else {
    console.log(`Congratulations, ${playerName}!`);
  }
};
