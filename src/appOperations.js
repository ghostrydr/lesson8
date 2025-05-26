function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  const intA = parseInt(a, 10);
  const intB = parseInt(b, 10);
  return intA + intB;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

module.exports = {
  multiply,
  add,
  subtract,
  divide,
}
