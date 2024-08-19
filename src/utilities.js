const randomNumber = () => Math.floor(Math.random() * (100 - 1 + 1) + 1);

const calculator = (expression) => {
  const [num1, sign, num2] = expression.split(' ');
  if (sign === '+') {
    return String(+num1 + +num2);
  } else if (sign === '-') {
    return String(+num1 - +num2);
  } else {
    return String(+num1 * +num2);
  }
};

export { randomNumber, calculator };
