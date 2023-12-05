"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'

const Error = () => {

    const router = useRouter()
  return (
    
    <div>Sorry , could not load students.
        <Button onClick={()=>router.refresh()}>Reload Page</Button>
    </div>
  )
}

export default Error