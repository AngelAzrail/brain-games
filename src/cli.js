import readlineSync from 'readline-sync';

export const playerName = readlineSync.question('May I have your name? ');

export const takeName = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${playerName}!`);
};

export const incorrectAnswer = (playerAnswer, rightAnswer) => `'${playerAnswer}' is wrong answer ;(. `
    + `Correct answer was '${rightAnswer}'. \nLet's try again, ${playerName}!`;
