import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import cowayImg from '../../../assets/images/cowayImg.png'
import cowayLogo from '../../../assets/images/cowayLogo.png'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import CloudLabComp from '../../../components/CloudLabComp'



function Coway() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        {/* header */}
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <img src={cowayImg} className='object-contain' alt="" />
      <div className="mb-[100px] px-[16%] mt-5 ">
      <div className="flex ">
          <img src={arrowBlack} className="object-contain" alt="" />
          <img src={cowayLogo} className="object-contain ml-2 w-[113px] " alt="" />
        </div>
        <h1 className='text-[20px] font-bold leading-[23px] text-left my-3 ' >Digital Marketing, SEO, Branding, Production, Web Development, PR, Paid Advertising</h1>
        <h5 className='text-[16px] leading-[20px] text-left ' >Coway is an international juggernaut of water and air purifier for products used by millions of homes and businesses with emphasis on superior quality and research.</h5>

        <h2 className='text-[17px] font-medium leading-[15px] text-[#410D7F] text-left my-5 ' >Ongoing Results</h2>

        <div className='flex flex-col items-start' >
            <CloudLabComp bulletColor={`#410D7F`} title={`Digital Activation`} stack={`Ad Stack: Google, Meta, Klaviyo`} sub={`Full scale marketing and ad campaigns through aggressive ad strategy and growth hacks resulting in an 329% increase in sales`} />

            <CloudLabComp bulletColor={`#FEB52B`} title={`SEO Activation`} stack={`SEO Stack: Onsite & Offsite`} sub={`Heavy emphasis on SEO campaigns which resulted in 543 new keywords ranked and 30.6% increase in organic traffic.`} />
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

export default Coway