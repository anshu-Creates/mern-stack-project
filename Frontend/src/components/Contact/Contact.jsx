import React from 'react'
import Header from '../Header'
import Button from '../Button'

const Contact = () => {
  return (
    <div className='bg-white px-5 py-10'>
        <Header h1='CONTACT' h2='US'/>
        <div className='p-5 flex justify-around items-center'>
            <div className='text-lg text-blue-800 font-mono'>
                <p><span className='font-bold text-blue-900'>Address : </span>Thane(West), 400610</p>
                <p><span className='font-bold text-blue-900'>Phone : </span>+91 98765 43210 / +91 98765 43210</p>
                <p><span className='font-bold text-blue-900'>Email : </span>xyz123@abc.com</p>
            </div>
            <img src="/src/assets/f6.png" alt="contact" className='w-60 h-40'/>
        </div>
        <form className='flex p-5 flex-col border-2 border-blue-800 my-5'>
            <input type="text" placeholder='Your Name' className='border border-blue-400 placeholder:text-blue-400 p-2 m-2'/>
            <input type="text" placeholder='Email' className='border border-blue-400 placeholder:text-blue-400 p-2 m-2'/>
            <input type="text" placeholder='Phone Numbar' className='border border-blue-400 placeholder:text-blue-400 p-2 m-2'/>
            <input type="text" placeholder='Subject' className='border border-blue-400 placeholder:text-blue-400 p-2 m-2'/>
            <textarea rows={7} placeholder='Your Mesage' className='border border-blue-400 placeholder:text-blue-400 p-2 m-2'></textarea>
            <Button title='Submit'/>
        </form>
    </div>
  )
}

export default Contact