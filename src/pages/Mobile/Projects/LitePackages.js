import React from "react";
import LetsTalkModal from "../../../components/LetsTalkModal";
import LitePackageCard from "../../../components/LitePackageCard";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import lpOne from "../../../assets/images/lpOne.png";
import lpTwo from "../../../assets/images/lpTwo.png";
import lpThree from "../../../assets/images/lpThree.png";
import lpFour from "../../../assets/images/lpFour.png";
import lpFive from "../../../assets/images/lpFive.png";
import lpSix from "../../../assets/images/lpSix.png";
import lpSeven from "../../../assets/images/lpSeven.png";
import lpEight from "../../../assets/images/lpEight.png";
import lpNine from "../../../assets/images/lpNine.png";
import lpTen from "../../../assets/images/lpTen.png";
import lpEleven from "../../../assets/images/lpEleven.png";
import lpTwelve from "../../../assets/images/lpTwelve.png";

function LitePackages() {
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
        <h1 className="text-[23px] font-bold leading-[35px] mt-2 " >Types Of Industries We CATER</h1>

        <div className='grid grid-cols-2 gap-2 gap-y-4 overflow-auto mb-[100px] align-middle justify-center mt-8' >
<LitePackageCard name={`Restaurants/Cafes`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpOne} />
<LitePackageCard name={`Physical Store`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpTwo} />
<LitePackageCard name={`Jr. Ecommerce`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpThree} />
<LitePackageCard name={`Gyms`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpFour} />
<LitePackageCard name={`Plants`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpFive} />
<LitePackageCard name={`Malls`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpSix} />
<LitePackageCard name={`Startups`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpSeven} />
<LitePackageCard name={`Real Estate`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpEight} />
<LitePackageCard name={`Fashion/
Accessories`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpNine} />
<LitePackageCard name={`Education`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpTen} />
<LitePackageCard name={`Events /
Catering`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpEleven} />
<LitePackageCard name={`Pet Supplies
/Services`} subHeading={`Lorem ipsum dolor sit amet,
consectetur adipiscing elit`} img={lpTwelve} />
</div>
        
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

export default LitePackages;
