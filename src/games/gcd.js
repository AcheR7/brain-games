import { randomNumber, getDivisior } from '../utilities.js';
import gameIngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const question = `${num1} ${num2}`;
  const rightAnswer = getDivisior(num1, num2);

  return [question, rightAnswer];
};

export default () => {
  gameIngine(rule, gcd);
};
