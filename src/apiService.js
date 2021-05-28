export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchArticles() {
//     const options = {
//     headers: {
//         Authorization: '21824668-10aeb8c8af54ec25684dd6884',
//     },
// };

const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21824668-10aeb8c8af54ec25684dd6884`

fetch(url)
    .then(r => r.json())
    .then(data => {
        this.page += 1;
    })
    }

    resetPage() {
        this.page = 1;
    }
    
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    
}