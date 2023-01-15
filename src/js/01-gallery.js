import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const murkup = galleryItems.map(el => {
    const cardMarkup = `
  <a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`;
        return cardMarkup;
    }).join('');

galleryRef.innerHTML = murkup;

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
// *******************
console.log(galleryItems);
