import React from 'react'
import Button from '../Button'

const Servicecard = (props) => {
  return (
    <div className='bg-blue-100 w-75 p-5 rounded-xl flex flex-col items-center'>
        <img src={props.src} alt="s1" className='w-full h-50 rounded-xl'/>
        <h4 className='bg-white text-blue-900 py-1 px-3 my-2 text-center text-lg font-semibold'>{props.title}</h4>
        <p className='text-justify text-blue-800 mb-2'>{props.desc}</p>
        <Button title='Call Now'/>
    </div>
  )
}

export default Servicecard