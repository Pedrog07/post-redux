import React, { useState } from 'react';
import { Comment, CommentForm } from '../components'

const CommentsModal = ({post, setCurrentPost}: {post: any, setCurrentPost: Function})=>{
    const [makeComment, setMakeComment] = useState(false)
    return(<div className="comments-background">
        <div className="comments">
            <div><strong>Post Title: </strong>{post.title}</div>

            {makeComment? 
            <CommentForm post={post} />: 
            <div className="comment-container">
            {post.comments.length > 0? post.comments.map((comment:any, index: number)=>{
                return (<Comment key={index} commentData={comment} />)
            }): <>No comments on this post!</>}
        </div>}
            

            <div style={{textAlign:'center'}}><button onClick={()=> setMakeComment(!makeComment)}>{makeComment?'Return':'Make a Comment'}</button></div>
            <div style={{textAlign:'center'}}><button onClick={(e)=>{
                e.preventDefault();
                setCurrentPost(null)
            }}>Close Comments</button></div>
        </div>
    </div>)
}

export default CommentsModal;