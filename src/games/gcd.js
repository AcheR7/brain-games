import { getRandomNumber, getDivisior } from '../utilities.js';
import gameIngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getDivisior(num1, num2);

  return [question, rightAnswer];
};

export default () => {
  gameIngine(rule, gcd);
};
