import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import goals from "../../../assets/images/goals.png";
import ServiceItem from "../../../components/ServiceItem";
import { useNavigate } from "react-router-dom";

function SeoCaseStudies() {
    const navigate = useNavigate();
    const handleServiceClick = (address) => {
      navigate(`/${address}`);
    };
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
             Case Studies
            </h1>
           <h1 className="text-[16px] leqading-[27px] mt-5 " >
           Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

           </h1>
           <button className="rounded-2xl bg-[#FEB92B] text-black text-[12px] font-bold leading-[21px] flex justify-start py-2 px-6 cursor-pointer mt-5 " >Start My Project</button>

        <div className="mt-10" >

        <ServiceItem
              marginLNo={true}
              title={`Case studies Client #1`}
              selected={true}
              handleServiceClick={()=> handleServiceClick("seoclientone")}
            />

            <ServiceItem 
             marginLNo={true}
             title={`Case studies Client #2`}  selected={true}
             handleServiceClick={()=> handleServiceClick("seoclienttwo")}
             />
            <ServiceItem marginLNo={true}   title={`Case studies Client #3`} selected={true} 
             handleServiceClick={()=> handleServiceClick("seoclientthree")}
            />
            <ServiceItem marginLNo={true} title={`Case studies Client #4`}selected={true} 
             handleServiceClick={()=> handleServiceClick("seoclientfour")}
            />
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

export default SeoCaseStudies;


