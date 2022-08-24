import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from '../../../assets/images/black-lu-arrow.png'


import stagesPipeline from '../../../assets/images/stagesPipeline.png'
import { ArrowTitle } from "../../../components/ArrowTitle";


function StagesSalesPipeline() {
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
      <div className="flex ml-5" >
      <img src={blackLuArrow} className='object-contain mr-2  ' alt="" />
          <h1 className="text-[25px] font-bold leading-[25px] text-left ">
          6 stages of sales pipeline
          </h1>
      </div>
          <div className="flex items-start w-[30%] ">
            <span className="text-[12px] font-bold leading-[22px] text-[#FD4C3C] underline w-[100px] " >Book Meeting</span>
            <img
              src={redRightArrow}
              className="object-contain w-[10px] mt-2 "
              alt=""
            />
          </div>

          
        </div>

     <div className="ml-12 mt-10 " >
        <img src={stagesPipeline} className='object-contain w-[326px] '  alt="" />

        <h5 className="text-[12px] font-semibold leading-[18px] text-left my-8 " >For a business that follows a typical B2B sales process, here’s how its sales pipeline stages might look like:</h5>

     <div className="grid grid-cols-2 gap-2 " >
<div className="mb-5" >
<ArrowTitle   title={`Lead generation`}   />
<ArrowTitle   title={`Lead qualification`}   />
<ArrowTitle   title={`Initiate contact`}   />
</div>

<div>
<ArrowTitle title={`Schedule meeting or demo`}   />
<ArrowTitle   title={`Negotiation`}   />

<ArrowTitle   title={`Closing the deal`}   />

</div>
     </div>
       
     </div>
 
     
<LeadAccelerateAutomate tabOne={`How it works
Automate lead generation`} tabTwo={` Accelerate and grow
your opportunity pipeline`} tabThree={` Grow your opportunity
With collect data`} tabFour={`Workflow & Process -
Frequently Asked Questions`} selected={'two'}  />
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

export default StagesSalesPipeline;

