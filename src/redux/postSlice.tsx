import { createSlice } from '@reduxjs/toolkit';
export interface PostState {
    post: string,
    id: number
    comment: string[]
}

const initialState: PostState[] = [{
    post: '',
    id: 0,
    comment: []
}];
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postData: (state, action) => {
            state.push(action.payload)
        },
        deletePost: (state) => {
            state.length = 0
        },

        editPost:(state,action)=>{
            const post = state.find(elem => elem.id == action.payload.editId)
            if (post) {
                post.post=action.payload.data.post
            }
        },
        postComment: (state, action) => {
            const post = state.find(elem => elem.id === action.payload.postId)
            if (post) {
                post.comment.push(action.payload.data.comment)
            }
        }
    },
})
export const { postData, deletePost,editPost, postComment } = postSlice.actions

export default postSlice.reducer