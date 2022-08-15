import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import ServiceItem from "../../../components/ServiceItem";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";

function AccelerateAndgrow() {
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
            Accelerate and grow your opportunity pipeline
          </h1>
          <div className="flex items-start w-[30%] ">
            <span className="text-[12px] font-bold leading-[22px] text-[#FD4C3C] underline w-[100px] " >Book Meeting</span>
            <img
              src={redRightArrow}
              className="object-contain w-[10px] mt-2 "
              alt=""
            />
          </div>
        </div>

        <h5 className="text-[12px] font-semibold leading-[18px] text-left mt-10 " >Target the right prospects. Align marketing action with your ideal buyer's needs.
Too many marketers focus on metrics that have little significance to business growth. Ironpaper focuses on outcomes, specifically creating and engaging qualified leads. To do this, our work crosses boundaries.
</h5>

<h5 className="text-[12px] font-semibold leading-[18px] text-left mt-5 ">

Our work lives at the intersection of account-based and inbound marketing; creative decision making and data-driven analysis.

</h5>
<h5 className="text-[12px] font-semibold leading-[18px] text-left mt-5 ">

We believe websites have a job to do. When we design and build websites, we focus on both design and performance--not just making a pretty brochure. From lead generation to customer retention, we create the right tools and manage campaigns that measurably improve business outcomes.
</h5>

<div className="mt-10" >

<ServiceItem
      marginLNo={true}
      title={`What is a Sales Pipeline?`}
      selected={true}
      handleServiceClick={()=> {}}
    />

    <ServiceItem 
     marginLNo={true}
     title={`6 Stages of Sales Pipeline`}  selected={true}
     handleServiceClick={()=> {}}
     />
    <ServiceItem marginLNo={true}   title={`We accelerate the pipeline for B2B companies`} selected={true} 
     handleServiceClick={()=> {}}
    />
    
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

export default AccelerateAndgrow;

const ClientTitle = ({ title }) => {
  return (
    <div className="flex items-center ">
      <div className="rounded-full w-[6.5px] h-[6.5px] bg-[#FD4C3C] mr-1  "></div>
      <h3
        style={{ color: title === "Challenges" ? "#FD4C3C" : "" }}
        className="text-[18px] font-bold leading-[15px] "
      >
        {title}
      </h3>
    </div>
  );
};
