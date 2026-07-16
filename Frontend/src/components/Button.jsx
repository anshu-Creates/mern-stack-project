import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='cursor-pointer rounded-xl text-lg font-bold hover:bg-blue-300 hover:translate-0.5 duration-400 text-white py-2 px-7 bg-blue-400'>{props.title}</button>
    </div>
  )
}

export default Button