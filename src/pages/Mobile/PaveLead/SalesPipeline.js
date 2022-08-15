import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import ServiceItem from "../../../components/ServiceItem";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from '../../../assets/images/black-lu-arrow.png'
import splOne from '../../../assets/images/splOne.png'
import splTwo from '../../../assets/images/splTwo.png'
import splThree from '../../../assets/images/splThree.png'
import SalesPipelineComp from "../../../components/SalesPipelineComp";

function SalesPipeline() {
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
          What is a Sales Pipeline?
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

     <div className="ml-12" >

       <h5 className="text-[12px] font-semibold leading-[18px] text-left mt-10  " >Target the right prospects. Align marketing action with your ideal buyer's needs.
Too many marketers focus on metrics that have little significance to business growth. Ironpaper focuses on outcomes, specifically creating and engaging qualified leads. To do this, our work crosses boundaries.
</h5>
<SalesPipelineComp img={splOne} title={'Insight into deals'} subTitle={`A sales pipeline provides the much-needed insights
into financial metrics that indicate which deals are most
likely to close.`}  />

<SalesPipelineComp img={splTwo} title={'Measure team performance'} subTitle={`A sales pipeline gives you visibility into the performance of
different salespeople in your team, and monitor how close they
are to meeting sales targets`}  />

<SalesPipelineComp img={splThree} title={'Predict revenue'} subTitle={`A sales pipeline is also an indicator of the value of deals that 
are likely to convert, and thus it helps sales leaders predict
revenue month-on-month. `}  />
     </div>
 
     
<LeadAccelerateAutomate tabOne={`How it works
Automate lead generation`} tabTwo={` Accelerate and grow
your opportunity pipeline`} tabThree={` Grow your opportunity
With collect data`} tabFour={` Increase qualified lead 
acquisition engaged buyers`} selected={'two'}  />
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

export default SalesPipeline;
