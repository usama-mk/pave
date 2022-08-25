import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import vigorImg from '../../../assets/images/vigorImg.png'
import vigorLogo from '../../../assets/images/vigorLogo.png'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import CloudLabComp from '../../../components/CloudLabComp'



function Vigor() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        {/* header */}
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <img src={vigorImg} className='object-contain' alt="" />
      <div className="mb-[100px] px-[16%] mt-5 ">
      <div className="flex ">
          <img src={arrowBlack} className="object-contain" alt="" />
          <img src={vigorLogo} className="object-contain ml-2 w-[92px] " alt="" />
        </div>
        <h1 className='text-[20px] font-bold leading-[23px] text-left my-3 ' >Branding, Social Media, 
Brand Strategy, Web Design 
& Development</h1>
        <h5 className='text-[16px] leading-[20px] text-left ' >Newly launching medical marijuana dispensary in New Jersey. Founded by doctors and medical professionals, Vigor continues to promote conscious consumerism.</h5>

        <h2 className='text-[17px] font-medium leading-[15px] text-[#410D7F] text-left my-5 ' >Ongoing Results</h2>

        <div className='flex flex-col items-start' >
            <CloudLabComp bulletColor={`#410D7F`} title={`Branding`} stack={`Design stack: PSD, Ai, Xd`} sub={`Complete branding guidelines with safe consumption and luxury clientele in mind to launch a new cannabis brand.`} />

            <CloudLabComp bulletColor={`#FEB52B`} title={`Web Design & Dev`} stack={`Tech stack: React, Wordpress`} sub={`Funnel and lead generation based designs with easy to use development for quick backend access and edits by client.`} />
        </div>
        
      </div>

{/* nav */}
      <div
        className={`${
          true ? "visible cssanimation fadeInBottom " : "invisible"
        }     flex justify-center w-[100vw] fixed bottom-0 z-30  `}
      >
        <MobNavBar showNavBar={true} />
      </div>
    </div>
  )
}

export default Vigor