import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import graphOne from "../../../assets/images/graphOne.png";
import graphTwo from "../../../assets/images/graphTwo.png";
import fadeRight from "../../../assets/images/fadeRight.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";

function DataAnalysis() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className="mb-[100px] px-[6%] ">
        
          <h1 className="text-[28px] font-bold leading-[33px] text-left  ">
         Data Analysis
          </h1>
        <div className="flex mt-5 items-center">
            <img src={fadeRight} className='object-contain w-[36px] ' alt="" />
            <h5 className="text-[17px] font-bold text-[#CBCBCB] ml-3 " >Scroll right to view the graph</h5>
        </div>
         <div className="flex items-center justify-between mt-8 ">
         <h1 className="text-[56px] font-bold leading-[65px] text-left underline decoration-[#2B65F0] underline-offset-8 ">
        346
          </h1>

          <div>
            <input type="text" placeholder="lorem ipsum" className="bg-[white] rounded-2xl placeholder:text-black px-4 py-2 "  />
          </div>
         </div>
           

           <div className="flex overflow-x-scroll my-12 justify-between items-start ">
            <h5 className="text-[13px] leading-[16px] text-left " >Lorem ipsum dolor
amet, consectetur adipiscing elit</h5>
            <img src={graphOne} className='object-contain ml-5'  alt="" />
           </div>

           <div className="overflow-x-scroll mb-10" >
           <img src={graphTwo} alt="" />
           </div>


         

      
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

export default DataAnalysis;

