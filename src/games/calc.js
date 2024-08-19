import readlineSync from 'readline-sync';

const playCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('What is the result of the expression?')

  for (let i = 0; i < 3; i++) {
    
  }
  console.log(`Congratulations, ${userName}`);
};