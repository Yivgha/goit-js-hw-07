import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

 const newGallery = galleryItems
        .map(({ preview, original, description }) => 
        `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}"> 
                <img: {
                    class = "gallery__image"
                    src = "${preview}"
                    data-src = "${original}"
                    alt = "${description}"
                } />
            </a>
        </div>
        `
 ).join("");
    
const renderGallery = () => {
    gallery.insertAdjacentHTML("beforeend", newGallery);
}
renderGallery();


const onGalleryClick = (e) => {
    e.preventDefault();

    const getImage = e.target.classList.contains("gallery__link");

    const handleToggle = (e) => {
    if (e.key === "Escape"){
        modalWindow.close();
        };
    };

    if (!getImage) {
        return;
    }
    const instanceEl = e.target.dataset.source;
    const modalWindow = basicLightbox.create((`<div class="gallery__item"><img src="${instanceEl}" alt="e.target.alt"/></div>`),
        {onClose: () => gallery.addEventListener("keydown", handleToggle),
            onShow: () => gallery.addEventListener("keydown", handleToggle),
            
        });
    modalWindow.show();
};

gallery.addEventListener("click", onGalleryClick);
console.log(galleryItems);