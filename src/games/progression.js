#!/usr/bin/env node
import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const playProgression = () => {
  const genProgression = (firstInt, step, hiddenInt) => {
    const progressionLength = getRandomInt(5, 10);
    const result = [];

    for (let i = 0; i < progressionLength; i += 1) {
      const current = i === hiddenInt ? '..' : firstInt + i * step;
      result.push(String(current));
    }
    if (hiddenInt >= progressionLength) {
      result.push('..');
    }

    return result.join(' ');
  };

  const descriptionProgression = 'What number is missing in the progression?';

  const taskProgession = () => {
    const firstInt = getRandomInt(5, 10);
    const step = getRandomInt(3, 5);
    const hiddenInt = getRandomInt(1, 10);
    const question = `Question: ${genProgression(firstInt, step, hiddenInt)}`;
    const correctAnswer = String(firstInt + hiddenInt * step);
    return [question, correctAnswer];
  };

  runGame(descriptionProgression, taskProgession);
};

export default playProgression;
