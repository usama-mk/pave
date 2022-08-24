import React, { useState } from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import ochaComp from "../../../assets/images/ochaComp.png";
import { ArrowTitle } from "../../../components/ArrowTitle";
import blackArrowLUBold from "../../../assets/images/blackArrowLUBold.png";
import ArrowTitleBold from "../../../components/ArrowTitleBold";

function OchaThree() {
  const [usedChannels, setUsedChannels] = useState([
    "Facebook",
    "Snapchat",
    "Google",
    "Search",
    "Youtube",
  ]);
  const [assets, setAssets] = useState([
    " UGC Videos (produced by our team)",
    "Celebrity shout outs edited into DTC ads",
    "Dynamic product ads/carousels",
  ]);

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
          <img src={arrowBlack} className="object-contain" alt="" />
          <img src={ochaComp} className="object-contain ml-2" alt="" />
        </div>

        <h1 className="text-[20px] font-bold leading-[23px] text-left mb-5 ">
          The Sahel Song is a co-production between the United Nations (UNOCHA)
          and some of the most talented and influential musicians from West
          Africaʼs Sahel region.
        </h1>

        <h1 className="text-[24px] font-bold leading-[33px] text-left ">
          What We Did
        </h1>

        <div className="my-5">
          <ArrowTitle
            textSize={"20px"}
            leading={"31px"}
            title={`Web & Event Launch`}
          />
          <ArrowTitle
            textSize={"20px"}
            leading={"31px"}
            title={`Branding & Creatives`}
          />
          <ArrowTitle
            textSize={"20px"}
            leading={"31px"}
            title={`Event Strategy`}
          />
        </div>
        <h1 className="text-[19px] leading-[24px] underline text-left ">
          View Website
        </h1>

        <div className="flex mt-5">
          <img
            src={blackArrowLUBold}
            className="object-contain w-[18px] "
            alt=""
          />
          <h1 className="text-[24px] font-bold leading-[32px] ml-2 ">
            What We Used
          </h1>
        </div>
        <h5 className="text-[13px] leading-[17px] text-left mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </h5>

        <div className="mt-3 flex flex-col items-start ">
          <ArrowTitleBold title={`What Digital Channels Were Used?`} />
          <div className="ml-16">
            {usedChannels.map((channel) => (
              <div className="flex items-center mt-1 ">
                {" "}
                <div className="w-[5px] h-[5px] bg-[#5A5A5A] rounded-full mr-2 "></div>{" "}
                <h5 className="text-[17px] leading-[22px] ">{channel}</h5>{" "}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-col items-start ">
          <ArrowTitleBold title={`What Assets Were Created?`} />

          <div className="ml-5   ">
            {assets.map((asset) => (
              <div className="flex items-center mt-1 ">
                {" "}
                <div className="w-[5px] h-[5px] bg-[#5A5A5A] rounded-full mr-2 "></div>{" "}
                <h5 className="text-[17px] leading-[24px] ">{asset}</h5>{" "}
              </div>
            ))}
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

export default OchaThree;
