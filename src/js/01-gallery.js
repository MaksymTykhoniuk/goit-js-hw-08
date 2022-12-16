// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
console.log('SimpleLightbox :>> ', SimpleLightbox);

const gallery = document.querySelector('.gallery');
const markup = creatMarkup(galleryItems);

gallery.insertAdjacentHTML(`beforeend`, markup);

function creatMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captiins: true,
  captionsData: 'alt',
  captionPosition: 'bootom',
  captionDelay: 250,
});
