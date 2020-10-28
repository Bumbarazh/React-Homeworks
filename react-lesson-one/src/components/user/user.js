import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {user} = this.props;
        return (
            <div> {
                !user.status && (
                    <strong>
                        <div>{user.name}-{user.age}-{user.status.toString()}
                        </div>
                    </strong>
                    )
                }
                {
                    user.status && (
                        <div>{user.name}-{user.age}-{user.status.toString()}</div>
                    )
                }
            </div>
        );
    }
}

export default User;