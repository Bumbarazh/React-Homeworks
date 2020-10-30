export class UserApiService {
    _urlUsers = 'https://jsonplaceholder.typicode.com/users';

    async getUsers() {
        return (await fetch(this._urlUsers)).json();
    }
}