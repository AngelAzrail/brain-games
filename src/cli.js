import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const playerName = greetings();

export const QandA = (question) => {
  console.log('Question:', question);
  return readlineSync.question('Answer: ');
};

export const resultOutput = (playerAnswer, rightAnswer) => console.log(playerAnswer === rightAnswer
  ? 'Correct!'
  : `'${playerAnswer}' is wrong answer ;(. `
    + `Correct answer was '${rightAnswer}'`);

