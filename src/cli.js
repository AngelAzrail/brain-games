import readlineSync from 'readline-sync';
import { games } from './enums.js';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const playerName = greetings();

export const resultOutput = (playerAnswer, rightAnswer) => console.log(playerAnswer == rightAnswer
  ? 'Correct!'
  : `'${playerAnswer}' is wrong answer ;(. `
    + `Correct answer was '${rightAnswer}'. \nLet's try again, ${playerName}!`);

export const chooseAGame = () => {
  console.log('Choose a game: ');
  Object.keys(games).forEach((name, index) => console.log(index + 1, name));
  return readlineSync.question('Type the game name and play! ').trim();
};
