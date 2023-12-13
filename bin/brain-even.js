import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const playEvenOrNot = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const isNumberEven = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((userAnswer.toLowerCase() === 'yes' && isNumberEven) || (userAnswer.toLowerCase() === 'no' && !isNumberEven)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isNumberEven ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}`);
};

playEvenOrNot();

export default playEvenOrNot;
