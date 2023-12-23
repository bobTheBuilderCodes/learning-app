import Heading from '@/components/constants/Heading'
import SubHeading from '@/components/constants/SubHeading'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen flex items-center flex-col justify-center'>
        <SubHeading>Loading...</SubHeading>
        <p>We are trying so hard to get the students list ... </p>
        </div>
  )
}

export default Loading