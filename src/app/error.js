'use client'

import React,{useEffect} from 'react'

const Error = ({error,reset}) => {
  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong</h1>
        <button className="hover:text-amber-600 border p-2 rounded-lg mt-2 bg-amber-300 hover:bg-amber-100" onClick={()=>reset()}>
            Refresh
        </button>

    </div>
  )
}

export default Error