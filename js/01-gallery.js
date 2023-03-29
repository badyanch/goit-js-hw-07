import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = markupGalleryItems(galleryItems);
galleryEl.addEventListener("click", (evt) => {
    if (evt.target.nodeName !== "IMG") {
      return;
    }
  
    onToggleModal(evt.target.dataset.source);
  });
  

const linksImages = galleryEl.querySelectorAll(".gallery__link");
linksImages.forEach((link) =>
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
  })
);


function markupGalleryItems(listItems) {
  return listItems
    .map((item) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
        </div>`
    ).join("");
}

function onToggleModal(link) {
  const instance = basicLightbox.create(
    `<img src="${link}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );

  instance.show();

  function onCloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}