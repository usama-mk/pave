import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import lavageImg from '../../../assets/images/lavageImg.png'
import lavageLogo from '../../../assets/images/lavageLogo.png'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import CloudLabComp from '../../../components/CloudLabComp'



function Lavage() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        {/* header */}
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <img src={lavageImg} className='object-contain' alt="" />
      <div className="mb-[100px] px-[16%] mt-5 ">
      <div className="flex ">
          <img src={arrowBlack} className="object-contain" alt="" />
          <img src={lavageLogo} className="object-contain ml-2 w-[113px] " alt="" />
        </div>
        <h1 className='text-[20px] font-bold leading-[23px] text-left my-3 ' >Branding, Ecommerce, Web Design & Development, Social Media, Paid Advertising</h1>
        <h5 className='text-[16px] leading-[20px] text-left ' >Emerging skincare brand with emphasis on cleansing products for your skin & makeup with natural and plant based ingredients. Launch of new channels.</h5>

        <h2 className='text-[17px] font-medium leading-[15px] text-[#410D7F] text-left my-5 ' >Ongoing Results</h2>

        <div className='flex flex-col items-start' >
            <CloudLabComp bulletColor={`#410D7F`} title={`Branding & Web`} stack={`Design & Tech stack: Figma & Shopify`} sub={`Develop & design skincare products with focus on marketing funnel based UI/UX in order to maximize ROAS.`} />

            <CloudLabComp bulletColor={`#FEB52B`} title={`Digital Activation`} stack={`Ad Stack: Meta, Google, Amazon`} sub={`Recently launched project with extra emphasis on activation ad stack through Meta, Google, and Amazon.`} />
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

export default Lavage