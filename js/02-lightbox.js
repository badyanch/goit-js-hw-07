import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


document.querySelector("ul.gallery").remove();

const galleryEl = document.createElement("div");
galleryEl.classList.add("gallery");
document.querySelector("p").after(galleryEl);

galleryEl.innerHTML = markupGalleryItems(galleryItems);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function markupGalleryItems(listItems) {
  return listItems.map((item) => `
        <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      `
    ).join("");
}