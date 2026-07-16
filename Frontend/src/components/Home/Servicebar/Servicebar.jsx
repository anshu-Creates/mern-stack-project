import React from 'react'

const Servicebar = () => {
  return (
    <div className='flex sticky text-xl m-5 py-5 px-10 rounded-md tracking-widest font-semibold text-blue-900 justify-around align-middle'>
        <button className='border-2 hover:translate-0.5 cursor-pointer bg-transparent hover:bg-blue-200 duration-400 border-blue-500 py-4 px-10 rounded-xl'>Washing Machine Repair</button>
        <button className='border-2 hover:translate-0.5 cursor-pointer bg-transparent hover:bg-blue-200 duration-400 border-blue-500 py-4 px-10 rounded-xl'>Fridge Repair</button>
        <button className='border-2 hover:translate-0.5 cursor-pointer bg-transparent hover:bg-blue-200 duration-400 border-blue-500 py-4 px-10 rounded-xl'>AC Repair</button>
        <button className='border-2 hover:translate-0.5 cursor-pointer bg-transparent hover:bg-blue-200 duration-400 border-blue-500 py-4 px-10 rounded-xl'>Microwave Repair</button>
        <button className='border-2 hover:translate-0.5 cursor-pointer bg-transparent hover:bg-blue-200 duration-400 border-blue-500 py-4 px-10 rounded-xl'>Other Services & Queries</button>
    </div>
  )
}

export default Servicebar