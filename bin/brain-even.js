import readlineSync from 'readline-sync';

const randomNumber = () => Math.floor(Math.random() * (100 - 1 + 1) + 1);

const brainEven = () => {
  let number = randomNumber();

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);
  const answer = readlineSync.question(`Your answer: `)
};

brainEven();
