import React, { useState } from 'react'
import MobHeader from '../../../components/MobHeader'
import ServiceHeader from '../../../components/ServiceHeader'
import ppc_main from '../../../assets/images/digital-marketing/mobile/ppc_main.png'
import dm_sub1 from '../../../assets/images/digital-marketing/mobile/dm_sub1.png'
import dm_sub2 from '../../../assets/images/digital-marketing/mobile/dm_sub2.png'
import dm_sub3 from '../../../assets/images/digital-marketing/mobile/dm_sub3.png'
import dm_sub4 from '../../../assets/images/digital-marketing/mobile/dm_sub4.png'
import sub_img_placeholder from '../../../assets/images/digital-marketing/mobile/sub_img_placeholder.png'
import ServiceImageGroup from '../../../components/ServiceImageGroup'



function ServicesFour() {
    const [mainImg, setMainImg]= useState(ppc_main)
    const [subImages, setSubImages]= useState([sub_img_placeholder,sub_img_placeholder,sub_img_placeholder,sub_img_placeholder])
  return (
    <div className='flex flex-col h-[100vh] bg-[#410D7F] sec' >
    <div className="  w-[100vw]  flex justify-center mb-6 ">
    <MobHeader purpleTheme={`#410D7F`} />
  </div>
    <ServiceHeader title={`Paid Advertising (PPC)`} />

    <div className='my-8' >
    <ServiceImageGroup mainImg={mainImg} setMainImg={setMainImg} subImages={subImages} />
    </div>

    <div className='flex items-center ml-8 mb-5' >     
        <div style={{direction: 'rtl'}} className=' csb pl-5 text-left space-y-1 overflow-auto h-[100px] ' >
        <h5 className='text-[15px] text-white' >Google Adwords</h5>
        <h5 className='text-[15px] text-white' >Bing Ads</h5>
        <h5 className='text-[15px] text-white' >Yahoo Ads</h5>
        <h5 className='text-[15px] text-white' >Local Service Ads</h5>
        <h5 className='text-[15px] text-white' >Shopping Ads</h5>
   
        </div>
    </div>
  </div>
  )
}

export default ServicesFour