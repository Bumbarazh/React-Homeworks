export class PostCommentsService{
    _url = 'https://jsonplaceholder.typicode.com/comments?postId=';

    getCommentsOfPost(id) {
        return fetch(`${this._url}${id}`).then(value => value.json());
    }
}