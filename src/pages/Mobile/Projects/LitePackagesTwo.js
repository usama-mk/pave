import React from "react";
import LetsTalkModal from "../../../components/LetsTalkModal";
import LitePackageCard from "../../../components/LitePackageCard";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import lpTwoOne from "../../../assets/images/lpTwoOne.png";
import lpTwoTwo from "../../../assets/images/lpTwoTwo.png";
import lpTwoThree from "../../../assets/images/lpTwoThree.png";
import WorkButton from "../../../components/WorkButton";
import PlayVideoButton from "../../../components/PlayVideoButton";
import LitePackageTwoCard from "../../../components/LitePackageTwoCard";

function LitePackagesTwo() {
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className="mb-[100px] px-[6%] text-left ">
        <h1 className="text-[30px] font-bold leading-[35px]  " >PAVE Lite Packages</h1>
        
        <div className="flex mt-5 mb-10" >
        <WorkButton
            handleWorkWithUs={()=>{}}
            textColor={"black"}
            bg={"white"}
            text={"Work With Us"}
          />
          {/* btn1 ends */}

          {/* btn 2 */}
          <PlayVideoButton textColor={"white"} bg={"#363636"} />
        </div>

        <LitePackageTwoCard img={lpTwoOne} title={`Grow`} price={`$00`} desc={`Basic Graphics Design Support 
Local & Online Traffic 
BoostFacebook Ads Campaigns
Dedicated Account Manager`} />

<LitePackageTwoCard img={lpTwoTwo} title={`Guru`} price={`$000`} desc={`Basic Graphics Design Support 
Local & Online Traffic 
BoostFacebook Ads Campaigns
Dedicated Account Manager`} />

<LitePackageTwoCard img={lpTwoThree} title={`Pro`} price={`$0000`} desc={`Basic Graphics Design Support 
Local & Online Traffic 
BoostFacebook Ads Campaigns
Dedicated Account Manager`} />
        
      </div>

      <LetsTalkModal />
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

export default LitePackagesTwo;
