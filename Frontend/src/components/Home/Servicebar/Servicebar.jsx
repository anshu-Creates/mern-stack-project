import React from 'react'

const Servicebar = () => {
  return (
    <div className='flex text-lg m-5 py-5 px-10 mt-30 bg-transparent tracking-wider font-bold text-blue-900 justify-between items-center whitespace-nowrap'>
        <button className='border-2 hover:translate-0.5  cursor-pointer hover:bg-blue-200 duration-400 border-blue-500 bg-white py-2 px-7 rounded-xl'>Washing Machine Repair</button>
        <button className='border-2 hover:translate-0.5  cursor-pointer hover:bg-blue-200 duration-400 border-blue-500 bg-white py-2 px-7 rounded-xl'>Fridge Repair</button>
        <button className='border-2 hover:translate-0.5  cursor-pointer hover:bg-blue-200 duration-400 border-blue-500 bg-white py-2 px-7 rounded-xl'>AC Repair</button>
        <button className='border-2 hover:translate-0.5  cursor-pointer hover:bg-blue-200 duration-400 border-blue-500 bg-white py-2 px-7 rounded-xl'>Microwave Repair</button>
        <button className='border-2 hover:translate-0.5  cursor-pointer hover:bg-blue-200 duration-400 border-blue-500 bg-white py-2 px-7 rounded-xl'>Other Services & Queries</button>
    </div>
  )
}

export default Servicebar