import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";

import increaseQualified from "../../../assets/images/increaseQualified.png";
import ServiceItem from "../../../components/ServiceItem";


function StrategyExecution() {
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
          
            <h1 className="text-[25px] font-bold leading-[25px] text-left ">
            Strategy and 
execution for qualified 
lead generation
            </h1>
         
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
        

        <h5 className="text-[12px] font-semibold leading-[18px] text-left my-8 " >Lead generation marketing solutions that are designed to convert customers, engage existing ones, and build brand value. We focus on generating qualified leads and engaging them throughout their decision process. 

        </h5>
  
     </div>

     <div className="my-10">
          <ServiceItem
            marginLNo={true}
            title={`Improve conversion rates for lead generation`}
            selected={true}
            handleServiceClick={() => {}}
          />

          <ServiceItem
            marginLNo={true}
            title={`Align your marketing strategy to growth goals`}
            selected={true}
            handleServiceClick={() => {}}
          />
           
        </div>
 
        <LeadAccelerateAutomate
          tabOne={`Increase qualified lead 
          acquisition engaged buyers`}
          tabTwo={`Strategy and execution for
          qualified lead generation`}
          tabThree={`Grow your opportunity
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

export default StrategyExecution;
