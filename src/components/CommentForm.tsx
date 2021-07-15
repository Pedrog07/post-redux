import React, {useState} from 'react';
import { useAppDispatch } from '../app/hooks';
import { sendComment } from '../app/reduxSlice'


const CommentForm = ({post}:{post: any}) => {
    const dispatch = useAppDispatch()
    const initialState = {id: post.id, name: '', email: '', body: ''}
    const [data, setData] = useState<any>(initialState)

    const handleChange = (e:any) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSend = (e:any) =>{
        e.preventDefault()
        if(data.name && data.body && data.email){
            dispatch(sendComment(data))
            setData(initialState)
            alert('Thanks for your comment!')
        }else{
            alert('Missing fields!')
        }
        
    }
    return (<div className="comment-form">
        <div style={{marginBottom:'5px'}}>Name: <input name="name" value={data.name} onChange={(e:any)=>{ handleChange(e)}} type='text' /></div>
        <div style={{marginBottom:'5px'}}>Email: <input name="email" value={data.email} onChange={(e:any)=>{ handleChange(e)}} type='text' /></div>
        <div style={{marginBottom:'5px'}}><textarea name="body" value={data.body} onChange={(e:any)=>{ handleChange(e)}} rows={4} cols={50} style={{width:'300px'}}></textarea></div>
        <div><button onClick={(e:any)=> { handleSend(e)} }>Send Comment</button></div>
    </div>)
}

export default CommentForm;