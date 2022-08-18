import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import collectDesktop from "../../../assets/images/collectDesktop.png";
import CollectDataDropDown from "../../../components/CollectDataDropDown";
import { useState } from "react";

function CollectData() {
    const [activeOne, setActiveOne]= useState(true)
    const [activeTwo, setActiveTwo]= useState(false)
    const [activeThree, setActiveThree]= useState(false)
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className="mb-[100px] px-[6%] ">
        <div className="flex justify-between ">
          <div className="flex ml-5">
            <img src={blackLuArrow} className="object-contain mr-2  " alt="" />
            <h1 className="text-[25px] font-bold leading-[25px] text-left ">
            We Collect any Data you need
            </h1>
          </div>
          <div className="flex items-start w-[30%] ">
            <span className="text-[12px] font-bold leading-[22px] text-[#FD4C3C] underline w-[100px] ">
              Book Meeting
            </span>
            <img
              src={redRightArrow}
              className="object-contain w-[10px] mt-2 "
              alt=""
            />
          </div>
        </div>

        <div className="ml-12 my-5 ">
         <h5 className="text-[12px] font-semibold leading-[18px] text-left " >
         We gather sales intelligence to streamline your appointment setting. Get the right prospects for your business - we’ll search every corner of the web for you.
         </h5>
            
            <CollectDataDropDown title={`Contact and Compagny Data`} sub={`We carefully analyze your prospect’s degrees, publications, social media posts, coworkers, and other essential data.`} active={activeOne} setActive={setActiveOne} />

            <CollectDataDropDown title={`Website Data`} sub={`We carefully analyze your prospect’s degrees, publications, social media posts, coworkers, and other essential data.`} active={activeTwo} setActive={setActiveTwo}  />

            <CollectDataDropDown title={`Custom Intelligence`} sub={`We carefully analyze your prospect’s degrees, publications, social media posts, coworkers, and other essential data.`} active={activeThree} setActive={setActiveThree} />
        </div>
       
        <div className="mt-12" >
        <img src={collectDesktop} className='object-contain mb-10 '  alt="" />
        <LeadAccelerateAutomate
          tabOne={`How it works
Automate lead generation`}
          tabTwo={` Accelerate and grow
your opportunity pipeline`}
          tabThree={` Grow your opportunity
With collect data`}
          tabFour={`Workflow & Process -
Frequently Asked Questions`}
          selected={"two"}
        />
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

export default CollectData;
