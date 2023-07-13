console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const hTag = document.createElement("h1");
hTag.classList.add("h1");
hTag.textContent = "Social Media Post";
document.querySelector("body").append(hTag);

const articleTag = document.createElement("article");
articleTag.classList.add("post");
const pTag = document.createElement("p");
pTag.classList.add("post__content");
pTag.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const footerTag = document.createElement("footer");
footerTag.classList.add("post__footer");
const spanTag = document.createElement("span");
spanTag.classList.add("post__username");
const buttonTag = document.createElement("button");
buttonTag.classList.add("post__button");

// buttonTag.append(footerTag);
// spanTag.append(footerTag);
// footerTag.append(articleTag);
// pTag.append(articleTag);
