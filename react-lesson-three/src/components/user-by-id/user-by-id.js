import React, {Component} from 'react';
import {UserApiService} from "../../services/UserApiService";
import User from "../user/user";
import './user-by-id.css'

class UserById extends Component {

    api = new UserApiService();

    state = {user: {}};

    render() {
        return (
            <div>
                <form>
                    <input type='number' className={'form-control'} min={1} max={10} onChange={this.onInputChange}/>
                </form>
                    {
                      <User user={this.state.user}/>
                    }
            </div>
        );
    }

    onInputChange = (event) => {
        this.api.getUser(event.target.value).then(item => {
            this.setState({user: item});
        })
    }
}

export default UserById;