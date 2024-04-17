import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

const Posts = async () => {
    const posts = await getAllPosts();
  return (
    <div>
        <h3 className='text-center text-2xl font-bold my-3'>All Posts</h3>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 '>
            {posts && posts?.map((post)=>{
                return <ul key={post.id} className="border-2 p-6 rounded-lg shadow-lg">
                    <li className="text-2xl font-bold text-blue-500"><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
                    <li>{post.body}</li>
                </ul>
            })}
        </div>
    </div>
  )
}

export default Posts