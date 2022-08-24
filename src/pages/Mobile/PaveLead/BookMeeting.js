import React, { useState } from "react";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import arrowBlack from "../../../assets/images/arrowBlack.png";
import arrowYellow from "../../../assets/images/arrowYellow.png";
import arrowWhite from "../../../assets/images/arrowWhite.png";
import contactFemale from "../../../assets/images/contactFemale.png";
import phone from "../../../assets/images/phone.png";
import ContactPoints from "../../../components/ContactPoints";
import LeadAccelerateAutomate from "../../../components/LeadAccelerateAutomate";

function BookMeeting() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phNum, setPhNum] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const [suggestion, setSuggestion] = useState("");
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className="mb-[100px] px-[6%] ">
        <h1 className="text-left text-[25px] font-bold leading-[35px]  ">
          Get more qualified B2B sales leads. Book a free consultation!
        </h1>

        <form
          className="mt-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
          <Input
            label={`Phone Number`}
            type="tel"
            value={phNum}
            onChange={setPhNum}
            placeholder={"000000"}
          />
          <Input
            label={`Website URL`}
            type="text"
            value={budget}
            onChange={setBudget}
            placeholder={"https:/example.com"}
          />
          {/* <Input label={`Message`} type='text' value={message} onChange={setMessage} placeholder={'Enter your message here'} /> */}
          <h2 className="text-[20px] font-bold leading-[33px] text-left my-5  ">
            Tell us about your needs
          </h2>
          <InputSuggestion
            suggestions={[
              `Looking for Lead generation`,
              `Traget Specx: e.g Industry, Location, etc.`,
              `Others Revelant info`,
            ]}
            value={suggestion}
            onChange={setSuggestion}
          />

          <div className="mt-1.5 flex ">
            <FormButton
              sendMessage={true}
              text={`Send Message`}
              bg={"#363636"}
              textColor={"white"}
              p4={true}
            />
            <FormButton
              text={`Book Meeting`}
              bg={"#FEB52B"}
              textColor={"black"}
              p4={true}
            />
          </div>
        </form>

        <div className="flex flex-col items-center my-10">
          <img
            src={contactFemale}
            className="w-[172px] object-contain rounded-full "
            alt=""
          />

          <div className="text-[26px] font-semibold leading-[28px] mt-5 ">
            Send us a message or call now to speak to a Marketing Consultant!
          </div>
        </div>

        <ContactPoints
          points={[
            `Secure your appointment`,
            `Tell us about your business`,
            `Find out if we're a good fit`,
            `Get the specifics about our services`,
          ]}
        />

        <div className="flex items-center mt-5 mb-12 ">
          <img src={phone} className=" object-contain w-[45px] " alt="" />
          <h4 className="text-[24px] leading-[35px] text-left ml-5 ">
            +1-714-332-0019
          </h4>
        </div>

        <LeadAccelerateAutomate
          tabOne={`How it works
          Automate lead generation`}
          tabTwo={`Qualified leads 
          generated `}
          tabThree={`Grow your opportunity
          With collect data`}
          tabFour={`Service 
          packages`}
          selected={"two"}
        />
      </div>

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

export default BookMeeting;

const Input = ({ label, value, onChange, placeholder, type }) => {
  return (
    <div className="text-left mb-8 leading-[10px]  ">
      <label className="text-[20px] font-bold leading-[33px]  ">{label}</label>

      <div className="leading-[23px] ">
        <input
          className="bg-transparent leading-[30px] border-b-[0.5px] border-[#828282] placeholder:text-[20px] placeholder:leading-[33px]  w-[100%] focus:outline-none mt-2 "
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

const InputSuggestion = ({ suggestions, value, onChange }) => {
  return (
    <div className="mb-8">
      <h4 className="text-[18px] leading-[33px] text-[#707070] text-left ">
        Suggestions
      </h4>
      {suggestions.map((suggestion) => (
        <h5 className="text-[18px] leading-[33px] text-[#707070] text-left ">
          - {suggestion}
        </h5>
      ))}

      <input
        className="bg-transparent leading-[10px] border-b-[0.5px] border-[#828282] placeholder:text-[20px] placeholder:leading-[33px]  w-[100%] focus:outline-none mt-2 "
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
