const API_KEY = '21824668-10aeb8c8af54ec25684dd6884';
const BASE_URL = 'https://pixabay.com/api';


export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.per_page = 12;
    }
    
    fetchImages() {
        const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.per_page}&key=${API_KEY}`;

        return fetch(url)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Error fatching data');
            })
            .then(({ hits }) => {
                this.page += 1;
                // console.log(hits)
                return hits;
            });
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