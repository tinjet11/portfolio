import React from 'react'
import { Icons } from './icons'

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <h1>Please be patient </h1>
    <br/>

    <Icons.loader />
  </div>
  )
}

export default Loading