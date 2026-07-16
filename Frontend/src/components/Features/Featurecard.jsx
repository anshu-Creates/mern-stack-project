import React from 'react'

const Featurecard = (props) => {
  return (
    <div className='w-45 bg-white shadow-2xl font-semibold text-center p-5 rounded-xl h-55 flex flex-col justify-between'>
        <img src={props.img} alt="feature" className='w-full h-35'/>
        <h4 className={props.color}>{props.title}</h4>
    </div>
  )
}

export default Featurecard