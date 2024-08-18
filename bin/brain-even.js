#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNumber = () => Math.floor(Math.random() * (100 - 1 + 1) + 1);

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${name}!`);
      break;
    }
    console.log(`Congratulations, ${name}`);
  }
};

brainEven();
