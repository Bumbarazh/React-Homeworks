import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router";

import Post from "../post/post";

const Posts = (props) => {

    const [text, setText] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.match.params.id}`)
            .then(value => value.json())
            .then(value => {
                setText(() => {
                    return value;
                })
            })
    })
    return (
        <div>
            {
                text.map(post => {
                    return (
                        <div>
                            <Post post={post} key={post.id}/>
                            <button
                                className="btn btn-info"
                                onClick={() => props.history.push(`/users/posts/${post.id}/comments`)}>Post comments
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default withRouter(Posts);