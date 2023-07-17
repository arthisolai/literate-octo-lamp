console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", function (event) {
  event.target.value = event.target.value.toUpperCase();
});
