import React from 'react'
import {notFound} from "next/navigation"

const Blog = ({params}) => {
    const {id} = params;
    if(id === "3"){
        notFound();
    }
  return (
    <div>Blog id : {id}</div>
  )
}

export default Blog