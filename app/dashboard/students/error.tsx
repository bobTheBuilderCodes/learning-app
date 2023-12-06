"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'
import Heading from '@/constants/Heading'

const Error = () => {

    const router = useRouter()
  return (
    
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <Heading>
        Sorry , could not load students.
        </Heading>
        <Button onClick={()=>router.refresh()} type='primary'>Reload Page</Button>
    </div>
  )
}

export default Error