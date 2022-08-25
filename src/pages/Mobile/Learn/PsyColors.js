import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import colorsOne from "../../../assets/images/colorsOne.png";
import colorsTwo from "../../../assets/images/colorsTwo.png";
import PmImages from '../../../components/PmImages';




function PsyColors() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className='mb-[100px] px-[6%]' >
        <img src={arrowBlack}  className="object-contain"  alt="" />
        <PmImages imgs={[colorsOne, colorsTwo]} />

        <h1 className='text-[23px] font-bold leading-[25px] text-left' >
        The Psychology Behind Colors

        </h1>
        <h5 className='text-[14px] font-bold leading-[23px] text-left text-[#B1B1B1] mt-2 ' >By pavebusiness ·  May 9th, 2020</h5>
        <h5 className='text-[13px] leading-[20px] text-left my-4 ' >
        Design is one of the primary ways we present and communicate our brands, events, and ideas to customers. That said, it makes sense to learn how our target market thinks and behaves in order create designs that they can identify with or that can influence their actions.
<br />
<br />
That food companies and restaurants often incorporate the color red into their logo, for example, says that the choice of color is intentional. This springs back to the psychology of color, which explains how red increases the level of appetite in viewers.
<br />
<br />
There are many more principles of psychology that make a huge impact when applied to designs. Here, we pick the best ones that you can experiment with and integrate into your brand’s visual materials and content.
        </h5>
      </div>

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

export default PsyColors
