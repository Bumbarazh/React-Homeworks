import React, {Component} from 'react';
import {PostApiService} from "../../services/PostApiService";
import Post from "../post/post";
import './posts.css'

class Posts extends Component {

    api = new PostApiService();

    state = {posts: []};

    async componentDidMount() {
        this.setState({posts: await this.api.getAllPosts()});
    }

    render() {
        return (
            <div className="posts-wrapper">
                <h3>All Posts</h3>
                {
                    this.state.posts.map(post => (<Post post={post} key={post.id}/>))
                }
            </div>
        );
    }
}

export default Posts;