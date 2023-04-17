import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { deletePost } from '../../redux/postSlice'
import Router from 'next/router';

const Posts = () => {
    const post = useSelector((state: RootState) => state.post)
    const postData=[...post].reverse()
    const dispatch = useDispatch()
    const AddComment = (id: number) => {
        Router.push(`/comment?postid=${id}`)
    }
    const handleEdit = (id: number) => {
        Router.push(`/?editid=${id}`)
    }
    const handleDelete = () => {
        dispatch(deletePost())
    }
    return (
        <>{post?.length > 0 &&
            <div className='d-flex justify-content-center mt-5'>
                <div className='w-50'>
                    <div className='text-end'>
                        <a className='text-success fw-bold text-decoration-none' onClick={handleDelete}>Delete all</a></div>
                    {postData?.map((data) =>
                        <div className='border border-success rounded p-3 mb-3' key={data.id}>
                            {data.post}
                            <div>
                                <a className='text-success me-3' onClick={() => handleEdit(data.id)}>Edit</a>
                                <a className='text-success' onClick={() => AddComment(data.id)
                                }>Comment</a>
                            </div>
                        </div>)}


                </div>
            </div >}

        </>
    )
}

export default Posts
