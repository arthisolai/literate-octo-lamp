console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newEntry = document.createElement("p");
  newEntry.textContent = "Its a new entry";
  toastContainer.append(newEntry);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
