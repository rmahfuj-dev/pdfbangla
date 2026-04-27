import React from 'react'
import { ReactNode } from 'react'
type Props={
  children:ReactNode;
  className?:string;
}
const Container = ({children,className}:Props) => {
  return (
    <div className={`container max-w-11/12 mx-auto py-16 ${className}`}>{children}</div>
  )
}

export default Container