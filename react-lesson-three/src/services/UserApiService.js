export class UserApiService{
    _url = 'https://jsonplaceholder.typicode.com/users';

    async getUser(id) {
        return (await fetch(`${this._url}/${id}`)).json();
    }

    async getUsers () {
        return (await fetch(`${this._url}`)).json();
    }
}