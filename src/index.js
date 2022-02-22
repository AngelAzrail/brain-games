import { playerName } from './cli.js';

export const doStep = (game, stepCounter = 0) => {
  if (stepCounter < 3) {
    if (game()) {
      doStep(game, stepCounter + 1);
    } else {
      console.log(`Let's try again, ${playerName}!`);
    }
  } else {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default (gameMessage, game) => {
  console.log(gameMessage);
  doStep(game);
};
