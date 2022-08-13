import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import work from "../../../assets/images/work.png";
import magnifyTwo from "../../../assets/images/magnifyTwo.png";
import code from "../../../assets/images/code.png";
import redPath from "../../../assets/images/redPath.png";
import MainTitleCheck from "../../../components/MainTitleCheck";
import { useState } from "react";

function SeoModuleTwo() {
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
              Module 2: <br />
              Keyword Research
            </h1>
            <img src={work} className="object-contain w-[309px] mt-4" alt="" />

            <div className="mt-5">
            <div className="grid grid-cols-3" >
             
 
            <div className="col-span-3" >
            <div>
                    {one.map((keyword, key) => (
                      <div className="flex relative " >
                         <hr style={{marginTop:key===0?'12px':'0px'}} className=" h-[30px] w-[4px] border-2 border-black " />
                         {
                            key===0?
                            <hr style={{width:key===0?'45px':'45px'}} className=" w-[45px] border-2 border-black mt-3 absolute left-0 " />
                            :''
                         }
                        <h4 className="text-[18px] text-left ml-16 font-semibold leaeding-[29px] ">
                        {keyword}
                      </h4>

                      </div>
                    ))}
                  </div>
            </div>
            {/*  */}
            <div className="col-span-3  " >
            <div>
                    {one.map((keyword, key) => (
                      <div className="flex relative " >
                         <hr style={{marginTop:key===0?'0px':'0px'}} className=" h-[30px] w-[4px] border-2 border-black " />
                         {
                            key===0?
                            <hr style={{width:key===0?'45px':'45px'}} className=" w-[45px] border-2 border-black mt-3 absolute left-0 " />
                            :''
                         }
                        <h4 className="text-[18px] text-left ml-16 font-semibold leaeding-[29px] ">
                        {keyword}
                      </h4>

                      </div>
                    ))}
                  </div>
            </div>
            </div>


              {/* <div className="flex items-start mt-8">
                <hr className=" h-[392px] w-[4px] border-2 border-black mt-3" />
                <hr className=" w-[45px] border-2 border-black mt-3" />
                <div>
                  <div>
                    {one.map((keyword) => (
                      <h4 className="text-[18px] text-left ml-6 font-semibold leaeding-[29px] ">
                        {keyword}
                      </h4>
                    ))}
                  </div>
 
                </div>
              </div> */}

              <div className="flex items-start mt-8 ">
                <img
                  src={magnifyTwo}
                  className="object-contain w-[49px] mt-1 "
                  alt=""
                />
                <h4 className="text-[18px] text-left ml-6 font-medium leaeding-[18px] ">
                  Your semrush
                  <br /> organic search <br />
                  competitors
                </h4>
              </div>
              <div className="mt-8 flex items-start ">
                <img
                  src={redPath}
                  className="object-contain w-[19px] border-2 border-[#FFB91D]   "
                  alt=""
                />
                <h4 className="text-[16px] font-semibold leading-[22px] ml-6 underline  ">
                  Your potential SEO Competitors
                </h4>
              </div>
              <h1 className="text-[23px] font-semibold leading-[30px] mt-12 ">
                Compare with your SEO Competitors
              </h1>

              <MainTitleCheck
                title={"Keywords"}
                keywords={[
                  "Type",
                  "Relevance",
                  "Search Volume",
                  "Total number of Ranked Keywords",
                ]}
              />

              <MainTitleCheck
                title={"Ranked Pages Popularity"}
                keywords={[
                  "Page authority",
                  "Domain authority",
                  "External link anchor text",
                  "External links volume",
                ]}
              />

              <MainTitleCheck
                title={"Ranked content"}
                keywords={[
                  "Relevance",
                  "Optimization",
                  "Scheme markup",
                  "Format",
                  "Social Metrics",
                ]}
              />

              <div className="mt-10 flex items-start ">
                <img
                  src={redPath}
                  className="object-contain w-[19px] border-2 border-[#FFB91D]   "
                  alt=""
                />
                <h4 className="text-[16px] font-semibold leading-[22px] ml-6 underline  ">
                  The goal is to get a panoramic view of what you're up against
                  and where your opportunities are
                </h4>
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

export default SeoModuleTwo;
