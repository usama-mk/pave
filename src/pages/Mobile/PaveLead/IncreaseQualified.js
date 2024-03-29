import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import redRightArrow from "../../../assets/images/redRightArrow.png";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";

import increaseQualified from "../../../assets/images/increaseQualified.png";
import ServiceItem from "../../../components/ServiceItem";

function IncreaseQualified() {
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
          <div className="flex items-start ">
            <img
              src={blackLuArrow}
              className="object-contain mr-2 mt-2  "
              alt=""
            />
            <h1 className="text-[25px] font-bold leading-[25px] text-left ">
              Increase qualified lead acquisition engaged buyers
            </h1>
          </div>
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

        <div className="mt-5 ">
          <h5 className="text-[12px] font-semibold leading-[18px] text-left my-8 ">
            Target the right prospects. Align marketing action with your ideal
            buyer's needs. <br />
            Too many marketers focus on metrics that have little significance to
            business growth. Ironpaper focuses on outcomes, specifically
            creating and engaging qualified leads. To do this, our work crosses
            boundaries.
          </h5>
        </div>

        <div className="my-10">
          <ServiceItem
            marginLNo={true}
            title={`Marketing, measured by qualified leads generated`}
            selected={true}
            handleServiceClick={() => {}}
          />

          <ServiceItem
            marginLNo={true}
            title={`The buyer’s journey stages`}
            selected={true}
            handleServiceClick={() => {}}
          />
          <ServiceItem
            marginLNo={true}
            title={`Acquire, nurture, and engage`}
            selected={true}
            handleServiceClick={() => {}}
          />
          <ServiceItem
            marginLNo={true}
            title={` We Collect any Data you need`}
            selected={true}
            handleServiceClick={() => {}}
          />
        </div>
        <LeadAccelerateAutomate
          tabOne={`How it works
Automate lead generation`}
          tabTwo={` Accelerate and grow
your opportunity pipeline`}
          tabThree={` Grow your opportunity
With collect data`}
          tabFour={`Workflow & Process -
Frequently Asked Questions`}
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

export default IncreaseQualified;
