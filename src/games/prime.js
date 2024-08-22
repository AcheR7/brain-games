import { getRandomNumber, isPrime } from '../utilities.js';
import gameIngine from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  gameIngine(rule, primeGame);
};
