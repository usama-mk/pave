import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import onsite from "../../../assets/images/onsite.png";
import magnifyTwo from "../../../assets/images/magnifyTwo.png";
import code from "../../../assets/images/code.png";
import redPath from "../../../assets/images/redPath.png";
import MainTitleCheck from "../../../components/MainTitleCheck";
import { useState } from "react";

function SeoModuleFour() {
  const [one, setOne] = useState([
    "Keyword data",
    "Budget",
    "Conversion Potential",
    "Strategy",
    "Legal Issues",
    "Competition Level",
    "Traffic Potential",
    "Site Content",
  ]);
  const [two, setTwo] = useState([
    "Analysis",
    "Analyze the factors and generate a final keyword list.",
  ]);
  const [three, setThree] = useState(["Final Keyword list"]);
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
            Module 4-A/B: Onsite Optimization
            </h1>
            <img src={onsite} className="object-contain w-[309px] mt-4" alt="" />

            <div className="mt-5">
             <h1 className="text-[24px] font-bold leadin-[25px] " >
             Onsite To Do Activities SEO Team
             </h1>
            <div className="mt-5" >
            <OnSiteItem title={'Full Onsite Analysis of Client Website'} />
           
            <OnSiteItem title={'On-Page Content'} />

            <OnSiteItem title={'*Keyword Density Optimization'} />

            <OnSiteItem title={'Header Tags (h1, h2, h3, hr) Optimization'} />

            <OnSiteItem title={'Google Analytic and Search Console Setup'} />

            <OnSiteItem title={'Social Media Integration'} />

            <OnSiteItem title={'Google Scheme Markup Setup'} />

            <OnSiteItem title={'Google Analytics Goal Setup'} />

            </div>
            </div>

            <div className="mt-5">
             <h1 className="text-[24px] font-bold leadin-[25px] " >
             Onsite To Do Activities Development Team
             </h1>
            <div className="mt-5" >
            <OnSiteItem title={'URL Structure Optimization'} />
           
            <OnSiteItem title={'URl Canonicalization'} />

            <OnSiteItem title={'Image Alt Tags Optimization'} />

            <OnSiteItem title={'Improve Website Crawlability'} />

            <OnSiteItem title={'Sitemap Generation & Submission to GSC'} />

            <OnSiteItem title={'Website Page Speed Optimization'} />

            <OnSiteItem title={'Website Load Time Optimization'} />

            <OnSiteItem title={'Robots.text Optimization'} />

            <OnSiteItem title={'Favicon Implementation'} />

            <OnSiteItem title={'Webpage Cache Optimization'} />

            <OnSiteItem title={'HTTPS Test & Implementation'} />

            <OnSiteItem title={'Media Query Responsive Test'} />

            <OnSiteItem title={'No index Tag Checker Test'} />

            </div>
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

export default SeoModuleFour;

const OnSiteItem=({title})=>{
    return(
        <h5 className="text-[17px] leading-[25px] mb-1 " >{title}</h5>
    )
}