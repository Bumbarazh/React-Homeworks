import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../user/user";
import './users.css';

class Users extends Component {

    api = new UserService();

    state = {users: []};

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    render() {
        let {users} = this.state;

        return (
            <div>
                {users.map(user => {
                    return (
                        <div>
                            <User user={user} key={user.id}/>
                            <button
                                className="btn btn-info"
                                onClick={() => this.props.history.push(`/users/${user.id}/posts`)}>
                                {user.username} Posts
                            </button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Users;