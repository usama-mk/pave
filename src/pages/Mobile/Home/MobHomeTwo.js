import React, { useEffect, useRef, useState } from "react";
import MobNavBar from "../../../components/MobNavBar";

import PlayVideoButton from "../../../components/PlayVideoButton";
import WorkButton from "../../../components/WorkButton";
import A1 from "../../../assets/images/A1.png";
import A2 from "../../../assets/images/A2.png";
import A3 from "../../../assets/images/A3.png";
import A4 from "../../../assets/images/A4.png";
import A5 from "../../../assets/images/A5.png";
import A6 from "../../../assets/images/A6.png";
import { useNavigate } from "react-router-dom";
import MobHeader from "../../../components/MobHeader";

function MobHomeTwo({homeTwoDisplay}) {
  const [showHeading, setShowHeading] = useState(false);
  const [isHomeTwo, setIsHomeTwo] = useState(false);
  const [showSubHeading, setSubShowHeading] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const navigate = useNavigate();

  const handleWorkWithUs = () => {
    navigate("/a-z");
  };


  const ref = useRef(null);


  useEffect(() => {
    setTimeout(() => {
      setShowNavBar(true);
    }, 1500);
    setTimeout(() => {
      setShowHeading(true);
      setShowNavBar(true);
    }, 1500);
    setTimeout(() => {
      setSubShowHeading(true);
    }, 2000);
    setTimeout(() => {
      setShowButtons(true);
    }, 2800);
  }, [homeTwoDisplay]);
  const handleOnHomeClick = (address) => {
    setIsHomeTwo(true);
    setTimeout(() => {
      navigate(`/${address}`);
    }, 2000);
  };
if(homeTwoDisplay){


  return (
    <div ref={ref} autoFocus    onClick={()=> handleOnHomeClick('/home3')} className="  w-[100vw] overflow-x-clip ">
      <div className=" bg-[#410D7F]">
        <div className="homeTop absolute top-0 z-10 h-[356px] w-[100vw]  flex justify-center ">
          <MobHeader />
        </div>
        <div className={` ${isHomeTwo ? "animate__animated animate__fadeOutUpBig " : ""} flex justify-center animate__animated animate__fadeInDownBig `}>
          <img src={A1} className="object-contain mt-16 ml-[-15px]" alt="" />
          <img src={A2} className="object-contain mx-10 mt-[-30px]" alt="" />
          <img src={A3} className="object-contain mt-16 mr-[-15px]" alt="" />
        </div>
        <div className=" flex flex-col items-center justify-center h-[40vh] ">
          <h1
            className={`
           ${
             showHeading && !isHomeTwo
               ? "visible animate__animated animate__fadeIn"
               : isHomeTwo
               ? "visible animate__animated animate__fadeOut"
               : "invisible"
           }
           text-[70px] font-bold leading-[66px] text-[#410D7F] soText `}
          >
            A-Z Service <br />
            Offerings
          </h1>
          <h4
            className={`
           ${
             showSubHeading && !isHomeTwo
               ? "visible animate__animated animate__fadeInUp"
               : isHomeTwo
               ? "visible animate__animated animate__fadeOut"
               : "invisible"
           }
           text-[18px] mt-5 font-medium leading-[25px] text-white `}
          >
            Providing all aspects of creative, digital, <br />
            and marketing services in one agency
          </h4>

          {/* btns start */}
          <div
            className={`
${
  showButtons && !isHomeTwo
    ? "visible animate__animated animate__fadeIn"
    : isHomeTwo
    ? "visible animate__animated animate__fadeOut"
    : "invisible"
}
homeMidButtons mt-5 flex justify-center `}
          >
            {/* btn 1 */}
            <WorkButton
              text={"Work With Us"}
              textColor={"#FEB92B"}
              bg={"#410D7F"}
            />
            {/* btn1 ends */}

            {/* btn 2 */}
            <PlayVideoButton textColor={"black"} bg={"#FEB92B"} />
            {/* btn 2  ends */}
          </div>
          {/* btns end */}
        </div>

        <div className={`  ${isHomeTwo ? "animate__animated animate__fadeOutDownBig " : ""} flex justify-center animate__animated animate__fadeInUpBig `}>
          <img src={A4} className="object-contain mt-16 ml-[-15px]" alt="" />
          <img src={A5} className="object-contain mx-10 mt-[-30px]" alt="" />
          <img src={A6} className="object-contain mt-16 mr-[-15px]" alt="" />
        </div>
        
      </div>

      
      <div
        className={`${
          showNavBar
            ? "visible animate__animated animate__fadeInUpBig"
            : "invisible"
        }     flex justify-center `}
      >
        
       
      <MobNavBar showNavBar={showNavBar} />
        
      </div>
    </div>
  );
      }
}

export default MobHomeTwo;
