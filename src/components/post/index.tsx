import React, { useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { postData, editPost } from '../../redux/postSlice'
import { useRouter } from 'next/router';
import New from './posts'
import Button from '../common/button'
import TextArea from '../form/textarea'
import Layout from '../common/layout'

const schema = yup.object({
    post: yup.string().required(),
})
type FormData = yup.InferType<typeof schema>;

const Post = () => {
    const router = useRouter()
    const [isEdit, setIsEdit] = useState(false)
    const post = useSelector((state: RootState) => state.post)
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, setValue,formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const { editid } = router.query
    const editId = parseInt(editid as string);
    const editData = post.find(data => data.id === editId)

    useEffect(() => {
         if (editData) {
            setIsEdit(true)
            setValue('post', editData.post)
        }
    }, [editData])

   const id = post.length;
    const onSubmit = (data: FormData) => {
        if (isEdit) {
            dispatch(editPost({ data, editId }))
            setIsEdit(!isEdit)
            router.push("/")
            } 
        else {
            dispatch(postData({ ...data, id: id + 1, comment: [] }))
             }
        reset()
    }

    return (
        <>
        <Layout>
            <div className='d-flex justify-content-center'>
                <div className="mt-3 w-50">
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <TextArea error={errors?.post?.message}label ="Post something" {...register("post")}
                            placeholder='what is on your mind...'
                        />
                        <Button append="mt-2" text={isEdit ? "Update" : "Post"}/>
                    </form>
                </div>
            </div>
            <New />
            </Layout>
        </>
    )
}

export default Post
