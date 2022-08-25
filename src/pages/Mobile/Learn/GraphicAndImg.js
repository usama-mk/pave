import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import giOne from "../../../assets/images/giOne.png";
import giTwo from "../../../assets/images/giTwo.png";
import PmImages from '../../../components/PmImages';




function GraphicAndImg() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className='mb-[100px] px-[6%]' >
        <img src={arrowBlack}  className="object-contain"  alt="" />
        <PmImages imgs={[giOne, giTwo]} />

        <h1 className='text-[23px] font-bold leading-[25px] text-left' >
        Graphic and Image Standards for Social Media and the Web
        </h1>
        <h5 className='text-[14px] font-bold leading-[23px] text-left text-[#B1B1B1] mt-2 ' >By pavebusiness ·  May 9th, 2020</h5>
        <h5 className='text-[13px] leading-[20px] text-left my-4 ' >
        With everyone glued to the screen nowadays, it isn’t a mystery where businesses have to be: online. Marketing your brand online has expanded to the point that it’s extremely difficult to appear on the very congested social media feed—much less, get engagement from potential customers.
<br />
<br />
But one thing is for sure: we’re getting more visual than ever. The Internet is continuously expanding to handle more images, graphics, and videos than when it could back in its earlier stages. Which means that more apps and features are being invented to convert socializing into a visual one. To get your customer’s attention, there’s a real need for eye-catching visual content.
<br />
<br />
To help you leverage your visual marketing efforts, we’re providing a guide to specifications and standards for web visuals.
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

export default GraphicAndImg
