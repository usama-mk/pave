import React from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import arrowBlack from "../../../assets/images/arrowBlack.png";
import arrowYellow from "../../../assets/images/arrowYellow.png";
import bl from "../../../assets/images/brands-list.png";
import p1 from "../../../assets/images/p1.png";
import p2 from "../../../assets/images/p2.png";
import p3 from "../../../assets/images/p3.png";
import p4 from "../../../assets/images/p4.png";
import p5 from "../../../assets/images/p5.png";
import p6 from "../../../assets/images/p6.png";
import WorkButton from "../../../components/WorkButton";
import PlayVideoButton from "../../../components/PlayVideoButton";
import RecentProjects from "../../../components/RecentProjects";

function MainPage() {
 
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className="mb-[100px] px-[6%] ">
        <h1 className="text-left text-[25px] font-bold leading-[35px]  ">
          Get more qualified B2B sales leads. Book a free consultation!
        </h1>
          <div className="mt-5 flex" >
          <WorkButton
            handleWorkWithUs={()=>{}}
            textColor={"black"}
            bg={"white"}
            text={"Work With Us"}
          />
          <PlayVideoButton textColor={"white"} bg={"#363636"} />
          </div>

          <h1 className="text-[23px] font-bold leading-[35px] text-left my-5 " >
            Recent on going projects:
          </h1>
          {/* recent projects */}
          <RecentProjects projects={[p1, p2, p3, p4, p5, p6]} />

          <h1 className="text-[23px] font-bold leading-[35px] text-left my-5" >Globally, our team has worked with:</h1>
          <div className="w-[320px] overflow-x-scroll " >
          <img src={bl} className='w-[2592px]'  alt="" />

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

export default MainPage;
