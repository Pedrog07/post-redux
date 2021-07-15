import React from 'react';

const Comment = ({commentData}: {commentData: any})  => {
    return (<div className="comment">
        <div><strong>Name: </strong>{commentData.name}</div>
        <div><strong>Email: </strong>{commentData.email}</div>
        <div><br />{commentData.body}</div>
    </div>)
}

export default Comment;