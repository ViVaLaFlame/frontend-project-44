import readlineSync from 'readline-sync';

const calcGame = () => {
  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const arrayOfOperators = ['+', '-', '*'];

    const randomOperationIndex = Math.floor(Math.random() * arrayOfOperators.length);
    const randomOperation = arrayOfOperators[randomOperationIndex];

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;

    const checkIt = () => {
      let result = 0;
      if (randomOperation === '+') {
        result = randomNumber + randomNumber2;
      } else if (randomOperation === '-') {
        result = randomNumber - randomNumber2;
      } else if (randomOperation === '*') {
        result = randomNumber * randomNumber2;
      }
      return result;
    };
    const correctAnswer = checkIt();
    console.log(`Question: ${randomNumber}${randomOperation}${randomNumber2}`);
    const playersAnswer = readlineSync.question('Your answer: ');

    if (parseInt(playersAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}`);
};

calcGame();
