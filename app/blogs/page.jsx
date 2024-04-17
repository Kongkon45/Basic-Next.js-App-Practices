import Link from 'next/link'
import React from 'react'

const Blogs = () => {
    const blogs = [
        {
            id : 1,
            title : "blog 1",
            desc : "blog description 1"
        },
        {
            id : 2, 
            title : "blog 2",
            desc : "blog description 2"
        }
    ]
  return (
    <main>
        <div className='text-center text-2xl font-bold my-3'>Blogs page</div>
        <div>
            {blogs && blogs?.map((blog)=>{
                return <ul key={blog.id}>
                    <li><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
                    <li>{blog.desc}</li>
                </ul>
            })}
        </div>
    </main>
  )
}

export default Blogs