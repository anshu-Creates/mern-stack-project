import React from 'react'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

const Navbar = () => {
  return (
    <div className='flex m-5 py-4 px-10 fixed top-0 w-[97%] rounded-md bg-blue-100 justify-between align-middle'>
        <Logo/>
        <Nav/>
    </div>
  )
}

export default Navbar