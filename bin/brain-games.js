#!/usr/bin/env node

import startGame from '../src/index.js';
import { chooseAGame } from '../src/cli.js';
import { games } from '../src/enums.js';

let chosenGame = chooseAGame();
if (/\d+/.test(chosenGame)) {
  chosenGame = Object.entries(games).map(([name]) => name)[chosenGame - 1];
}
startGame(chosenGame);
