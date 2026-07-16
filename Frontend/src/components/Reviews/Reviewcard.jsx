import React from 'react'

const Reviewcard = (props) => {
  return (
    <div className='flex justify-items-start align-middle items-center gap-10 p-5'>
        <img src={props.dp} alt="DP" className='w-15 h-15'/>
        <div>
            <h4 className='text-lg font-semibold text-blue-950'>{props.name}</h4>
            <p className='text-blue-900'>{props.msg}</p>
            <p className='text-blue-400'>{props.addr}</p>
        </div>
    </div>
  )
}

export default Reviewcard