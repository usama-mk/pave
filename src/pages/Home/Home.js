import React from "react";
import mouse from "../../assets/images/mouse.png";
import homeBottomBG from "../../assets/images/homeBottomBG.png";
import homeTopBG from "../../assets/images/homeTopBG.png";
import { useDispatch, useSelector } from "react-redux";
import MobNavBar from "../../components/MobNavBar";
import MobHeader from "../../components/MobHeader";
import WorkButton from "../../components/WorkButton";
import PlayVideoButton from "../../components/PlayVideoButton";
import { useNavigate } from "react-router-dom";
import MobHomeTwo from "./MobHomeTwo";
import MobHomeThree from "./MobHomeThree";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleWorkWithUs = () => {
    navigate("/a-z");
  };

  return (
    <div className=" flex flex-col items-center max-h-[100vh] sec ">
        <img className="w-[336px] h-[170px]  " src={homeTopBG} alt="" />
      {/* top */}
      {/*  homeTopBG */}
      <div className="homeTop absolute top-0 h-[356px] w-[100vw]  flex justify-center ">
        {/* header start */}
        <MobHeader />
        {/* header ends */}
      </div>
      {/* top ends */}

      {/* award win start */}
      <div className="homeMid">
        <div className="awardCont mt-3">
          <h1 className=" font-bold text-center text-[85px] leading-[65px]">
            Award <br /> Winning
          </h1>
          <h5 className="text-lg text-center mt-6 leading-[20px] ">
            Creative agency that provides{" "}
            <span className="font-bold">a full</span>
            <br /> range of marketing services{" "}
          </h5>
        </div>
        {/* buttons */}
        <div className="homeMidButtons mt-3 flex justify-center">
          {/* btn 1 */}
          <WorkButton
            handleWorkWithUs={handleWorkWithUs}
            textColor={"black"}
            bg={"white"}
            text={"Work With Us"}
          />
          {/* btn1 ends */}

          {/* btn 2 */}
          <PlayVideoButton textColor={"white"} bg={"#363636"} />
          {/* btn 2  ends */}
        </div>
      </div>
      {/* award wins end */}

      {/* mouse cont */}
      <div className="mouseCont flex justify-center my-3">
        <img src={mouse} width={20} className="object-contain" alt="" />
      </div>
      {/* mouse cont ends */}
<img  className=' w-[336px] h-full' src={homeBottomBG} alt="" />
      {/* bottom start */}
      {/* homeBottomBG */}
      <div className="homeBottom  w-[321px] h-[348px] ">
        {/* bottom nav */}
        <MobNavBar />
        {/* bottom nav ends */}
      </div>
      {/* bottom ends */}
      <MobHomeTwo />
      <MobHomeThree/>
    </div>
  );
}

export default Home;
