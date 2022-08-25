import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import jetsmarterImg from '../../../assets/images/jetsmarterImg.png'
import jetSmarterLogo from '../../../assets/images/jetSmarterLogo.png'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import CloudLabComp from '../../../components/CloudLabComp'



function Jetsmarter() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        {/* header */}
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <img src={jetsmarterImg} className='object-contain' alt="" />
      <div className="mb-[100px] px-[16%] mt-5 ">
      <div className="flex ">
          <img src={arrowBlack} className="object-contain" alt="" />
          <img src={jetSmarterLogo} className="object-contain ml-2 w-[113px] " alt="" />
        </div>
        <h1 className='text-[20px] font-bold leading-[23px] text-left my-3 ' >Digital Marketing, Entertainment Marketing, VIP Acquisition, Brand Partnerships</h1>
        <h5 className='text-[16px] leading-[20px] text-left ' >Rideshare App For Private Jets invested by Platinum artist Jay-Z for a  private jet members club, Jetsmarter with emphasis on celebrity and brand partnerships.</h5>

        <h2 className='text-[17px] font-medium leading-[15px] text-[#410D7F] text-left my-5 ' >Key Results</h2>

        <div className='flex flex-col items-start' >
            <CloudLabComp bulletColor={`#410D7F`} title={`Launch Activation`} stack={`Event Stack: VIP & Partnerships`} sub={`F1 Monaco, Cannes Film Festival, Paris Fashion Week, Grammy's Tea Party with Len Blavatnik and others.`} />

            <CloudLabComp bulletColor={`#FEB52B`} title={`Talent Activation`} stack={`Entertainment Stack: Engagement Boost`} sub={`Secured numerous stars such as Cara Delevingne, Ashton Kutcher, Victoria Beckham, Hailey Bieber to post original content resulting in an uptake in membership sales by over 43% during the period.
`} />
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

export default Jetsmarter