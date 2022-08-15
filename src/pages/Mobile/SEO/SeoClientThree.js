import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import blackLuArrow from "../../../assets/images/black-lu-arrow.png";
import clientThree from "../../../assets/images/clientThree.png";

function SeoClientThree() {
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
            Client #3
           </h1>
          </div>
        </div>
       <div className="pl-[6%]" >
       <img src={clientThree} className="object-contain w-[369px] mt-4" alt="" />

      <div className="flex justify-between my-5 " >
        <ClientTitle title={'Challenges'} />
        <ClientTitle title={'Solution'} />
        <ClientTitle title={'results'} />
      </div>

      <h5 className="text-[14px] leading-[25px] text-left mb-5 " >Existing domain authority of the website was quite low in the beginning of the campaign. 
</h5>

      <h5 className="text-[14px] leading-[25px] text-left mb-5 " >Keywords chosen for the campaign have decent search volume and medium competition. 

</h5>

      <h5 className="text-[14px] leading-[25px] text-left mb-5 " >We had to compete with government and educational websites in SERP as these were among our top competitors. Website had a lot of onsite bugs which needed to be 
analyzed and fixed for improving rankings in SERP.

</h5>

<h5 className="text-[14px] leading-[25px] text-left mb-5 " >Bounce rate of the website was also high due to front end of site. <br />
Website had a simple informational layout rather than one which can get conversions.
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

export default SeoClientThree;

const ClientTitle=({title})=>{
return(
  <div className="flex items-center ">
    <div className="rounded-full w-[6.5px] h-[6.5px] bg-[#FD4C3C] mr-1  " >

    </div>
    <h3 style={{color:title==='Challenges'?'#FD4C3C':''}} className="text-[18px] font-bold leading-[15px] " >{title}</h3>
  </div>
)
}
