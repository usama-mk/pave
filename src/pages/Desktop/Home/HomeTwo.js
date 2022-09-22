import React, { useEffect, useRef, useState } from "react";
import MobNavBar from "../../../components/MobNavBar";

import PlayVideoButton from "../../../components/PlayVideoButton";
import WorkButton from "../../../components/WorkButton";
import A1 from "../../../assets/images/DeskA1.png";
import A2 from "../../../assets/images/DeskA2.png";
import A3 from "../../../assets/images/DeskA3.png";
import A4 from "../../../assets/images/DeskA4.png";
import A5 from "../../../assets/images/DeskA5.png";
import A6 from "../../../assets/images/DeskA6.png";
import A7 from "../../../assets/images/DeskA7.png";
import A8 from "../../../assets/images/DeskA8.png";
import A9 from "../../../assets/images/DeskA9.png";
import { useNavigate } from "react-router-dom";
import MobHeader from "../../../components/MobHeader";
import DesktopHeader from "../../../components/DesktopHeader";

function MobHomeTwo({ homeTwoDisplay }) {
  const [showHeading, setShowHeading] = useState(true);
  const [isHomeTwo, setIsHomeTwo] = useState(false);
  const [showSubHeading, setSubShowHeading] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
  const [showNavBar, setShowNavBar] = useState(true);

  const ref = useRef(null);

  if (homeTwoDisplay) {
    return (
      <div
        ref={ref}
        autoFocus
        onClick={() => {}}
        className=" w-[100vw] overflow-x-clip overflow-y-clip bg-[#410D7F] snap-start  "
      >
        <div className=" bg-[#410D7F] cssanimation  fadeInBottom` ">
          <div className="homeTop relative z-10 top-0 w-[100vw]  flex justify-start ">
            <DesktopHeader purpleTheme={true} />
          </div>
          <div
            className={` ${
              isHomeTwo ? "animate__animated animate__fadeOutUpBig " : ""
            } flex justify-center cssanimation  fadeInBottom mb-auto `}
          >
            <div className="w-[50%] flex justify-center ">
              <img
                src={A1}
                className="object-contain mt-[-6rem] w-[287px] "
                alt=""
              />
              <img
                src={A2}
                className="object-contain mx-16  w-[287px] "
                alt=""
              />
              <img
                src={A3}
                className="object-contain mt-[-8rem] w-[287px] "
                alt=""
              />
            </div>
          </div>
          {/* body */}
          <div className="flex justify-between " >

          <img
                src={A4}
                className="object-contain mt-[-8rem] ml-[-6rem] w-[287px] "
                alt=""
              />

          <div className=" flex flex-col items-center justify-center h-[40vh] ">
            <h1
              className={`
           ${
             showHeading && !isHomeTwo
               ? "visible cssanimation  fadeInBottom"
               : isHomeTwo
               ? "visible animate__animated animate__fadeOut"
               : "invisible"
           }
           text-[70px] font-bold leading-[66px] text-[#410D7F] soText `}
            >
              A-Z Service Offerings
            </h1>
            <h4
              className={`
           ${
             showSubHeading && !isHomeTwo
               ? "visible cssanimation  fadeInBottom"
               : isHomeTwo
               ? "visible animate__animated animate__fadeOut"
               : "invisible"
           }
           text-[18px] mt-5 font-medium leading-[25px] text-white `}
            >
              Providing all aspects of creative, digital, and marketing services
              in one agency
            </h4>

            {/* btns start */}
            <div
              className={`
${
  showButtons && !isHomeTwo
    ? "visible cssanimation  fadeInBottom"
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

          <img
                src={A5}
                className="object-contain mr-[-6rem] mt-[-12rem] w-[287px] "
                alt=""
              />
          </div>

          <div
            style={{}}
            className={`  ${
              isHomeTwo ? " animate__fadeOutDownBig " : ""
            } flex justify-center cssanimation  fadeInBottom  `}
          >
            <div className="w-[80%] flex justify-center " >
            <img
              src={A6}
              className="object-contain  ml-[-15px] w-[287px] "
              alt=""
            />
            <img
              src={A7}
              className="object-contain mx-10 mt-[-30px] w-[287px] "
              alt=""
            />
            <img
              src={A8}
              className="object-contain mr-10  w-[287px] "
              alt=""
            />

<img
              src={A9}
              className="object-contain    w-[287px] "
              alt=""
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobHomeTwo;
