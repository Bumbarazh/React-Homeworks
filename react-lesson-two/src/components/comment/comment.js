import React, {Component} from 'react';
import './comment.css'

class Comment extends Component {
    render() {

        let {id, name, email, body} = this.props.comment;
        return (
            <div>
                <div className="d-flex flex-column htcs-flex-container">
                    <h4 className="p-2">{id}. {name}</h4>
                    <div className="p-2">{email}</div>
                    <div className="p-2">{body}</div>
                </div>
            </div>
        );
    }
}

export default Comment;