import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import quote from "../../../assets/images/quote.png";
import BlogOne from "../../../assets/images/BlogOne.png";
import blogTwo from "../../../assets/images/blogTwo.png";
import LetsTalkModal from "../../../components/LetsTalkModal";

function BlogMain() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className="text-left px-[8%] mb-[100px] ">
        <div className=" flex items-start justify-start mb-5">
          <img
            src={blackLuArrow}
            className="object-contain  ml-1 mt-2 "
            alt=""
          />
        </div>
        <h1 className="text-[26px] font-bold leading-[25px] ">
          Business Mistakes to Avoid
        </h1>
        <div className="flex">
          <h5 className="text-[9px] leading-[11px] text-[#707070] mr-1 ">
            BY Camille Alforque <span className="ml-1">|</span>{" "}
          </h5>

          <h5 className="text-[9px] leading-[11px] text-[#707070] mr-1 ">
            IN CANDIDATE EXPERIENCE<span className="ml-1">|</span>{" "}
          </h5>

          <h5 className="text-[9px] leading-[11px] text-[#707070] ">
            BY Camille Alforque{" "}
          </h5>
        </div>

        <h5 className="text-[16px] leading-[32px] mt-5">
          Build a brand for your company using a specific color scheme and a
          professional logo designed with your business in mind. Keep it simple
          and memorable and use it everywhere.
        </h5>

        <div className="grid grid-cols-4 mt-5 ">
          <div className="col-sapn-1">
            <img
              src={quote}
              className="object-contain w-[18px] ml-1 mt-2 "
              alt=""
            />
          </div>

          <div className="col-span-3">
            <h2 className="text-[18px] leading-[27px] ">
              Only a quarter of young adults are financially literate. You don’t
              want to overwhelm them.
            </h2>
            <h4 className="text-[18px] leading-[27px] text-[#888888] ">
              - William Longgood
            </h4>
          </div>
        </div>

        <h5 className="text-[16px] leading-[32px] mt-5">
          They will be the building blocks of WordPress 5.0. In other words,
          everything including ontent, images, quotes,galleries, cover images,
          audio, video, headings, separators and buttons will turn into distinct
          blocks.
        </h5>

        <img src={BlogOne} className="object-contain w-[339px] mt-5 " alt="" />
        <h1 className="text-[28px] font-bold leading-[29px] mt-5 ">
          Identify your Market
        </h1>
        <h5 className="text-[18px] leading-[32px] mt-5">
          We recommend migrating features to blocks, but support for existing
          WordPress functionality remains
        </h5>
        <div className="flex   ">
          <div className="bg-[#636363] w-[6px] h-[6px] rounded-full mr-3 mt-3 "></div>
          <h5 className="text-[18px] leading-[32px] ">
            Add widgets for content on the side of a page.
          </h5>
        </div>

        <div className="flex   ">
          <div className="bg-[#636363] w-[6px] h-[6px] rounded-full mr-3 mt-3 "></div>
          <h5 className="text-[18px] leading-[32px] ">
            Copy and paste links for embeds.
          </h5>
        </div>
        <img src={blogTwo} className="object-contain w-[339px] mt-5 " alt="" />

        <h1 className="text-[28px] font-bold leading-[29px] mt-5 ">
          Designed with Love.
        </h1>
        <h5 className="text-[18px] leading-[32px] mt-5">
          We recommend migrating features to blocks, but support for existing
          WordPress functionality remains
        </h5>
        <div className="flex   ">
          <div className="bg-[#636363] w-[6px] h-[6px] rounded-full mr-3 mt-3 "></div>
          <h5 className="text-[18px] leading-[32px] ">
            Add widgets for content on the side of a page.
          </h5>
        </div>

        <div className="flex   ">
          <div className="bg-[#636363] w-[6px] h-[6px] rounded-full mr-3 mt-3 "></div>
          <h5 className="text-[18px] leading-[32px] ">
            Copy and paste links for embeds.
          </h5>
        </div>
      </div>
      <LetsTalkModal />
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

export default BlogMain;
