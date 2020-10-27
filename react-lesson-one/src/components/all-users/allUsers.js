import React, {Component} from 'react';
import {users} from "../../data/users";
import User from "../user/user";

class AllUsers extends Component {
    render() {
        return (
            <div>
                {
                    users.map((oneUser, i) => {
                        return (
                          <User user = {oneUser} key={i}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default AllUsers;