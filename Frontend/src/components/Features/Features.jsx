import React from 'react'
import Header from '../Header'
import Featurecard from './Featurecard'

const Features = () => {
  return (
    <div className='px-5 py-10'>
        <Header h1='OUR' h2='FEATURES'/>
        <div className='flex justify-around pt-5 pb-10'>
            <Featurecard color='bg-blue-100 rounded-[5px]' img='/src/assets/f1.png' title='Online Booking'/>
            <Featurecard color='bg-pink-200 rounded-[5px]' img='/src/assets/f2.png' title='Quick Service'/>
            <Featurecard color='bg-green-100 rounded-[5px]' img='/src/assets/f3.png' title='Save Money'/>
            <Featurecard color='bg-blue-100 rounded-[5px]' img='/src/assets/f4.png' title='Special Discount'/>
            <Featurecard color='bg-violet-100 rounded-[5px]' img='/src/assets/f5.png' title='Best Services'/>
            <Featurecard color='bg-orange-100 rounded-[5px]' img='/src/assets/f6.png' title='24/7 Support'/>
        </div>
    </div>
  )
}

export default Features