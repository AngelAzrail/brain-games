#!/usr/bin/env node

import startGame from '../src/index.js';
import { chooseAGame } from '../src/cli.js';

const chosenGame = chooseAGame();
startGame(chosenGame);
