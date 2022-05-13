import { galleryItems } from './gallery-items.js';
// Change code below this line




const gallery = document.querySelector(".gallery");

const createGallery = () => {
    const images = galleryItems
        .map(
            ({ original, preview, description }) =>
                `
                <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}">
                </a>
                `
        ).join("");
    
    gallery.innerHTML = images;
};
createGallery();

console.log(galleryItems);
