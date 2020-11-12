import React, {Component} from 'react';
import {UserPostsService} from "../../services/UserPostsService";
import Post from "../post/post";

class Posts extends Component {

    api = new UserPostsService();

    state = {posts: []};

    async componentDidMount() {
        this.setState({posts: await this.api.getPostsOfUserById(this.props.match.params.id)})
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => {
                        return (
                            <div>
                            <Post post={post} key={post.id}/>
                        <button className="btn btn-info" onClick={() => this.props.history.push(`/users/posts/${post.id}/comments`)}>Post comments</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Posts;