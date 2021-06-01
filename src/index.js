import NewsApiService from './apiService';
import imageCardTpl from './templates/image-card.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import * as basicLightbox from 'basiclightbox';

import './sass/main.scss';

const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.btn-load-more')
}

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(e) {
  e.preventDefault();
  clearContainer();
  
  newsApiService.query = e.currentTarget.elements.query.value.trim();
    
    if (!newsApiService.query.length) {
    error({
      text: `incorrect request`,
      mode: 'light',
      closer: true,
      hide: true,
      delay: 2000,
    });
    return;
  }

  newsApiService.resetPage();
  
  newsApiService.fetchImages()
    .then(addImageMarkup)
    .catch(onFetchError);
  
  newsApiService.fetchImages()
    .then(removeСlassToButtonLoadMore)
    .catch(onFetchError);
}

function onLoadMore() {
  newsApiService.fetchImages()
    .then(addImageMarkup)
    .catch(onFetchError);  
}

function addImageMarkup(hits) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', imageCardTpl(hits));
  refs.galleryContainer.scrollIntoView({
     behavior: 'smooth',
     block: 'end',
  });
}

function clearContainer() {
  refs.galleryContainer.innerHTML = '';
}

function removeСlassToButtonLoadMore(hits) {
  if (hits.length >= 12) {
    // console.log(hits)
    refs.loadMoreBtn.classList.remove('load-more');
  }
}

function onFetchError(er) {
  error({
    text: `${er}`,
    mode: 'light',
    closer: true,
    sticker: false,
    hide: true,
    delay: 1000,
  }); 
}



// refs.galleryContainer.addEventListener('click', onClick);
// function onClick(e) {
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   const ref = e.target.currentSrc;
//   const instance = basicLightbox.create(`< src='${ref}' alt='${1}'>`).show();
// }

