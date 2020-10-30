import React, {Component} from 'react';
import './user.css'

class User extends Component {
    render() {

        let {name, id, username, email} = this.props.user;

        return (
                <div className="d-flex flex-column htcs-flex-container">
                    <h4 className="p-2">{id}. {name}</h4>
                    <div className="p-2">Username: {username}</div>
                    <div className="p-2">Email: {email}</div>
                </div>
        );
    }
}

export default User;