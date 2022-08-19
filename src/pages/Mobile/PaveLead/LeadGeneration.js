import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";


function LeadGeneration() {
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
            Improve 
conversion rates for lead generation
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
         <h4 className="text-[16px] leqading-[26px] text-left mb-5 " >
         We help clients improve their lead conversion rate and sales-qualified lead conversion rate. <br /> We improve conversion rates from inbound marketing sources, allowing clients to migrate away from costly and ineffective lead sources.
         </h4>
           <div className="mb-8 " >
           <h1 className="text-[23px] font-bold leading-[27px] text-left " >Build traction with pilot
campaigns</h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </h5>
           </div>

           <div className="mb-8 " >
           <h1 className="text-[23px] font-bold leading-[27px] text-left " >Optimize and iterate to 
maximize lead quality</h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </h5>
           </div>

           <div className="mb-8 " >
           <h1 className="text-[23px] font-bold leading-[27px] text-left " >Optimize and iterate to 
maximize lead quality</h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </h5>
           </div>

           <div className="mb-8 " >
           <h1 className="text-[23px] font-bold leading-[27px] text-left " >Cut wasteful 
efforts </h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </h5>
           </div>

           <div className="mb-8 " >
           <h1 className="text-[23px] font-bold leading-[27px] text-left " >Scale successful 
efforts</h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </h5>
           </div>

           <div className="mb-8 " >
           <h1 className="text-[23px] font-bold leading-[27px] text-left " >Scale successful 
efforts</h1>
          <h5 className="text-[16px] leading-[24px] text-left  ">
          Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </h5>
           </div>

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

export default LeadGeneration;
