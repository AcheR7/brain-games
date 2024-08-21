import { getRandomNumber } from '../utilities.js';
import gameIngine from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = (startProgression, stepProgression) => {
  const progression = [];
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i++) {
    progression.push(startProgression + stepProgression * i);
  }
  return progression;
};

const prog = () => {
  const minStep = 2;
  const maxStep = 10;
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(minStep, maxStep);
  const progression = getProgression(start, step);
  const minIndexOfHiddenNumber = 0;
  const maxIndexOfHiddenNumber = progression.length - 1;
  const indexOfHiddenNumber = getRandomNumber(minIndexOfHiddenNumber, maxIndexOfHiddenNumber);
  const answer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  gameIngine(rule, prog);
};
