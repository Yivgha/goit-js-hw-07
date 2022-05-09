import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = () => {
    const images = galleryItems
        .map(
            ({ original, preview, description }) =>
                `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
                </a>
                </li>`
        ).join("");
    
    gallery.innerHTML = images;
};
createGallery();



const onGalleryClick = (e) => {
    e.prevent.default();
    const handleToggle = (e) => {
    if (e.key === "Escape") {
        modalWindow.close()
    } 
}
    if (e.target === "[data-source]") {
        const modalWindow = basicLightbox.create(`<img src="${preview}" alt="${description}">`,
            {  onShow: () => window.addEventListener("keydown", handleToggle),
                onClose: () => window.addEventListener("keydown", handleToggle),
            });
        modalWindow.show();
    }   
}


gallery.addEventListener("click", onGalleryClick);

console.log(galleryItems);