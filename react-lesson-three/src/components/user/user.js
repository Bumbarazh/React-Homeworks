import React, {Component} from 'react';
import './user.css'

class User extends Component {
    render() {
        let {name, id, username, email} = this.props.user;
        return (
            <div> {
                name && (<div className={'bg-secondary text-white'}>
                    <h3>{id} - {name}</h3>
                    <p>{username}</p>
                    <p>{email}</p>
                    </div>
                )
            }
            </div>
        );
    }
}

export default User;