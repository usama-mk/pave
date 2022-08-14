import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import codeModuleThree from "../../../assets/images/codeMoudleThree.png";

import { useState } from "react";
import CheckTitle from "../../../components/CheckTitle";

function SeoModuleThree() {
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
              Module 3: <br />
              Website Current Health Analysis
            </h1>
            <img
              src={codeModuleThree}
              className="object-contain w-[309px] mt-4"
              alt=""
            />

            <div className="mt-5">
              <h4 className="text-[21px] leading-[25px] ">
                We take care of every major on site issue of your website and
                optimize it properly to get good results.
              </h4>

              <TitleSubTitle title={"SEO Score"} subTitle={"65 out of 100"} />

              <TitleSubTitle
                title={"Loading Time Decreased"}
                subTitle={"By 0.2s"}
              />

              <TitleSubTitle title={"Uptime percent"} subTitle={"100%"} />

              <TitleSubTitle
                title={"SEO Score Progress"}
                subTitle={"October 04, 2013"}
              />

              <div className="mt-10">
                <h1 className="text-[24px] leading-[25px] font-semibold ">
                  Most important issues
                </h1>
                <h5 className="text-[14px] leading-[16px] mt-2 ">
                  - We have found 24 URL that are not SEO friendly!
                </h5>
                <h5 className="text-[14px] leading-[16px] mt-2 ">
                  - Your HTML size is 47.53 KB and is over the average web page
                  HTML size of 33KB
                </h5>
                <h5 className="text-[14px] leading-[16px] mt-5 ">
                  This can load slower than average load time, lost visitors,
                  and decreaed revenue. Good steps to reduce HTML size include:
                  using of HTML compression, CSS layouts, externa style sheets,
                  and moving javascript to external files.
                </h5>
                <h5 className="text-[21px] leading-[25px] mt-10 ">
                  Thereʼs more to on-page SEO than cramming keywords into your
                  pageʼs HTML. To rank your content in 2020, you also need to
                  optimize your content for:
                </h5>
                <div className="mt-8">
                  <CheckTitle medium={true} title={"User Experience"} />
                  <CheckTitle medium={true} title={"Page loading speed"} />
                  <CheckTitle medium={true} title={"Bounce Rate and Dwell"} />
                  <CheckTitle medium={true} title={"Time"} />
                  <CheckTitle
                    medium={true}
                    title={"Bounce Rate and Dwell Time"}
                  />
                </div>
                <h3 className="text-[14px] leading-[30px] mt-10 ">
                  We take care of every major on site issue of your website and
                  optimize it properly to get good results.
                </h3>
                <div className="mt-8">
                  <h1 className="text-[24px] font-bold leading-[25px] ">
                    Health Check
                  </h1>
                  <div className="mt-3">
                    <CheckTitle
                      
                      title={"Perform a site search"}
                      month={true}
                    />

                    <CheckTitle
                      
                      title={"Perform brand searches"}
                      month={true}
                    />

                    <CheckTitle
                      
                      title={"Review the total pages indexed"}
                      month={true}
                    />

                    <CheckTitle
                      
                      title={"Duplicate content review"}
                      month={true}
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <h1 className="text-[24px] font-bold leading-[25px] ">
                    Usability Review
                  </h1>
                  <div className="mt-3">
                    <CheckTitle
                      
                      title={"Site load time"}
                      month={true}
                    />

                    <CheckTitle
                      
                      title={"Home page layout"}
                      month={true}
                    />

                    <CheckTitle
                      
                      title={"Quality of internal landing pages"}
                      month={true}
                    />

                    <CheckTitle
                      
                      title={"Quality/frequency of CTA"}
                      month={true}
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <h1 className="text-[24px] font-bold leading-[25px] ">
                    Content Review
                  </h1>
                  <div className="mt-3">
                    <CheckTitle  title={"Quality"} month={true} />

                    <CheckTitle  title={"Length"} month={true} />

                    <CheckTitle
                      
                      title={"Human or Goal-focused"}
                      month={true}
                    />

                    <CheckTitle
                      
                      title={"Ease of reading"}
                      month={true}
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <h1 className="text-[24px] font-bold leading-[25px] ">
                    Server Redirect Response Codes
                  </h1>
                  <div className="grid grid-cols-3 mt-3 ">
                    <div>
                      <CheckTitle  title={"301"} month={true} />
                      <CheckTitle  title={"410"} month={true} />
                      <CheckTitle  title={"503"} month={true} />
                    </div>

                    <div>
                      <CheckTitle  title={"302"} month={true} />
                      <CheckTitle  title={"404"} month={true} />
                      <CheckTitle  title={"520"} month={true} />
                    </div>

                    <div>
                      <CheckTitle  title={"307"} month={true} />
                      <CheckTitle  title={"500"} month={true} />
                      <CheckTitle  title={"604"} month={true} />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8" >
                <h1 className="text-[24px] font-bold leading-[25px]  " >Page Structure 1</h1>

                <div className="mt-5" >
                <CheckTitle  title={"Search-friendly URLs"} month={true} />
                <CheckTitle  title={"Complete and relevate title tags"} month={true} />
                <CheckTitle  title={"Unique, relevant meta descriptions"} month={true} />
                <CheckTitle  title={"Number of outbound links on the page"} month={true} />
                </div>
                </div>

                <div className="mt-8" >
                <h1 className="text-[24px] font-bold leading-[25px]  " >Page Structure 2</h1>

                <div className="mt-5" >
                <CheckTitle  title={"Review of internal link structure"} month={true} />
                <CheckTitle  title={"Image names"} month={true} />
                <CheckTitle  title={"Image sizes"} month={true} />
                <CheckTitle  title={"Semantic HTML review"} month={true} />
                </div>
                </div>


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

export default SeoModuleThree;

const TitleSubTitle = ({ title, subTitle }) => {
  return (
    <div className="my-6">
      <h3 className="text-[24px] leading-[25px] font-semibold  ">{title}</h3>

      <h5 className="text-[17px] leading-[16px] mt-2 ">{subTitle}</h5>
    </div>
  );
};
