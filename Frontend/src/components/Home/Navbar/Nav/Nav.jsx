import React from 'react'
import Button from '../../../Button'

const Nav = () => {
  return (
    <div className='w-[60%]'>
        <ul className='flex text-xl items-center justify-between'>
            <li className='hover:text-blue-500 hover:translate-0.5  cursor-pointer duration-400'><a href="#">Home</a></li>
            <li className='hover:text-blue-500 hover:translate-0.5  cursor-pointer duration-400'><a href="#">Services</a></li>
            <li className='hover:text-blue-500 hover:translate-0.5  cursor-pointer duration-400'><a href="#">Reviews</a></li>
            <li className='hover:text-blue-500 hover:translate-0.5  cursor-pointer duration-400'><a href="#">About</a></li>
            <li className='hover:text-blue-500 hover:translate-0.5  cursor-pointer duration-400'><a href="#">Contact</a></li>
            <Button title='Logout'/>
        </ul>
    </div>
  )
}

export default Nav