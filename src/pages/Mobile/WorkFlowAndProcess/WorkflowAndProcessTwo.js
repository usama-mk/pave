import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import workflowProcess from "../../../assets/images/workflowProcess.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";

function WorkflowAndProcessTwo() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className="mb-[100px] px-[6%] ">
        
          <h1 className="text-[28px] font-bold leading-[33px]  ">
          Workflow & Process
          </h1>

          <img src={workflowProcess} className='w-[350px] mt-12 object-contain ' alt="" />

          <TitleSub title={`One`} textColor={`#410D81`} sub={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />
          <TitleSub title={`Two`} textColor={`#9E2451`} sub={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />
          <TitleSub title={`Three`} textColor={`#DB2E4D`} sub={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />
          <TitleSub title={`Four`} textColor={`#FD4938`} sub={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />
          <TitleSub title={`Five`} textColor={`#FFB91D`} sub={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />

      
<LeadAccelerateAutomate tabOne={`Workflow & Process -
Discovery`} tabTwo={`Workflow & Process -
Activation`} tabThree={`Workflow & Process -
Conversion`} tabFour={`Workflow & Process -
Optimization`} selected={'two'}  /> 
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

export default WorkflowAndProcessTwo;

 

const TitleSub=({title, sub, textColor})=>{
    return(
        <div className="grid grid-cols-6 my-5 " >
            <div>
                <h1 style={{color: textColor}} className={`text-[21px] font-bold leading-[25px] `}>
                    {title}
                    </h1>
            </div>

            <div className="col-span-4 " >
                <h1 className={`text-[12px] leading-[18px] text-left ml-5 `}>
                    {sub}
                    </h1>
            </div>
        </div>
    )
}