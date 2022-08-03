import React from 'react'
import servicesHeader from '../assets/images/servicesHeader.png'



function ServiceHeader({title}) {
   
  return (
    <div className='flex justify-start' >
    {/* <img src={servicesHeader} className='object-contain' alt="" /> */}
    <h1 className='text-[25px] font-semibold leading-[28px] ml-5 text-white' >{title}</h1>

    <div>
        
    </div>
</div>
  )
}

export default ServiceHeader