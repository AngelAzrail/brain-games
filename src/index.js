import { games } from './enums.js';
import { doStep } from './utils.js';

export default (gameName) => {
  if (games.hasOwnProperty(gameName)) {
    console.log(games[gameName].startMessage);
    doStep(games[gameName].game);
  } else console.log('Sorry, game not found ;(.');
};
