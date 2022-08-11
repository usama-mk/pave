import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import seoProposalMain from "../../../assets/images/seo-proposal-main.png";
import CheckTitle from "../../../components/CheckTitle";
import MonthSeo from "../../../components/MonthSeo";
import monthOneImg from "../../../assets/images/monthOneImg.png";
import { useState } from "react";

function MMCompaign() {
  const [number, setNumber] = useState(1);
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
              Month to Month Compaign Activities
            </h1>

            <div className="mt-5">
              {number === 1 ? (
                <MonthSeo
                  setNumber={setNumber}
                  monthImage={monthOneImg}
                  number={number}
                  p1={[`(40 Hours Link Building) + 15 Free Hours for Setup`]}
                  onsiteTasks={[
                    `Competition Research - 10 Hours
    `,
                    `Keyword Research & Selection - 10 Hours`,
                    `Keyword Mapping Sheet - 1 Hour`,
                    `URL Optimization - 2 Hours`,
                  ]}
                  offSiteTasks={[
                    `Link Building - 30-40 Links 30 Hours`,
                    `Weekly Reporting - 2 Hours`,
                    `Keyword Mapping Sheet - 1 Hour`,
                  ]}
                  expectations={[`No improvement in Keyword Rankings`]}
                />
              ) : number === 2 ? (
                <MonthSeo
                  setNumber={setNumber}
                  monthImage={monthOneImg}
                  number={number}
                  p1={[`(40 Hours Link Building) + 20 Free Hours of Onsite`]}
                  onsiteTasks={[
                    `Meta Tags Creation & Implementation 5 Hours`,
                    `Content Optimization - 10-20 Hours`,
                    `New Landing Page Creation - If Required 10 HR/Page`,
                    `Schema Markup Implementation - 5 Hours`,
                  ]}
                  offSiteTasks={[
                    `Link Building - 30-40 Links 30 Hours`,
                    `Weekly Reporting - 2 Hours`,
                  ]}
                  expectations={[`10% Keywords Will Start Ranking`]}
                />
              ) : number === 3 ? (
                <MonthSeo
                  setNumber={setNumber}
                  monthImage={monthOneImg}
                  number={number}
                  p1={[
                    `(40 Hours Link Building) + 20 Free Hours Online`,
                    `+ 10 Hours CRO`,
                  ]}
                  onsiteTasks={[
                    `Mobile Optimisation
    `,
                    `Site Speed Optimization`,
                    `Website Architecture Enhancement`,
                    `Conversion Rate Optimisation`,
                  ]}
                  offSiteTasks={[
                    `Link Building - 30-40 Links 30 Hours`,
                    `Weekly Reporting - 2 Hours`,
                  ]}
                  expectations={[`20% Keywords Will Start Ranking`]}
                />
              ) : number === 4 ? (
                <MonthSeo
                  setNumber={setNumber}
                  monthImage={monthOneImg}
                  number={number}
                  p1={[
                    `(40 Hours Link Building) + 10 Free Hours of Analytics`,
                    `+ 10 Hours CRO`,
                  ]}
                  onsiteTasks={[
                    `1st Campaign Performance Analysis`,
                    `Add/replace keywords based on performance`,
                    `Optimise Blog for Internal Linking `,
                    `Google My Business Optimization`,
                  ]}
                  offSiteTasks={[
                    `Link Building - 30-40 Links 30 Hours`,
                    `Weekly Reporting - 2 Hours`
                  ]}
                  expectations={[`70% Keywords will start ranking`]}
                />
              ) : number === 5 ? (
                <MonthSeo
                  setNumber={setNumber}
                  monthImage={monthOneImg}
                  number={number}
                  p1={[`((40 Hours Link Building) + 10 Free Hours Semrush `, `Audit`]}
                  onsiteTasks={[
                    `SEMRUSH Audit & Web Fix`
                  ]}
                  offSiteTasks={[
                    `Link Building - 30-40 Links 30 Hours`,
                    `Weekly Reporting - 2 Hours`
                  ]}
                  expectations={[`70% Keywords will start ranking`]}
                />
              ) : number === 6 ? (
                <MonthSeo
                  setNumber={setNumber}
                  monthImage={monthOneImg}
                  number={number}
                  p1={[`(40 Hours Link Building) + 10 Free Hours Moz Audit`]}
                  onsiteTasks={[
                   `Mom Audit & Web Fixes`
                  ]}
                  offSiteTasks={[
                    `Link Building - 30-40 Links 30 Hours`,
                    `Weekly Reporting - 2 Hours`
                  ]}
                  expectations={[`70% Keywords will start ranking`]}
                />
              ) : (
                <MonthSeo
                  setNumber={setNumber}
                  monthImage={monthOneImg}
                  number={number}
                  p1={`(40 Hours Link Building) + 15 Free Hours for Setup`}
                  onsiteTasks={[
                    `Competition Research - 10 Hours
    `,
                    `Keyword Research & Selection - 10 Hours`,
                    `Keyword Mapping Sheet - 1 Hour`,
                    `URL Optimization - 2 Hours`,
                  ]}
                  offSiteTasks={[
                    `Link Building - 30-40 Links 30 Hours`,
                    `Weekly Reporting - 2 Hours`,
                    `Keyword Mapping Sheet - 1 Hour`,
                  ]}
                  expectations={[`No improvement in Keyword Rankings`]}
                />
              )}
              {/* <CheckTitle title={`Website and  Competive Analysis`} /> */}
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

export default MMCompaign;
