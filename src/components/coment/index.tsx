import React,{useRef} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { useRouter } from 'next/router'
import { postComment } from '../../redux/postSlice'
import Input from '../form/input'
import Button from '../common/button'
import Layout from '../common/layout'

const schema = yup.object({
    comment: yup.string().required(),
})
type FormData = yup.InferType<typeof schema>;
const Coments = () => {
    const router = useRouter()
    const { postid } = router.query
    const postId = parseInt(postid as string);
    const { register, handleSubmit, formState: { errors },reset, } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const post = useSelector((state: RootState) => state.post)
    const data = post.find(data => data.id === postId)
    const reversed = data?.comment ? [...data.comment].reverse() : []
    const comments = { ...data, comment: reversed }
    const dispatch = useDispatch()
    const onSubmit = (data: FormData) => {
        dispatch(postComment({ data, postId }))
        reset()
    }
    return (
        <>
        <Layout>
            {postId ?
                <div className='d-flex justify-content-center mt-5'>
                    <div className='w-50'>
                        <div className='border border-success rounded p-3 mb-3'>
                            {data?.post}
                        </div>
                        <div className='border border-success rounded p-3'>
                            <form className="mb-3 form-input" onSubmit={handleSubmit(onSubmit)}>
                               <Input label="" type="text"placeholder='enter comment...'
                                   error={errors?.comment?.message} {...register("comment")}/>
                                    <Button text="comment"append="form-button" />
    
                            </form>
                            {comments?.comment?.map((comments, idx) =>
                                <div key={idx}>
                                    {comments}
                                </div>
                            )}
                        </div>

                        <div></div>
                    </div>
                </div> : <div className="text-center fs-3 text-success">Something went wrong...</div>}
                </Layout>
        </>
    )
}
export default Coments
