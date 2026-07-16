import React from 'react'
import Button from '../../../Button'

const Nav = () => {
  return (
    <div className='w-[60%] place-content-center'>
        <ul className='flex text-2xl align-middle justify-between'>
            <li>Home</li>
            <li>Services</li>
            <li>Reviews</li>
            <li>About</li>
            <li>Contact</li>
            <Button/>
        </ul>
    </div>
  )
}

export default Nav