import React, { useState } from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import arrowBlack from "../../../assets/images/arrowBlack.png";
import arrowYellow from "../../../assets/images/arrowYellow.png";
import arrowWhite from "../../../assets/images/arrowWhite.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  closeLeadPopUp,
  openLeadPopUp,
} from "../../../store/actions/leadPopupACtions";
import LetsTalkModal from "../../../components/LetsTalkModal";

function ContactUs() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phNum, setPhNum] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const [suggestion, setSuggestion] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalIsOpen = useSelector((state) => state.leadPopUp.open);
  let subtitle;
  function openModal() {
    dispatch(openLeadPopUp());
    // setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    dispatch(closeLeadPopUp());

    // setIsOpen(false);
  }

  const handleNewsLetter = () => {
    openModal();
  };

  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center  ">
        <MobHeader redTheme={true} />
      </div>
      <div className=" mt-[-10px] px-[6%] bg-[#FD4C3C] mb-[10px]  ">
        <form className="mt-12 mb-5">
          <Input
            label={`Name`}
            type="text"
            value={name}
            onChange={setName}
            placeholder={"Enter your full name here"}
          />
          <Input
            label={`Company Name`}
            type="text"
            value={companyName}
            onChange={setCompanyName}
            placeholder={"PAVE Creative Agency"}
          />
          <Input
            label={`Work Email`}
            type="email"
            value={workEmail}
            onChange={setWorkEmail}
            placeholder={"pave@company.com"}
          />

          <div className="mt-1.5 flex ">
            <FormButton
              text={`Submit`}
              bg={"#FEB52B"}
              textColor={"black"}
              p4={true}
            />
          </div>
        </form>
      </div>
      <div className="mt-[-10px] px-[6%] bg-[#410D7F] flex flex-col flex-1 pb-[100px]">
        <h1 className=" text-[27px] font-bold leading-[31px] text-white mt-10 ">
          We’d love to hear from you.
        </h1>

        <div className="text-left text-white px-10 mt-5">
          <h5 className="text-[14px] font-bold leading-[22px] ">CONTACT US</h5>
          <h5 className="text-[20px] leading-[30px] opacity-70 mt-2 ">
            support@clubpave.com <br />
            (714) 332-0019
          </h5>

          <h5 className="text-[14px] font-bold leading-[22px] mt-10 ">
            By Appointment Only
          </h5>
          <h5 className="text-[20px] leading-[30px] opacity-70 mt-2 ">
            1055 W 7th St, 33F, Los Angeles, CA 90017
            <br />
            471 W. Lambert Road, Suite 103, Brea, CA 92821
          </h5>
        </div>
      </div>
      <LetsTalkModal/>
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

export default ContactUs;

const Input = ({ label, value, onChange, placeholder, type }) => {
  return (
    <div className="text-left mb-8 leading-[10px]  ">
      <label className="text-[14px] text-white font-bold leading-[23px]  ">
        {label}
      </label>

      <div className="leading-[23px] ">
        <input
          className="bg-transparent leading-[30px] border-b-[1px] border-[white] placeholder:text-[19px] placeholder:leading-[22px] placeholder:text-white placeholder:opacity-[35%]  w-[100%] focus:outline-none mt-2 "
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

function FormButton({ textColor, bg, handleClick, p4, text, sendMessage }) {
  return (
    <div
      style={{ borderColor: p4 ? bg : textColor, backgroundColor: bg }}
      onClick={handleClick}
      className={`workWithUsBtn bg-[${bg}] px-3 py-2 h-fit border-2 border-[${textColor}] rounded-[10px] w-fit flex items-center mr-5 `}
    >
      <h5
        style={{ color: textColor }}
        className={`text-[${textColor}] text-sm font-bold text-center text-[13px] font-sans `}
      >
        {text}
      </h5>
      {sendMessage ? (
        <img
          src={arrowWhite}
          className=" object-contain ml-4 w-[12px] "
          alt=""
        />
      ) : (
        <img
          src={textColor === "black" ? arrowBlack : arrowYellow}
          className=" object-contain ml-4 w-[12px]"
          alt=""
        />
      )}
    </div>
  );
}
 