import React from 'react';

const Comment = (props) => {

    let {comment} = props;

    return(
        <div className="card">
            <div className="card-header">
                {comment.id}.{comment.name}
            </div>
            <div className="card-body">
                <h3 className="card-title">{comment.email}</h3>
                <p className="card-text">{comment.body}</p>
            </div>
        </div>
    )
}

export default Comment;