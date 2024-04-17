"use client"
import React from 'react'

export const Button = () => {
  return (
    <div>
        <button onClick={()=>console.log("clicked here")} className="bg-green-500 text-white py-1 px-4 rounded-lg ">Click me</button>
    </div>
  )
}
