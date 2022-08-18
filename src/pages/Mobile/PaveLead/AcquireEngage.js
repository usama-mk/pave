import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";

import acquireEngage from "../../../assets/images/acquireEngage.png";


function AcquireEngage() {
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
            Acquire, nurture, 
and engage
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

        <div className="mt-5 " >
        <img src={acquireEngage} className='object-contain w-[326px] '  alt="" />

        <h5 className="text-[12px] font-semibold leading-[18px] text-left my-8 " >ABM and inbound marketing to attract and convert qualified leads
Retention strategy Building effective campaigns to improve customer acquisition 
and retention <br />
Content and engagement strategy Educate, inspire, and build interest post conversion <br />
Full-funnel analytics Marketing automation software gathers data from user and customer 
activity across the entire funnel <br />
Marketing goals Set monthly goals around website traffic, prospects, leads, and customer 
acquisition <br />
Behavior-based email marketing Send appropriate communications based on behavior, 
activities, and interests


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

export default AcquireEngage;
