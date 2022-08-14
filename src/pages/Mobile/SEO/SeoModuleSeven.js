import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import goals from "../../../assets/images/goals.png";

function SeoModuleSeven() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col items-center "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className="mb-[100px] px-[6%] ">
        <div className="flex items-start ">
          <img
            src={blackLuArrow}
            className="object-contain  ml-5 mt-2 "
            alt=""
          />
          <div className="text-left ml-[4%] ">
            <h1 className=" text-[28px] font-bold leading-[35px] ">
              Module 7: <br /> Setting and Tracking Goals
            </h1>
            <img src={goals} className="object-contain w-[309px] mt-4" alt="" />

            <div className="mt-5 ">
              <h5 className="text-[17px] font-medium leading-[22px]  ">
                Good SEO is paying attention to all the details that most
                bloggers ignore{" "}
              </h5>
              <span className="text-[13] font-light italic mt-1 leading-[16px] ">
                Ryan Biddulph
              </span>

              <h5 className="text-[15px] leading-[25px] mt-8">
                By setting up your own goals you can track the progress of any
                work you are doing or of any products or pages that may be your
                main success drivers.
              </h5>

              <h5 className="text-[15px] leading-[25px] mt-5">
                These goals are effectively business targets that you can set to
                ensure your website is moving in the right direction. What could
                be better.
              </h5>
            </div>
          </div>
        </div>
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

export default SeoModuleSeven;
