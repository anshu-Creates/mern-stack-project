import React from 'react'
import Navbar from './Navbar/Navbar'
import Servicebar from './Servicebar/Servicebar'
import Main from './Main/Main'

const Home = () => {
  return (
    <div className='font-mono'>
        <Navbar/>
        <Servicebar/>
        <Main/>
    </div>
  )
}

export default Home