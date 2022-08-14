import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import linkBuilding from "../../../assets/images/linkBuilding.png";


function SeoModuleFive() {
 
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
            Module 5: <br /> Offsite Link Building
            </h1>
            <img src={linkBuilding} className="object-contain w-[309px] mt-4" alt="" />

           <div className="mt-5 " >
                <h5 className="text-[15px] leading-[25px] " >
                One of the hardest parts of SEO is building links. In our agency process, we follow tier 
link building in which we target backlinks from high DA (Domain Authority) websites. We 
also have our own set of 1,000 plus websites which are from DA40+ websites and getting 
relevant backlinks from the high authority websites is the key for good SEO.

Monthly Task: Link Building is a non-going process, so till the time your website donʼt reach 
on the first page of Google SERP we will keep on implementing our tier link building strategy 
by providing high quality backlinks on daily basis.

Here are some of the live links mentioned with their domain authority.
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

export default SeoModuleFive;

const OnSiteItem=({title})=>{
    return(
        <h5 className="text-[17px] leading-[25px] mb-1 " >{title}</h5>
    )
}