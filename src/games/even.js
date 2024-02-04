#!/usr/bin/env node
import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const playEvenOrNot = () => {
  const descriptionEven = 'Answer "yes" if the number is even, otherwise answer "no"';

  const taskEven = () => {
    const num = getRandomInt(0, 100);
    const question = `Question: ${num}`;
    const isEven = num % 2 === 0;

    let correctAnswer;
    if (isEven) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];
  };
  runGame(descriptionEven, taskEven);
};

playEvenOrNot();

export default playEvenOrNot;
