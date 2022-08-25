import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import pmOne from "../../../assets/images/pmOne.png";
import pmTwo from "../../../assets/images/pmTwo.png";
import PmImages from '../../../components/PmImages';




function PrintMarketing() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className='mb-[100px] px-[6%]' >
        <img src={arrowBlack}  className="object-contain"  alt="" />
        <PmImages imgs={[pmOne, pmTwo]} />

        <h1 className='text-[23px] font-bold leading-[25px] text-left' >
        Print Marketing: Prints, Papers, and Pixels
        </h1>
        <h5 className='text-[14px] font-bold leading-[23px] text-left text-[#B1B1B1] mt-2 ' >By pavebusiness ·  May 9th, 2020</h5>
        <h5 className='text-[13px] leading-[20px] text-left my-4 ' >
        The unprecedented pandemic of 2020 has changed how we live and interact with the world. With this in mind, we decided to shape our Christmas gifts around this new way of living.
        <br/>
<br/>
Our Christmas gift, one we’ve called ‘Seriously Essential Goods’ is a set of practical items we’ve mindfully curated given what’s happening in the world while trying to capture our feelings of vulnerability at this moment in time.
<br/>
<br/>
Printed Media Brings A Competitive Edge to Your Brand
With so many brands vying for online presence, printed media is the easiest way to cut through the digital noise and establish a tangible and credible presence in your target market. Websites only get scanned by prospects a mere 10 to 15 seconds, and ad-saturated newsletters, ignored. Printed brand materials, in comparison, survive in your customer’s office or home for years. Not to mention, our brains register print differently: people are more easily able to recall and comprehend printed materials compared to digital data. All the more reason to ramp up your printed adverts! Ready to get started on creating your brand materials? Here’s a comprehensive guide to the basics of printed media.
<br/>
<br/>
The unprecedented pandemic of 2020 has changed how we live and interact with the world. With this in mind, we decided to shape our Christmas gifts around this new way of living.
<br/>
<br/>
Our Christmas gift, one we’ve called ‘Seriously Essential Goods’ is a set of practical items we’ve mindfully curated given what’s happening in the world while trying to capture our feelings of vulnerability at this moment in time.
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

export default PrintMarketing
