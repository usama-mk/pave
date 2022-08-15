import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import clientTwo from "../../../assets/images/clientTwo.png";

function SeoClientTwo() {
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
            Client #2
           </h1>
          </div>
        </div>
       <div className="pl-[6%]" >
       <img src={clientTwo} className="object-contain w-[369px] mt-4" alt="" />

      <div className="flex justify-between my-5 " >
        <ClientTitle title={'Challenges'} />
        <ClientTitle title={'Solution'} />
        <ClientTitle title={'results'} />
      </div>

      <h5 className="text-[14px] leading-[25px] text-left mb-5 " >The website was brand new, so it had no significant Domain Authority and Trust Flow. As they were offering niche services catering to specific fields, the broad industry keywords had to be smartly replaced with highly relevant keywords with medium competition. 
 </h5>

      <h5 className="text-[14px] leading-[25px] text-left mb-5 " >The site when we took on this project drove zero traffic and had no rankings at all.
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

export default SeoClientTwo;

const ClientTitle=({title})=>{
return(
  <div className="flex items-center ">
    <div className="rounded-full w-[6.5px] h-[6.5px] bg-[#FD4C3C] mr-1  " >

    </div>
    <h3 style={{color:title==='Challenges'?'#FD4C3C':''}} className="text-[18px] font-bold leading-[15px] " >{title}</h3>
  </div>
)
}
