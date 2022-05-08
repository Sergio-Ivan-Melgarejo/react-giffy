import React from 'react'
import "./loader.css"

const Loader = () => {
  return (
    <div className='bg-loader'>
        {/* <div>
            <div className='circle circle1'></div>
            <div className='circle circle2'></div>
            <div className='circle circle3'></div>
        </div>
        <p className='text'>Loading...</p> */}

<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader