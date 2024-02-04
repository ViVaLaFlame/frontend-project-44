#!/usr/bin/env node
import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const playCalc = () => {
  const descriptionCalc = 'What is the result of the expression?';

  const taskCalc = () => {
    const number1 = getRandomInt(0, 100);
    const number2 = getRandomInt(0, 100);

    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, 3)];

    const question = `Question: ${number1} ${operator} ${number2}`;
    let result = null;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        throw new Error(`Unexpected operator: ${operator}`);
    }
    return [question, result.toString()];
  };
  runGame(descriptionCalc, taskCalc);
};

export default playCalc;
