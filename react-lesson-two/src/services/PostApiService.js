export class PostApiService {
    _urlPosts = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    async getAllPosts() {
      return (await fetch(this._urlPosts)).json();
    }
}