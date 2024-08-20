const randomNumber = () => Math.floor(Math.random() * (100 - 1 + 1) + 1);

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

export { randomNumber, calculator, getDivisior };
