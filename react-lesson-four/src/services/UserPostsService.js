export class UserPostsService {
    _url = 'https://jsonplaceholder.typicode.com/posts?userId=';

    getPostsOfUserById (id) {
        return fetch(`${this._url}${id}`).
            then(value => value.json());
    }
}