console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  // --^-- write your code here --^--
  const numberA = +event.target.elements["numberA"].value;
  const numberB = +event.target.elements["numberB"].value;

  const operator = +event.target.elements["operator"].value;

  let calc;
  switch (operator) {
    case "addition":
      calc = add;
      break;
    case "subtraction":
      calc = subtract;
      break;
    case "division":
      calc = divide;
      break;
    default:
      calc = multiply;
  }

  resultOutput.textContent = calc(numberA, numberB);
});
