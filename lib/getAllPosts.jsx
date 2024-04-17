import React from 'react'

const getAllPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  if(!result.ok){
    throw new Error("Data fetching error")
  }
  return result.json()
}

export default getAllPosts