import { getRandomNumber } from '../utilities.js';
import gameIngine from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const questionNumber = getRandomNumber(0, 100);
  const rightAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
  return [questionNumber, rightAnswer];
};

export default () => {
  gameIngine(rule, evenGame);
};
