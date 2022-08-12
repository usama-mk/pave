import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import SeoPricingTable from "../../../components/SeoPricingTable";


function SEOPricing() {

  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className="text-left px-[8%] mb-[100px] " >
        <div className=" flex items-start justify-start mb-5">
          <img
            src={blackLuArrow}
            className="object-contain  ml-1 mt-2 "
            alt=""
          />

          <h1 className=" text-left ml-[4%] text-[28px] font-bold leading-[35px] ">
           SEO Pricing
          </h1>
        </div>

        <SeoPricingTable title="Starter" monthlyPkgs={['$750', '$1000', '$1350', '$1600']} keywords={['8-10', '12-15', '18-25', '25-30']} guestPosts={['X', 'X', 'X', 'X']} gapAnalysis={['Quarterly', 'Quarterly', 'Quarterly', 'Quarterly']} cro={['Yes', 'Yes', 'Yes', 'yes']} halfYearly={['$4,500', '$5,600', '$7,550', '$8,800']} yearly={['$4,500', '$5,600', '$7,550', '$8,800']}  />

        <SeoPricingTable title="Visibility" monthlyPkgs={['$2,250', '$3,600', '$4,400']} keywords={['40-50', '60-80', '80-100']} guestPosts={['5', '8', '10']} gapAnalysis={['Bi-monthly', 'Bi-monthly', 'Bi-monthly']} cro={['Yes', 'Yes', 'Yes']} halfYearly={['$1,200', '$1,850', '$24,000']} yearly={['$22,000', '$33,500', '$43,000']}  />

        <SeoPricingTable title="Performance" monthlyPkgs={['$4,900', '$6,000', '$8,000']} keywords={['100-120', '120-140', '150-160']} guestPosts={['12', '15', '20']} gapAnalysis={['Monthly', 'Monthly', 'Monthly']} cro={['Yes', 'Yes', 'Yes']} halfYearly={['$26,500', '$31,500', '$42,000']} yearly={['$47,000', '$54,500', '$76,000']}  />

        <SeoPricingTable title="Booster" monthlyPkgs={['$10,500', '$14,000', '$17,500']} keywords={['200', '200+', '300+']} guestPosts={['25 Guest Posts', '30 + 2-3 Edu Links', '30-40 + 3-4 Edu']} gapAnalysis={['Monthly', 'Monthly', 'Monthly / Bi-Weekly']} cro={['Yes', 'Yes', 'Yes']} halfYearly={['$55,000', '$76,000', '$89,000']} yearly={['$93,000', '$128,500', '$165,000']}  />
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

export default SEOPricing;
