import React, {Component} from 'react';
import {UserApiService} from "../../services/UserApiService";
import User from "../user/user";
import  './users.css'

class Users extends Component {

    api = new UserApiService();

    state = {users: []};

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    render() {
        return (
            <div className="wrapper">
                <h3>All Users</h3>
                {
                    this.state.users.map(user => (<User user={user} key={user.id}/>))
                }
            </div>
        );
    }
}

export default Users;