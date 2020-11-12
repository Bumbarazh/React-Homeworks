import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {post} = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    {post.id}.
                </div>
                <div className="card-body">
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        );
    }
}

export default Post;