import React from 'react'
import Header from '../Header'

const About = () => {
  return (
    <div className='bg-white px-5 py-10'>
        <Header h1='ABOUT' h2='US'/>
        <div className='flex justify-around font-mono'>
            <img src="/src/assets/f1.png" alt="About" className='mx-10 h-50 w-80'/>
            <div className='px-25 w-4xl'>
                <h4 className='text-xl text-center mb-2 text-blue-900 font-extrabold'>Who We Are ?</h4>
                <p className='text-center text-blue-800'>Welcome to Balaji Repair & Services, where innovation meets excellence. We are a passionate team dedicated to providing top-notch Washing Machine, Microwave, Fridge, AC Repair. Our mission is to deliver high-quality solutions that cater to your needs, ensuring efficiency, reliability and satisfaction. With a team of skilled professionals and years of experience, we strive to stay ahead of industry.</p>
                <h5 className='bg-blue-400 text-center my-2'>Welcome to BALAJI REPAIR AND SERVICES</h5>
            </div>
        </div>
    </div>
  )
}

export default About