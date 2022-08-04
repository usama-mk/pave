import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import ServiceItem from "../../../components/ServiceItem";
import WorkButton from "../../../components/WorkButton";
import { goToServices } from "../../../store/actions/navOptionsActions";
import ServicesFive from "./ServicesFive";
import ServicesFour from "./ServicesFour";
import ServicesSeven from "./ServicesSeven";
import ServicesSix from "./ServicesSix";
import ServicesThree from "./ServicesThree";
import ServicesTwo from "./ServicesTwo";

function Services() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(goToServices());
  }, []);
  const navigate = useNavigate();
  const handleServiceClick = (title) => {
    let path = title.replace(/ +/g, "");
    navigate(path);
  };
  return (
    <div className="flex flex-col h-[100vh] sec">
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div>
        <div className="px-5  ml-6 mr-6">
          <h2 className="text-[28px] font-bold leading-[35px] text-left ">
            We partner with our clients to help solve their business challenges
          </h2>
          <p className="text-[16px] leading-[27px] text-left mt-5 mb-5 ">
            Pave can help you throughout your digital journey. We partner with
            marketing, product and board level leaders to help you understand
            your customers better – and then build the right products and
            experiences to serve them. We work with you to define your product
            vision, design a strategy and improve your business outcomes.
          </p>
          <WorkButton text={`Work With Us`} bg={"white"} textColor={"black"} />

          <div
            id="scroll-blur"
            style={{ direction: "rtl" }}
            className="mt-5 h-52 overflow-auto csa scroll-box relative "
          >
            <ServiceItem
              handleServiceClick={handleServiceClick}
              title={`Digital Marketing`}
              selected={true}
            />

            <ServiceItem 
             handleServiceClick={handleServiceClick}
            title={`Talent & Entertainment`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Paid Advertising (PPC)`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Future Technology`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Search Engine Optimization`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Web Design & Development`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`App Design & Development`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick}
              title={`Data Analytics & Data Science`}
              selected={true}
            />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`eCommerce & Amazon`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Social Media & PR`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Digital  Marketing`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick}
              title={`Brick & Mortar & Local Visibility`}
              selected={true}
            />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Branding & Graphic Design`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick}
              title={`Photography & Video Production`}
              selected={true}
            />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Brand Activation`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick}
              title={`Lead Generation & Growth Marketing
`}
              selected={true}
            />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Experiential Marketing`} selected={true} />
          </div>
        </div>
        {/* <ServicesTwo/>
      <ServicesThree/>
      <ServicesFour/>
      <ServicesFive/>
      <ServicesSix/>
      <ServicesSeven/> */}
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

export default Services;
