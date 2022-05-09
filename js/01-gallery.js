import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
let modalWindow;

const renderGallery = () => {
    const newGallery = galleryItems
        .map(({ preview, original, description }) => 
        `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}"> 
                <img: {
                    class = "gallery__image"
                    data-src = "${original}"
                    src = "${preview}"
                    
                    alt = "${description}"}
                />
            </a>
        </div>
        `
    ).join("");

    gallery.innerHTML = newGallery;
}
renderGallery();

const onClickGallery = (e) => {
    e.preventDefault();
    const getImage = e.target.getAttribute("data-src");
    if (getImage) {
        modalWindow = basicLightbox.create(`<div><img src="${getImage} alt="${description}"/></div>`),
        {
        onShow: () => gallery.addEventListener("keydown", handleToggle),
        onClose: () => gallery.addEventListener("keydown", handleToggle)
        }
        modalWindow.show();
    }
};

const handleToggle = (e) => {
    if (e.key === "Escape"){
        modalWindow.close()};
};

gallery.addEventListener("click", onClickGallery);