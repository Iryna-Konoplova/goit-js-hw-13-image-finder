import NewsApiService from './apiService';
import imageCardTpl from './templates/image-card.hbs';

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

    newsApiService.query = e.currentTarget.elements.query.value;

    if (newsApiService.query === ' ') {
    return alert('Введи что-то нормальное');
  }

    newsApiService.resetPage();
    newsApiService.fetchArticles().then(addImageMarkup);
    
}


function onLoadMore() {
    newsApiService.fetchArticles().then(addImageMarkup);
}

function addImageMarkup(hits) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', imageCardTpl(hits));
}

function clearContainer() {
    refs.galleryContainer.innerHTML = '';
}