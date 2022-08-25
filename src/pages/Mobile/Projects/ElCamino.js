import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import ElCaminoImg from '../../../assets/images/ElCaminoImg.png'
import elcaminoLogo from '../../../assets/images/elcaminoLogo.png'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import CloudLabComp from '../../../components/CloudLabComp'



function ElCamino() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        {/* header */}
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <img src={ElCaminoImg} className='object-contain' alt="" />
      <div className="mb-[100px] px-[16%] mt-5 ">
      <div className="flex ">
          <img src={arrowBlack} className="object-contain" alt="" />
          <img src={elcaminoLogo} className="object-contain ml-2 w-[171px] " alt="" />
        </div>
        <h1 className='text-[20px] font-bold leading-[23px] text-left my-3 ' >Product Design, 3D Rendering, Branding, B2B Channeling, Digital Marketing</h1>
        <h5 className='text-[16px] leading-[20px] text-left ' >Newly developed lines of El Camino and La Reina tequila with three lines of silver, anejo, and reposado with emphasis on high end quality made from Jalisco.</h5>

        <h2 className='text-[17px] font-medium leading-[15px] text-[#410D7F] text-left my-5 ' >Ongoing Results</h2>

        <div className='flex flex-col items-start' >
            <CloudLabComp bulletColor={`#410D7F`} title={`Design & Rendering`} stack={`Design stack: PSD, Ai, Xd`} sub={`Product design with new twist on bottle cap and flushed out 3D design. Slimmed bottle figure with full packaging design.`} />

            <CloudLabComp bulletColor={`#FEB52B`} title={`Digital Activation`} stack={`Ad stack: Meta, Google, LinkedIn`} sub={`B2B lead generation and conversion campaigns in order to increase vendor potential. Resulted in17 new distributor partnerships.`} />
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

export default ElCamino