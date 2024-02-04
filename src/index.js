#!/usr/bin/env node
import readlineSync from 'readline-sync';

const runGame = (description, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const questionAndResult = task();
    console.log('Question: ', questionAndResult[0]);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = questionAndResult[1];
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n "Let's try again, ${userName}!`);
      process.exit();
    }
  }

  console.log(`Congratulations, ${userName}!`);
  process.exit();
};

export default runGame;
