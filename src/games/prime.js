#!/usr/bin/env node
import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const playPrime = () => {
  const descriptionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskPrime = () => {
    const number = getRandomInt(0, 100);
    const question = `Question: ${number}`;

    const isPrime = () => {
      if (number <= 1) {
        return 'no';
      }
      for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    const correctAnswer = isPrime(number);
    return [question, correctAnswer.toString()];
  };

  runGame(descriptionPrime, taskPrime);
};

export default playPrime;
