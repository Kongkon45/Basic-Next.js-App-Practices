import getpost from '@/lib/getpost';
import React from 'react'

export const generateMetadata = async ({params})=>{
    const {id} = params;
    const post = await getpost(id);
    return {
        title : post.title,
        description : post.body
    }
}

const Post = async ({params}) => {
    const {id} = params;
    const post = await getpost(id);
    // console.log(post)
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default Post