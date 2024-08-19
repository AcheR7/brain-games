import { randomNumber, calculator } from '../utilities.js';
import gameIngine from '../index.js';

const rule = 'What is the result of the expression?';

const calcGame = () => {
  const sign = ['+', '-', '*'];
  const num1 = randomNumber();
  const num2 = randomNumber();
  const randomSign = sign[Math.floor(Math.random() * 3)];
  const question = `${num1} ${randomSign} ${num2}`;
  const rightAnswer = calculator(question);

  return [question, rightAnswer];
};

export default () => {
  gameIngine(rule, calcGame);
};
