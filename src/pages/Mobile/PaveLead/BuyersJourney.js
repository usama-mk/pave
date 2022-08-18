import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import businessGraph from "../../../assets/images/businessGraph.png";

function BuyersJourney() {
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
            The buyer’s journey 
stages are
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

        <div className="ml-12 mt-10 ">
         
           <div className="mb-8 " >
           <h1 className="text-[25px] font-bold leading-[40px] text-left " >Awareness</h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          I see symptoms of a problem but do not understand the cause. <br />
Today, companies interact with the buyer digitally through their website to deliver the information the buyer wants, when they need it.
          </h5>
           </div>

           <div className="mb-8 " >
           <h1 className="text-[25px] font-bold leading-[40px] text-left " >Consideration</h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          I understand the cause of my problem and
I am researching solutions.
 <br />
 You might not know exactly which content your customers are choosing to learn more about you.
          </h5>
           </div>

           <div className="mb-8 " >
           <h1 className="text-[25px] font-bold leading-[40px] text-left " >Decision</h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          I understand the solution I want to implement and are researching companies and products to implement the solution.
          </h5>
           </div>

           <h1 className="text-[21px] font-bold leading-[25px] text-left mb-8 " >
           The types of content you create 
should be tailored to where the 
customer is in the buying process. 
           </h1>
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

export default BuyersJourney;
