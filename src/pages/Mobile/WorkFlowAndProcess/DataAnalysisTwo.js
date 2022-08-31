import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import graphThree from "../../../assets/images/graphThree.png";
import graphFour from "../../../assets/images/graphFour.png";
import fadeRight from "../../../assets/images/fadeRight.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";

function DataAnalysisTwo() {
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
          

           <div className=" overflow-x-scroll my-10" >
           <img src={graphThree} className='object-contain' alt="" />
           </div>
           
           <div className="flex justify-center my-10 " >
           <div className="grid grid-cols-6 " >
            <div className="bg-[#FFA800] w-[9px] h-[9px] mt-[0.2rem] " >

            </div>

            <h5 className="text-[13px] leading-[16px] text-left col-span-5 " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
           </div>
           </div>

           <h1 className="text-left text-[42px] font-bold leading-[49px] mb-10 " >
           346,000
           </h1>

           <div className="overflow-x-scroll mb-10" >
            <img src={graphFour} className='object-contain ml-2 ' alt="" />
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

export default DataAnalysisTwo;

