import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import workflowfaqOne from "../../../assets/images/workflowfaqOne.png";
import workflowfaqTwo from "../../../assets/images/workflowfaqTwo.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";

function WorkFlowFaqs() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className="mb-[100px] px-[6%] ">
        
          <h1 className="text-[25px] font-bold leading-[35px]  ">
          The standard Lorem Ipsum
passage, used since the 1500s
          </h1>

          <div className="flex justify-center my-2 ">
          <img src={workflowfaqOne} className='object-contain w-[264px] rounded-2xl ' alt="" />
          </div>
     
       <h5 className="text-[12px] leading-[18px] " >Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.</h5>


          <div className="flex justify-center my-2 ">
          <img src={workflowfaqTwo} className='object-contain w-[264px] rounded-2xl ' alt="" />
          </div>
     
       <h5 className="text-[12px] leading-[18px] " >Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.</h5>

      
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

export default WorkFlowFaqs;

 

