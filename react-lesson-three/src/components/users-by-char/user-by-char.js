import React, {Component} from 'react';
import {UserApiService} from "../../services/UserApiService";
import User from "../user/user";

class UserByChar extends Component {

    api = new UserApiService();

    state = {users: [], inputChar: ''};

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" className={'form-control'} value={this.state.inputChar} onChange={this.onInputUserNameChange}/>
                </form>
                {
                    this.state.inputChar && this.state.users.filter(user => {
                        console.log(user);
                        return user.name.includes(this.state.inputChar.toLowerCase());
                    }).map(item => {
                        return (
                            <User user={item} key={item.id}/>
                        )
                    })
                }
            </div>
        );
    }

    onInputUserNameChange = (e) => {
        this.setState({inputChar: e.target.value});
        }
}

export default UserByChar;