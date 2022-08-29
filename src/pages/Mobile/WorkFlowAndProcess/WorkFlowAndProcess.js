import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";

function WorkFlowAndProcess() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className="mb-[100px] px-[6%] ">
        
          <h1 className="text-[25px] font-bold leading-[35px] text-left ">
          Workflow & Process
          </h1>
           
     <TitleSub title={`Discovery`} sub={`Discovery is a phase of in-depth research within the marketing process. It comprises of thorough research of your brand/company and analysis. It helps you better understand your audience, website performance, and market.`} />  
     <TitleSub title={`Activation`} sub={`Brand activation phase is perhaps one of the most creative and carefully curated process. It allows you to build the right digital products and network to connect to your audience in a hyper-segmented way.`} />  
     <TitleSub title={`Conversion`} sub={`Conversion is the process in which the actual customer has reached a point of persuasion is ready to make the sale, lead, or whichever action you desire from your customers.`} />  
     <TitleSub title={`Optimization`} sub={`Through deep analytics, we are able to draw proper links and conclusions on optimizing the campaigns through careful observations. This is the final phase in which your campaign continues to improve over time.`} />  
     <TitleSub title={`Repetition & Expansion`} sub={`As the saying goes don't fix what's not broken, we take the most successful activation and run with it. We will help you rinse and repeat the process until you have the winning formula.`} />  
       

          
<LeadAccelerateAutomate tabOne={`Workflow & Process -
Discovery`} tabTwo={`Workflow & Process -
Activation`} tabThree={`Workflow & Process -
Conversion`} tabFour={`Workflow & Process -
Optimization`} selected={'one'}  /> 
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

export default WorkFlowAndProcess;

const TitleSub=({title, sub})=>{
  return(
    <div className="my-5 text-left " >
      <h1 className="text-[20px] leading-[30px] " >{title}</h1>
      <h3 className="text-[12px] leading-[18px] mt-2" >{sub}</h3>
    </div>
  )
}

