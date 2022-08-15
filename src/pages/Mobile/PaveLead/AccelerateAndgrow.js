import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";


function AccelerateAndgrow() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className="mb-[100px] px-[6%] ">
         

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

export default AccelerateAndgrow;

const ClientTitle=({title})=>{
return(
  <div className="flex items-center ">
    <div className="rounded-full w-[6.5px] h-[6.5px] bg-[#FD4C3C] mr-1  " >

    </div>
    <h3 style={{color:title==='Challenges'?'#FD4C3C':''}} className="text-[18px] font-bold leading-[15px] " >{title}</h3>
  </div>
)
}
