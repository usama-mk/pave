import React from "react";
import { useDispatch } from "react-redux";
import mobile_logo from "../assets/images/mobile_logo.png";
import mobile_logo_white from "../assets/images/mobile_logo_white.png";
import servicesHeader from "../assets/images/servicesHeader.png";
import { openLeadPopUp } from "../store/actions/leadPopupACtions";

function MobHeader({ purpleTheme, redTheme, buttonTitle, yellowTheme }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(openLeadPopUp())}
      style={{
        backgroundColor: purpleTheme
          ? `#410D7F`
          : redTheme
          ? "#FD4C3C"
          : yellowTheme
          ? "#FEB52B"
          : "",
        opacity: purpleTheme || redTheme || yellowTheme ? 1 : "",
      }}
      className="topHeader pt-[20px] pb-[10px] pl-[6%] pr-[6%] flex justify-between w-[100%] bg-[#EFEFEF] opacity-80 h-fit"
    >
      <div className="logoCont flex">
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
          style={{ color: purpleTheme || redTheme ? "white" : "" }}
          className="uppercase font-bold text-left text-sm mt-[-5px] ml-[10px] leading-4 "
        >
          pave <br />
          creative <br />
          marketing <br />
          agency{" "}
        </h3>
      </div>
      {purpleTheme ? (
        // <img src={servicesHeader} className='object-contain' alt="" />
        <div
          style={{
            backgroundColor: purpleTheme
              ? "white"
              : yellowTheme
              ? "#FEB52B"
              : "white",
            color: purpleTheme ? "black" : "",
            borderColor: purpleTheme ? "black" : "",
          }}
          className="letsTalk bg-[white] px-4 py-3 h-fit border-2 border-black rounded-[10px] text-sm font-bold text-center flex items-center justify-center  "
        >
          <span> {buttonTitle ? buttonTitle : "Lets Talk"}</span>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: purpleTheme
              ? purpleTheme
              : yellowTheme
              ? "#FEB52B"
              : "white",
            color: purpleTheme ? "white" : "",
            borderColor: purpleTheme ? "white" : "",
          }}
          className="letsTalk bg-[white] px-4 py-3 h-fit border-2 border-black rounded-[10px] text-sm font-bold text-center flex items-center justify-center  "
        >
          <span> {buttonTitle ? buttonTitle : "Lets Talk"}</span>
        </div>
      )}
    </div>
  );
}

export default MobHeader;
