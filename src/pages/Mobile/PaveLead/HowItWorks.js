import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import attract from "../../../assets/images/attract.png";
import convert from "../../../assets/images/convert.png";
import close from "../../../assets/images/close.png";
import evangelize from "../../../assets/images/evangelize.png";
import HowWorksComp from "../../../components/HowWorksComp";


function HowItWorks() {
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
            Inbound is where 
Creative Vision
            </h1>
          
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

        <div className="mt-5 " >
        

        <h5 className="text-[12px] font-semibold leading-[18px] text-left my-8 " >Help strangers sell themselves while compelling them to knock on your door. <br />
We help businesses like yours implement, and run a lead-gen engine that attracts, informs, and converts their best sales opportunities through their website. We'll build the machine. We'll set the stage for sales. Together, we'll drive tangible, long-term growth.

        </h5>
  
     </div>

     <div className="my-10 grid grid-cols-2 gap-2  ">
           <div  >
           <HowWorksComp img={attract} title={`Attract`} sub={`SEO
PAID MEDIA
SOCIAL MEDIA
BLOGGING`} />


<HowWorksComp img={close} title={`Close`} sub={`NURTURING
NOTIFICATIONS
INTEGRATION
INSIGHTS`} />
           </div>
<div>

<HowWorksComp img={convert} title={`Convert`} sub={`CALLS-TO-ACTION
LANDING PAGES
FORMS
THANK YOU PAGES`} />

<HowWorksComp img={evangelize} title={`Evangelize`} sub={`ONBOARD
SURVEY
EMAIL
PROMOTE`} />
</div>
           
        </div>
 
        <LeadAccelerateAutomate
          tabOne={`How it works
          Automate lead generation`}
          tabTwo={`Qualified leads 
          generated `}
          tabThree={`Grow your opportunity
          With collect data`}
          tabFour={`Service 
          packages`}
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

export default HowItWorks;
