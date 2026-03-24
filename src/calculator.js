export { calculator };

const calculator = (() => {
  const sum = (x, y) => {
    return x + y;
  };
  const subtract = (x, y) => {
    return x - y;
  };
  const multiply = (x, y) => {
    return x * y;
  };
  const divide = (x, y) => {
    return x / y;
  };
  return {
    sum,
    subtract,
    multiply,
    divide,
  };
})();
