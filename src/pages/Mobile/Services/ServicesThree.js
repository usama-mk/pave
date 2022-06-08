import React, { useState } from 'react'
import MobHeader from '../../../components/MobHeader'
import ServiceHeader from '../../../components/ServiceHeader'
import dm_main from '../../../assets/images/digital-marketing/mobile/dm_main.png'
import dm_sub1 from '../../../assets/images/digital-marketing/mobile/dm_sub1.png'
import dm_sub2 from '../../../assets/images/digital-marketing/mobile/dm_sub2.png'
import dm_sub3 from '../../../assets/images/digital-marketing/mobile/dm_sub3.png'
import dm_sub4 from '../../../assets/images/digital-marketing/mobile/dm_sub4.png'
import ServiceImageGroup from '../../../components/ServiceImageGroup'



function ServicesThree() {
    const [mainImg, setMainImg]= useState(dm_main)
    const [subImages, setSubImages]= useState([dm_sub1,dm_sub2,dm_sub3,dm_sub4])
  return (
    <div className='flex flex-col h-[100vh] bg-[#410D7F] sec' >
    <div className="  w-[100vw]  flex justify-center mb-6 ">
    <MobHeader purpleTheme={`#410D7F`} />
  </div>
    <ServiceHeader title={`Digital Marketing`} />

    <div className='my-8' >
    <ServiceImageGroup mainImg={mainImg} setMainImg={setMainImg} subImages={subImages} />
    </div>

    <div className='flex items-center ml-8' >
        {/* <div className='h-[100%] bg-gray-700' >
            <div className='h-[50%] w-0.5 bg-[white] ' >

            </div>
        </div> */}
        
        <div style={{direction: 'rtl'}} className=' csb pl-5 text-left space-y-1 overflow-auto h-[100px] ' >
        <h5 className='text-[15px] text-white' >Search Engine Marketing</h5>
        <h5 className='text-[15px] text-white' >Pay-Per-Click Advertising</h5>
        <h5 className='text-[15px] text-white' >Social Media Marketing</h5>
        <h5 className='text-[15px] text-white' >Content Marketing</h5>
        <h5 className='text-[15px] text-white' >Affiliate Marketing</h5>
   
        </div>
    </div>
  </div>
  )
}

export default ServicesThree