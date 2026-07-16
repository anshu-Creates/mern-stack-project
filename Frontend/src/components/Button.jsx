import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='rounded-xl hover:bg-blue-300 hover:translate-0.5 duration-400 text-white py-4 px-10 bg-blue-400'>{props.title}</button>
    </div>
  )
}

export default Button