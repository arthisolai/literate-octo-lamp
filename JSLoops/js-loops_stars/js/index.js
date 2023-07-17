console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (index = 1; index <= 5; index++) {
    const imageElement = document.createElement("img");

    imageElement.addEventListener("click", function () {
      renderStars(index);
    });

    if (index <= filledStars) {
      imageElement.src = "./assets/star-filled.svg";
    } else {
      imageElement.src = "./assets/star-empty.svg";
    }
    starContainer.append(imageElement);
  }
}

renderStars(0);
