import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
import ServiceItem from "../../../components/ServiceItem";
import WorkButton from "../../../components/WorkButton";
import { goToServices } from "../../../store/actions/navOptionsActions";


function SEO() {
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
    <div style={{height: '93vh', overflowY: 'scroll'}}  className="flex flex-col">
      <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div >
        <div className="px-5  ml-6 mr-6">
          <h2 className="text-[28px] font-bold leading-[35px] text-left ">
            SEO Proposal
          </h2>
          <p className="text-[16px] leading-[27px] text-left mt-5 mb-5 ">
          Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
         
         <button className="rounded-2xl bg-[#FEB92B] text-black text-[12px] font-bold leading-[21px] flex justify-start py-2 px-6 cursor-pointer " >Start My Project</button>

          <div
            id="scroll-blur"
            style={{ direction: "rtl" }}
            className="mt-5 h-52 overflow-auto csa scroll-box relative mb-[100px]"
          >
            <ServiceItem
              handleServiceClick={handleServiceClick}
              title={`Search Engine Optimization Proposal
              `}
              selected={true}
            />

            <ServiceItem 
             handleServiceClick={handleServiceClick}
            title={`SEO Pricing`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Client Onboarding & FAQs`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Competition Research`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Keyword Research`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Website Current Health Analysis`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Onsite Optimization`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick}
              title={`Offsite Link Building`}
              selected={true}
            />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Conversion Rate Optimization`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Setting And Tracking Goals`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick} title={`Weekly Reporting`} selected={true} />
            <ServiceItem  handleServiceClick={handleServiceClick}
              title={`Case Studies`}
              selected={true}
            />
            
          </div>
        </div>
      
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

export default SEO;
