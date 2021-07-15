import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store'

interface PostState {
    value: any[],
    lastCommentId: number
}

const initialState: PostState = {value: [], lastCommentId: 0}

export const postSlice  = createSlice({
    name: 'post',
    initialState,
    reducers: {
    savePosts: (state, action : PayloadAction<any>) => {
        state.value = action.payload.posts
        state.lastCommentId = action.payload.lastCommentId
    },
    sendComment: (state, action: PayloadAction<any>) => {
        const data = action.payload;
        console.log(data, action)
        const updatedPosts = state.value.map((post)=>{
            if(post.id === data.id){
                return {...post, comments: [...post.comments, {...data, id: state.lastCommentId + 1, postId: data.id}]}
            }else{
                return post;
            }
        })
        state.value = updatedPosts;
        ++state.lastCommentId

    }
}})

export const selectPosts = (state: RootState) => state.posts.value;

export const { savePosts, sendComment } = postSlice.actions

export default postSlice.reducer;