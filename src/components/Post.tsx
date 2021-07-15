import React from 'react';

const Post = ({data, setCurrentPost}: {data: any, setCurrentPost: Function}) =>{

    return (<div className="post" onClick={(e)=>{ 
        e.preventDefault();
        setCurrentPost(data)
    }}>
        <div><strong>Post Title: </strong>{data.title}</div>
        <div><strong>Email: </strong>{data.email}</div>
        <div><strong>Body: </strong>{data.body}</div>
    </div>)
}

export default Post;