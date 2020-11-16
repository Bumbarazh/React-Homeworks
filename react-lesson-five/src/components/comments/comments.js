import React, {useEffect, useState} from 'react';
import Comment from "../comment/comment";

const Comments = (props) => {

    const [text, setText] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
            .then(value => value.json())
            .then(value => {
                setText(() => {
                    return value;
                })
            })
    })
    return (
        <div>
            {text.map(comment => {
                return <Comment comment={comment} key={comment.id}/>
            })}
        </div>
    )
}

export default Comments;