import React, { useEffect, useState } from 'react'
import {Post, CommentsModal} from '../components'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {savePosts, selectPosts} from '../app/reduxSlice'

const Home = () =>{

    const dispatch = useAppDispatch()
    const posts = useAppSelector(selectPosts)
    const [isLoading, setIsLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState(null)

    useEffect(()=>{
        (async ()=>{
            const postRes = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
            const commentsRes = await (await fetch('https://jsonplaceholder.typicode.com/comments')).json();
            const lastCommentId = commentsRes.pop().id

            const postsWithComments = postRes.map((post: any)=>{
                return {...post, comments: commentsRes.filter((comment: any)=> comment.postId === post.id)}
            })

            dispatch(savePosts({posts: postsWithComments, lastCommentId}))
            setIsLoading(false);
        })()
    },[])

    return (<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div style={{width:'100%', textAlign:'center'}}>
            <h3>Posts:</h3>
        </div>
        <div className='post-container' >
            {isLoading? <>Loading...</>: posts.length > 0? posts.map((post: any, index) => {
                return <Post key={index} data={post} setCurrentPost={setCurrentPost} />
            }) : <>No posts found</>}
            
        </div>
        {currentPost? <CommentsModal post={currentPost} setCurrentPost={setCurrentPost} />: <></>}
    </div>)
}

export default Home;