
import { Button } from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import myImg from "@/public/images/Kongkon.jpg"

const Mission = () => {
  return (
    <main>
        <div className='mt-6'>Mission page</div>
        <Button/>
        <Image src={myImg} alt="my image" quality={100} height={200} width={200}/>
    </main>
  )
}

export default Mission