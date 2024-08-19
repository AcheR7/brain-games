import readlineSync from 'readline-sync';
import { randomNumber, calculator } from '../utilities.js';

const playCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('What is the result of the expression?');

  const sign = ['+', '-', '*'];

  for (let i = 0; i < 3; i++) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const randomSign = sign[Math.floor(Math.random() * 3)];
    const question = `${num1} ${randomSign} ${num2}`;
    console.log(`Question: ${question}`);
    const rightAnswer = calculator(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default playCalcGame;
