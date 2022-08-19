import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";

import alignMarketing from "../../../assets/images/alignMarketing.png";


function AlignMarketing() {
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
          <div className="flex items-start ">
          <img src={blackLuArrow} className='object-contain mr-2 mt-2  ' alt="" />
            <h1 className="text-[25px] font-bold leading-[25px] text-left ">
            Increase qualified 
lead acquisition engaged buyers
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
        <img src={alignMarketing} className='object-contain w-[344px] mt-5 '  alt="" />

        <div className="mt-2 px-[6%]  " >
       

     <h5 className="text-[16px] font-semibold leading-[24px] text-left my-8 " >Many organizations build marketing strategies to appease internal business stakeholders merely. The risk with this approach is that no tangible results get delivered through that strategy.

</h5>

<h5 className="text-[16px] font-semibold leading-[24px] text-left my-8 " >We build adaptive strategies that focus on marketing outcomes and buyer needs. We focus on results that matter to the business. We cut the clutter from marketing strategies, and we build programs to generate qualified leads that can become sales opportunities. 

</h5>
     
     </div>


 
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

export default AlignMarketing;
