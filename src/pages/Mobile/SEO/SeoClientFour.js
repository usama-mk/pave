import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import clientFour from "../../../assets/images/clientFour.png";

function SeoClientFour() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
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
              Case Studies
            </h1>
           <h1 className="text-[20px] font-medium leading-[25px] mt-2  " >
            Client #4
           </h1>
          </div>
        </div>
       <div className="pl-[6%]" >
       <img src={clientFour} className="object-contain w-[369px] mt-4" alt="" />

      <div className="flex justify-between my-5 " >
        <ClientTitle title={'Challenges'} />
        <ClientTitle title={'Solution'} />
        <ClientTitle title={'results'} />
      </div>

      <h5 className="text-[14px] leading-[25px] text-left mb-5 " >Since the website was new, it had no organic rankings. The webpages of the site had very limited onpage content with no CTAs implemented on it. <br />
      There was no internal linking among the internal pages of the website and thus information hierarchy was missing across the website.  <br />
There were certain onsite issues like website page speed and load time was not optimised.
 </h5>

       

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

export default SeoClientFour;

const ClientTitle=({title})=>{
return(
  <div className="flex items-center ">
    <div className="rounded-full w-[6.5px] h-[6.5px] bg-[#FD4C3C] mr-1  " >

    </div>
    <h3 style={{color:title==='Challenges'?'#FD4C3C':''}} className="text-[18px] font-bold leading-[15px] " >{title}</h3>
  </div>
)
}
