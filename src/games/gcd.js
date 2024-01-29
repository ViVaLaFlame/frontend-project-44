#!/usr/bin/env node
import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const playGcd = () => {
  const descriptionGcd = 'Find the greatest common divisor of given numbers.';

  const taskGcd = () => {
    let num1 = getRandomInt(0, 100);
    let num2 = getRandomInt(0, 100);

    const question = `${num1} ${num2}`;

    if (num2 > num1) {
      [num1, num2] = [num2, num1];
    }

    while (num2 !== 0) {
      const remainder = num1 % num2;
      num1 = num2;
      num2 = remainder;
    }
    const correctAnswer = num1;
    return [question, correctAnswer.toString()];
  };
  runGame(descriptionGcd, taskGcd);
};

export default playGcd;
