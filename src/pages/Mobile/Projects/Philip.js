import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import philipImg from '../../../assets/images/philipImg.png'
import philipLogo from '../../../assets/images/philipLogo.png'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import CloudLabComp from '../../../components/CloudLabComp'



function Philip() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        {/* header */}
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <img src={philipImg} className='object-contain' alt="" />
      <div className="mb-[100px] px-[16%] mt-5 ">
      <div className="flex ">
          <img src={arrowBlack} className="object-contain" alt="" />
          <img src={philipLogo} className="object-contain ml-2 w-[292px] " alt="" />
        </div>
        <h1 className='text-[20px] font-bold leading-[23px] text-left my-3 ' >Talent Acquisition, VIP guestlist, Store Launch Activation, Press Coverage</h1>
        <h5 className='text-[16px] leading-[20px] text-left ' >Industry leading fashion brand with specialty in both men and women's clothing, accessories, shoes, and general apparel with extra emphasis on modern culture.</h5>

        <h2 className='text-[17px] font-medium leading-[15px] text-[#410D7F] text-left my-5 ' >Ongoing Results</h2>

        <div className='flex flex-col items-start' >
            <CloudLabComp bulletColor={`#410D7F`} title={`Brand Activation`} stack={`Event stack: Fashion Week`} sub={`Develop & design skincare products with focus on marketing funnel based UI/UX in order to maximize ROAS.`} />

            <CloudLabComp bulletColor={`#FEB52B`} title={`Digital Activation`} stack={`Ad Stack: Meta, Google, Amazon`} sub={`We secured 4 superstars (Missy Elliot, Timbaland, The Killers & Tinie Tempah) over 4 fashion week events in Milan and NYC.  This enabled press coverage exceeding an AVE of $650k.`} />
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

export default Philip