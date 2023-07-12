console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  //   const newBadness = data.badness;
  const ageBadnessSum = Number(data.age) + Number(data.badness);
  console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnessSum}`);
});
