import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import ochaComp from "../../../assets/images/ochaComp.png";
import mysahelSnaps from "../../../assets/images/mysahelSnaps.png";
import mysahelSnapsTwo from "../../../assets/images/mysahelSnapsTwo.png";
import { ArrowTitle } from "../../../components/ArrowTitle";
import SalesPipelineComp from "../../../components/SalesPipelineComp";
import splOne from "../../../assets/images/splOne.png";
import splTwo from "../../../assets/images/splTwo.png";



function OchaOne() {
 
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className="mb-[100px] px-[6%] ">
        <div className="flex">
            <img src={arrowBlack} className='object-contain' alt="" />
            <img src={ochaComp} className='object-contain ml-2' alt="" />
        </div>

        <div className="my-5" >
        <img src={mysahelSnaps} className='object-contain w-[340px]' alt="" />
        <img src={mysahelSnapsTwo} className='object-contain w-[340px] mt-2' alt="" />
        </div>

        <h1 className="text-[20px] font-bold leading-[23px] text-left mb-5 " >
        The Sahel Song is a co-production between the United Nations (UNOCHA) and some of the most talented and influential musicians from West Africaʼs Sahel region.
        </h1>
           
        <h1 className="text-[24px] font-bold leading-[33px] text-left " >
           What We Did 
           </h1>

           <div className="my-5" >
<ArrowTitle textSize={'20px'} leading={'31px'}   title={`Web & Event Launch`}   />
<ArrowTitle textSize={'20px'} leading={'31px'}    title={`Branding & Creatives`}   />
<ArrowTitle textSize={'20px'} leading={'31px'}    title={`Event Strategy`}   />
</div>
<h1 className="text-[19px] leading-[24px] underline text-left " >
View Website
</h1>

<SalesPipelineComp
            img={splOne}
            title={"Case Study Overview"}
            subTitle={`A sales pipeline gives you visibility into the 
            performance of different salespeople in your team, 
            and monitor how close they are to meeting sales 
            targets`}
          />

          <SalesPipelineComp
            img={splTwo}
            title={"Background"}
            subTitle={`A sales pipeline gives you visibility into the 
            performance of different salespeople in your team, 
            and monitor how close they are to meeting sales 
            targets`}
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

export default OchaOne;

