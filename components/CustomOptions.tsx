import React, {ReactNode} from 'react'

interface IProps{
    children: ReactNode,
    className?: string
}

const CustomOptions = ({children, className}: IProps) => {

  
  return (
    <div className={`${className} flex justify-start text-blue-300`}>{children}</div>
  )
}

export default CustomOptions