import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeLeadPopUp, openLeadPopUp } from '../store/actions/leadPopupACtions';
import Modal from "react-modal";
import Recaptcha from './Recaptcha';
import cross2x from '../assets/images/cross2x.png';
import arrowWhite from '../assets/images/arrowWhite.png';
import arrowBlack from '../assets/images/arrowBlack.png';
import arrowYellow from '../assets/images/arrowYellow.png';


function LetsTalkModal() {
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
    <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <div>
      <div
        onClick={() => dispatch(closeLeadPopUp())}
        className="flex justify-end"
      >
        <img src={cross2x} className="object-contain w-[25px]" alt="" />
      </div>
      <h1 className="text-[23px] font-bold leading-[21px]  " >
      Want a Free Business
& Marketing Consultation?
      </h1>
      <form
        className="mt-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <PopInput
          label={`Name`}
          type="text"
          value={name}
          onChange={setName}
          placeholder={"Enter your full name here"}
        />
        <PopInput
          label={`Company Name`}
          type="text"
          value={companyName}
          onChange={setCompanyName}
          placeholder={"PAVE Creative Agency"}
        />
        <PopInput
          label={`Work Email`}
          type="email"
          value={workEmail}
          onChange={setWorkEmail}
          placeholder={"pave@company.com"}
        />
        <PopInput
          label={`Phone Number`}
          type="tel"
          value={phNum}
          onChange={setPhNum}
          placeholder={"000000"}
        />
         <PopInput
          label={`Monthly Project Budget`}
          type="text"
          value={budget}
          onChange={setBudget}
          placeholder={"Enter your estimated budget"}
        />
        <PopInput
          label={`Message`}
          type="text"
          value={message}
          onChange={setMessage}
          placeholder={"Enter your message here"}
        />

        <Recaptcha />
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
  </Modal>
  )
}

export default LetsTalkModal


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
  
  const PopInput = ({ label, value, onChange, placeholder, type }) => {
    return (
      <div className="text-left mb-5 leading-[10px]  ">
        <label className="text-[13px] font-bold leading-[21px]  ">{label}</label>
  
        <div className="leading-[23px] ">
          <input
            className="bg-transparent leading-[30px] border-b-[1px] border-[#828282] placeholder:text-[12px] placeholder:leading-[21px]  w-[100%] focus:outline-none mt-2 "
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  };
  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      backgroundColor: "#EFEFEF",
    },
  };
  