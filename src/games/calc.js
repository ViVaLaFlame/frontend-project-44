#!/usr/bin/env node
import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const playCalc = () => {
  const descriptionCalc = 'What is the result of the expression?';

  const taskCalc = () => {
    const num1 = getRandomInt(0, 100);
    const num2 = getRandomInt(0, 100);

    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, 3)];

    const question = `Question: ${num1}${operator}${num2}`;
    let result = null;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        throw new Error(`Unexpected operator: ${operator}`);
    }
    return [question, result.toString()];
  };
  runGame(descriptionCalc, taskCalc);
};

export default playCalc;
