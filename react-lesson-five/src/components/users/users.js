import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router";

import User from "../user/user";
import './users.css';

const Users = (props) => {

    const [text, setText] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').
        then(value => value.json()).
        then(value => {
            setText(() => {
                return value;
            });
        });
    });
    return (
        <div>
            {text.map(user => {
                return (
                    <div>
                        <User user={user} key={user.id}/>
                        <button
                            className="btn btn-info"
                            onClick={() => props.history.push(`/users/${user.id}/posts`)}>
                            {user.username} Posts
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
export default withRouter(Users);