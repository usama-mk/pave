import React, { useEffect, useState } from "react";
import PlayVideoButton from "../../../components/PlayVideoButton";
import homeThreeMovies from "../../../assets/images/homeThreeMovies1.png";
// import homeThreeMovies from "../../../assets/images/homeThreeMovies.png";
import straight_arrow from "../../../assets/images/straight_arrow.png";
import rings from "../../../assets/images/rings.png";
import bottomRings from "../../../assets/images/bottomRings.png";
import WorkButton from "../../../components/WorkButton";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "../../../components/DesktopHeader";

function MobHomeThree({ homeThreeDisplay }) {
  const [showHeading, setShowHeading] = useState(true);
  const [isHomeTwo, setIsHomeTwo] = useState(false);
  const [showSubHeading, setSubShowHeading] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
  const [showNavBar, setShowNavBar] = useState(true);
  const navigate = useNavigate();

  if (true) {
    return (
      <div
        onClick={() => {}}
        className=" flex flex-col bg-[#FD4C3C] w-[100vw]    overflow-x-clip overflow-y-clip sec  snap-center "
      >
        <div className="homeTop   relative z-10 top-0  w-[100vw]  flex justify-start ">
          <DesktopHeader redTheme={true} />
        </div>
        <div className="bg-[#FD4C3C]  flex flex-col justify-between  cssanimation  fadeInBottom">
          <div
            className={`
      

       flex justify-center items-center
       break-words  `}
          >
            <div className="flex justify-between w-[50%]  ">
              <img
                src={rings}
                className={`
        ${
          showHeading && !isHomeTwo
            ? "visible cssanimation   fadeInBottom"
            : "invisible"
        }
       object-contain mt-28  mr-24  `}
                alt=""
              />

              <img
                src={homeThreeMovies}
                className={`
 ${
   showButtons && !isHomeTwo
     ? `visible cssanimation   fadeInBottom`
     : "invisible"
 }
object-cover mt-[-30rem] max-h-[45rem]    `}
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-end relative top-9  ">
            <h1
              className={`
           ${
             showHeading && !isHomeTwo
               ? "visible cssanimation  fadeInBottom  "
               : isHomeTwo
               ? "visible  fadeOut"
               : "invisible"
           }
           text-[100px] font-bold leading-[100px] text-[white] text-center `}
            >
              Performance-
            </h1>
            <h1
              className={`
            ${
              showHeading && !isHomeTwo
                ? "visible cssanimation   fadeInBottom"
                : isHomeTwo
                ? "visible "
                : "invisible"
            }
           text-[100px] font-bold leading-[100px] text-[white] `}
            >
              Based
            </h1>
          </div>
        </div>

        <div className=" bg-[#410D7F] ">
          <div className=" flex flex-col items-center justify-center ">
            <h4
              className={`
            ${
              showSubHeading && !isHomeTwo
                ? "visible cssanimation   fadeInBottom"
                : isHomeTwo
                ? "visible  "
                : "invisible"
            }
           text-[18px] mt-10 font-medium leading-[27px] text-white  `}
            >
              Marketing agency that focuses on your ROI and metrics that matter
              for your brand & business
            </h4>

            {/* btns start */}
            <div
              className={`
${
  showButtons && !isHomeTwo
    ? "visible cssanimation  fadeInBottom"
    : isHomeTwo
    ? "visible "
    : "invisible"
}
homeMidButtons mt-5 flex justify-center`}
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
            <div className="mouseCont flex justify-center my-3">
              <img
                src={straight_arrow}
                className="object-contain m-5 "
                alt=""
              />
            </div>
            {/* bottom image */}
            <div>
              <div className="flex">
                <img
                  src={homeThreeMovies}
                  className={`
       ${
         showSubHeading && !isHomeTwo
           ? "visible cssanimation  fadeInBottom"
           : "invisible"
       }
      object-cover ml-[-40%] mt-[-50px] `}
                  alt=""
                />
                <img
                  src={bottomRings}
                  className={`
      
      object-contain w-[277px] relative left-[20%] top-[-8rem]  `}
                  alt=""
                />
              </div>
            </div>
            {/* bottom image end */}
          </div>
        </div>
      </div>
    );
  }
}

export default MobHomeThree;
