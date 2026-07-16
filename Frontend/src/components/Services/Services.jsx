import React from 'react'
import Servicecard from './Servicecard'
import Header from '../Header'

const Services = () => {
  return (
    <div className='bg-white px-5 py-10'>
        <Header h1='OUR' h2='SERVICES'/>
        <div className='flex justify-around'>
        <Servicecard src='/src/assets/s1.jpeg' title='Air Condition Services' desc='Our expert AC repair technicians are here to provide you with fast, reliable and affordable solutions to get your AC up and running in no time. We stand behind our work and guarantee your satisfaction with our services.'/>
        <Servicecard src='/src/assets/s2.jpeg' title='Refrigerator Services' desc='Our expert AC repair technicians are here to provide you with fast, reliable and affordable solutions to get your AC up and running in no time. We stand behind our work and guarantee your satisfaction with our services.'/>
        <Servicecard src='/src/assets/s3.jpeg' title='Washing Machine Services' desc='Our expert AC repair technicians are here to provide you with fast, reliable and affordable solutions to get your AC up and running in no time. We stand behind our work and guarantee your satisfaction with our services.'/>
        <Servicecard src='/src/assets/s4.jpeg' title='MicroWave Oven Services' desc='Our expert AC repair technicians are here to provide you with fast, reliable and affordable solutions to get your AC up and running in no time. We stand behind our work and guarantee your satisfaction with our services.'/>
        </div>
    </div>
  )
}

export default Services