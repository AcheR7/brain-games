const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

const calculator = (expression) => {
  const [num1, sign, num2] = expression.split(' ');
  if (sign === '+') {
    return String(+num1 + +num2);
  }
  if (sign === '-') {
    return String(+num1 - +num2);
  }
  return String(+num1 * +num2);
};

const getDivisior = (a, b) => {
  if (a === 0 || b === 0) {
    return a || b;
  }

  let divisior;

  for (let i = 0; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      divisior = i;
    }
  }
  return String(divisior);
};

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  getRandomNumber, calculator, getDivisior, isPrime,
};
