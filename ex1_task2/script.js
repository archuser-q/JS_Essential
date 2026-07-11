const imageContainer = document.querySelector("#imageContainer");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");

const images = [
  "https://picsum.photos/id/10/600/400",
  "https://picsum.photos/id/20/600/400",
  "https://picsum.photos/id/30/600/400",
  "https://picsum.photos/id/40/600/400",
  "https://picsum.photos/id/50/600/400",
];

let index = 0;

function renderImage() {
  imageContainer.innerHTML = `<img src="${images[index]}" alt="Gallery image">`;
}

renderImage();
