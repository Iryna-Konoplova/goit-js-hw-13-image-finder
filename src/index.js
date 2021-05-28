import NewsApiService from './apiService';

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

    newsApiService.query = e.currentTarget.elements.query.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles();
    
}


function onLoadMore() {
    newsApiService.fetchArticles();
}
