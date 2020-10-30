import React, {Component} from 'react';
import './post.css'

class Post extends Component {
    render() {

        let {id, title, body} = this.props.post;

        return (
            <div>
                <div className="d-flex flex-column htcs-flex-container">
                    <h4 className="p-2">{id}. {title}</h4>
                    <div className="p-2">{body}</div>
                </div>
            </div>
        );
    }
}

export default Post;