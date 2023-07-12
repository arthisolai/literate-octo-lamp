console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const tosStatus = data.tos;
  if (data.tos != "on") {
    alert("Click terms & conditions!");
    showTosError();
  } else {
    alert("Form submitted");
    hideTosError();
  }
});
