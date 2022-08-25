import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import portoImg from '../../../assets/images/portoImg.png'
import portoLogo from '../../../assets/images/portoLogo.png'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import CloudLabComp from '../../../components/CloudLabComp'



function Porto() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        {/* header */}
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <img src={portoImg} className='object-contain' alt="" />
      <div className="mb-[100px] px-[16%] mt-5 ">
      <div className="flex ">
          <img src={arrowBlack} className="object-contain" alt="" />
          <img src={portoLogo} className="object-contain ml-2 w-[237px] " alt="" />
        </div>
        <h1 className='text-[20px] font-bold leading-[23px] text-left my-3 ' >Branding, Social Media, 
Brand Strategy, Web Design 
& Development</h1>
        <h5 className='text-[16px] leading-[20px] text-left ' >Waterfront properties in Montenegro's most livable residential real estate development. Live life less ordinary is the slogan that rings true for anyone visiting Porto Montenegro.</h5>

        <h2 className='text-[17px] font-medium leading-[15px] text-[#410D7F] text-left my-5 ' >Key Results</h2>

        <div className='flex flex-col items-start' >
            <CloudLabComp bulletColor={`#410D7F`} title={`Experiential Activation`} stack={`Event stack: Concert & Digital`} sub={`Summer music launch event  -  produced and co-promoted, with headline concerts taking place for Porto Montenegro.`} />

            <CloudLabComp bulletColor={`#FEB52B`} title={`Press & Marketing`} stack={`Tech stack: React, Wordpress`} sub={`Enabled international press coverage seeing an increase in visitor enquiries by over 71% during the period, plus an AVE of campaign exceeding $200k.`} />
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

export default Porto