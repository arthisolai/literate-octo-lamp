console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

let firstValue = 0;
let secondValue = 0;

firstInput.addEventListener("input", (event) => {
  firstValue = event.target.value;
  multiply(firstValue, secondValue);
});

secondInput.addEventListener("input", (event) => {
  secondValue = event.target.value;
  multiply(firstValue, secondValue);
});

function multiply(num1, num2) {
  result.innerHTML = num1 * num2;
  return;
}
