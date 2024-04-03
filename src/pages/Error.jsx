import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className='align-middle font-bold text-center mt-20'>
      <h1 className='text-4xl'>Something went Error!</h1>
      <h2 className='text-4xl text-red-700'>Page Not Found!</h2>
      <NavLink to='/' className="text-blue-700 underline">Back to home</NavLink>
    </div>
  )
}

export default Error

