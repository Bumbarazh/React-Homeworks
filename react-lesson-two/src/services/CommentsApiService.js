export class CommentsApiService {
    _urlComments = 'https://jsonplaceholder.typicode.com/comments?_limit=10';

    async getAllComments () {
        return (await fetch(this._urlComments)).json();
    }
}