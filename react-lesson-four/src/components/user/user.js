import React, {Component} from 'react';
import './user.css';

class User extends Component {
    render() {

        let {user} = this.props;

        return (
            <div className="card">
                <div className="card-header bg-dark text-white">
                    {user.id}. {user.name}
                </div>
                <div className="card-body">
                    <p className="card-title">Username: {user.username}</p>
                    <p className="card-text">Email: {user.email}</p>
                </div>
            </div>
        );
    }
}

export default User;