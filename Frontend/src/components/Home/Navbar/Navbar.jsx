import React from 'react'
import Logo from './Logo'
import Button from '../../Button'

const Navbar = () => {
  return (
    <div className='flex m-5 py-4 px-10 fixed top-0 w-[97%] rounded-md bg-blue-100 justify-between align-middle'>
        <Logo/>
        <Button title='Logout'/>
    </div>
  )
}

export default Navbar