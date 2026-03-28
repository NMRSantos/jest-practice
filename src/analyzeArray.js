export { analyzeArray };

function analyzeArray(array) {
  if (array == []) {
    const object = {
      average: undefined,
      min: undefined,
      max: undefined,
      lenght: undefined,
    };
  } else {
    const object = {
      average: getAverage(array),
      min: getMin(array),
      max: getMax(array),
      length: getLength(array),
    };

    return object;
  }
}

function getAverage(array) {
  return array.reduce((partialSum, a) => partialSum + a, 0) / 6;
}

function getMin(array) {
  return Math.min(...array);
}

function getMax(array) {
  return Math.max(...array);
}

function getLength(array) {
  return array.length;
}
