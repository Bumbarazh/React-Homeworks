import React, {Component} from 'react';
import {CommentsApiService} from "../../services/CommentsApiService";
import Comment from "../comment/comment";
import './comments.css'

class Comments extends Component {

    api = new CommentsApiService();

    state = {comments: []};

    async componentDidMount() {
        this.setState({comments: await this.api.getAllComments()});
    }

    render() {
        return (
            <div className="comments-wrapper">
                <h3>All Comments</h3>
                {
                    this.state.comments.map(comment => (<Comment comment={comment} key={comment.id}/>))
                }
            </div>
        );
    }
}

export default Comments;