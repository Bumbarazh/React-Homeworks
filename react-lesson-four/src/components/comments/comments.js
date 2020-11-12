import React, {Component} from 'react';
import {PostCommentsService} from "../../services/PostCommentsService";
import Comment from "../comment/comment";

class Comments extends Component {

    api = new PostCommentsService();

    state = {comments: []};

    async componentDidMount() {
        this.setState({comments: await this.api.getCommentsOfPost(this.props.match.params.id)})
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return <Comment comment={comment} key={comment.id}/>
                })}
            </div>
        );
    }
}

export default Comments;