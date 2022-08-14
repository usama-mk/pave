import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import googleUpdate from "../../../assets/images/googleUpdate.png";

function SeoModuleSix() {
 
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
            Module 6: <br /> Conversion Rate Optimization
            </h1>
            <img src={googleUpdate} className="object-contain w-[309px] mt-4" alt="" />

           <div className="mt-5 " >
           <h5 className="text-[17px] font-medium leading-[22px]  " >Itʼs much easier to double your business 
by doublingyour conversion rate than by 
doubling your traffic.  <span className="text-[13] font-light italic ml-16 leading-[16px]" >Jeff Eisenberg</span></h5>

<h5 className="text-[15px] leading-[25px] mt-8" >When you start thinking about conversion rate optimization, its tempting to fiddle around with 
buttons and forms and other low-in-the-funnel design elements that might make or break the sale.  <br />

But remember that part of optmizing conversions is getting the right visitors to your site in the first 
place by having proper landing page and using the best techniques.
</h5>

<h5 className="text-[15px] leading-[25px] mt-5">
When you start thinking about conversion rate optimization. Itʼs tempting to fiddle around with
buttons and forms and other low-in-the-funnel design elements that might make or break the sale.
But remember that part of optimizing conversions is getting the right visitors to your site in the first
place by having proper landing page and using the best techniques.
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

export default SeoModuleSix;

const OnSiteItem=({title})=>{
    return(
        <h5 className="text-[17px] leading-[25px] mb-1 " >{title}</h5>
    )
}