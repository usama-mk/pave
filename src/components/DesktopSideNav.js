import React from "react";
import burgerButton from "../assets/images/burgerButton.png";
import mobile_logo from "../assets/images/mobile_logo.png";
import mobile_logo_white from "../assets/images/mobile_logo_white.png";

function DesktopSideNav({ name, purpleTheme, redTheme }) {
  return (
    <div className="border-2 border-[#707070] mr-10 h-screen flex flex-col items-stretch ">
      <div className="border-b-2 min-h-[105px] border-[#707070] flex justify-center items-center ">
        <img
          src={burgerButton}
          className="object-contain w-[2.5rem] cursor-pointer "
          alt=""
        />
      </div>

      <div className="border-b-2 border-[#707070] flex flex-1 justify-center items-center   ">
        <h2 className="rotate-90 ">{name}</h2>
      </div>

      <div className="logoCont flex min-h-[105px] justify-center items-center ">
        {purpleTheme || redTheme ? (
          <img
            src={mobile_logo_white}
            className="object-contain w-[52px] h-[53px] "
            alt=""
          />
        ) : (
          <img
            src={mobile_logo}
            className="object-contain w-[52px] h-[53px] "
            alt=""
          />
        )}
        <h3
          style={{ color: purpleTheme || redTheme ? "white" : "black" }}
          className="uppercase font-bold text-left text-sm mt-[-5px] ml-[10px] leading-4 "
        >
          pave <br />
          creative <br />
          marketing <br />
          agency{" "}
        </h3>
      </div>
    </div>
  );
}

export default DesktopSideNav;
