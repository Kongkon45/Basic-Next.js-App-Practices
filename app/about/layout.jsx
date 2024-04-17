import Link from 'next/link'
import React from 'react'

const AboutLayout = ({children}) => {
  return (
    <div className='mt-6'>
        <nav>
            <ul className="flex justify-center items-center gap-10 h-10 bg-blue-500 text-white text-xl font-bold">
                <Link href="/about/mission"><li>Mission</li></Link>
                <Link href="/about/vision"><li>Vision</li></Link>
            </ul>
        </nav>
        {children}
    </div>
  )
}

export default AboutLayout