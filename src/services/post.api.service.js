export class PostApiService {
    _url = 'https://jsonplaceholder.typicode.com/posts';

    getPosts() {
        return fetch(this._url)
            .then(value => value.json());
    }

}

