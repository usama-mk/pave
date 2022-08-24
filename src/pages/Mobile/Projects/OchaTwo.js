import React, { useState } from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import ochaComp from "../../../assets/images/ochaComp.png";
import { ArrowTitle } from "../../../components/ArrowTitle";
import blackArrowLUBold from "../../../assets/images/blackArrowLUBold.png";
import processOne from "../../../assets/images/processOne.png";
import processTwo from "../../../assets/images/processTwo.png";
import processThree from "../../../assets/images/processThree.png";

import CollectDataDropDown from "../../../components/CollectDataDropDown";
import Process from "../../../components/Process";



function OchaTwo() {
    const [activeOne, setActiveOne]= useState(true)
    const [activeTwo, setActiveTwo]= useState(false)
    const [activeThree, setActiveThree]= useState(false)
    const [processes, setProcesses]= useState([{
        img: processOne,
        title: `Content Creation`,
        sub: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text.`
    },
    {
        img: processTwo,
        title: `Targeting`,
        sub: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text.`
    },
    {
        img: processThree,
        title: `Scaling`,
        sub: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text.`
    }

])
 
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className="mb-[100px] px-[6%] ">
        <div className="flex">
            <img src={arrowBlack} className='object-contain' alt="" />
            <img src={ochaComp} className='object-contain ml-2' alt="" />
        </div>

         

        <h1 className="text-[20px] font-bold leading-[23px] text-left mb-5 " >
        The Sahel Song is a co-production between the United Nations (UNOCHA) and some of the most talented and influential musicians from West Africaʼs Sahel region.
        </h1>
           
        <h1 className="text-[24px] font-bold leading-[33px] text-left " >
           What We Did 
           </h1>

           <div className="my-5" >
<ArrowTitle textSize={'20px'} leading={'31px'}   title={`Web & Event Launch`}   />
<ArrowTitle textSize={'20px'} leading={'31px'}    title={`Branding & Creatives`}   />
<ArrowTitle textSize={'20px'} leading={'31px'}    title={`Event Strategy`}   />
</div>
<h1 className="text-[19px] leading-[24px] underline text-left " >
View Website
</h1>
 
 <div className="flex mt-5">
    <img src={blackArrowLUBold} className='object-contain w-[18px] ' alt="" />
    <h1 className="text-[24px] font-bold leading-[32px] ml-2 " >The Client's Goals</h1>
   
 </div>
 <h5 className="text-[13px] leading-[17px] text-left mt-3" >Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s.</h5>

<div className="mt-3" >
<CollectDataDropDown title={`Implement more targeted marketing`} sub={`We carefully analyze your prospect’s degrees, publications, social media posts, coworkers, and other essential data.`} active={activeOne} setActive={setActiveOne} />

<CollectDataDropDown title={`Website Data`} sub={`We carefully analyze your prospect’s degrees, publications, social media posts, coworkers, and other essential data.`} active={activeTwo} setActive={setActiveTwo}  />

<CollectDataDropDown title={`Custom Intelligence`} sub={`We carefully analyze your prospect’s degrees, publications, social media posts, coworkers, and other essential data.`} active={activeThree} setActive={setActiveThree} />
</div>

<h1 className="text-[24px] font-bold leading-[44px] text-left " >Our Process</h1>

<div className="flex overflow-x-scroll mt-5 " >
   { processes.map((process, key)=>
    <Process img={process.img} title={process.title} sub={process.sub} key={key}  />
    )}
</div>

       </div>
      <div
        className={`${
          true ? "visible cssanimation fadeInBottom " : "invisible"
        }     flex justify-center w-[100vw] fixed bottom-0 z-30  `}
      >
        <MobNavBar showNavBar={true} />
      </div>
    </div>
  );
}

export default OchaTwo;

