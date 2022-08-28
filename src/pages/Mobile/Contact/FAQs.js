import React from "react";
import FAQ from "../../../components/FAQ";
import LetsTalkModal from "../../../components/LetsTalkModal";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";

function FAQs() {
  const [totalPages, setTotalPages] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div
      style={{ height: "93vh", overflowY: "scroll" }}
      className="flex flex-col  "
    >
      <div className="  w-[100vw]  flex justify-center  ">
        <MobHeader buttonTitle={`Homepage`} yellowTheme={true} />
      </div>
      <div className="bg-[#FEB52B] flex flex-col flex-1 mt-[-10px] text-left px-[6%] ">
        <h1 className="mt-12 text-[21px] font-bold leading-[25px] ">
          Frequently Asked Questions
        </h1>
        <FAQ
          title={`Can i cancel my essentials or premium
plan subscription at anytime?`}
          explanation={`You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.`}
        />

<FAQ
          title={`How do i pay for the essentials
          or premium plan?`}
          explanation={`You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.`}
        />

<FAQ
          title={`Can i cancel my essentials or premium
          plan subscription at anytime?`}
          explanation={`You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.`}
        />

<FAQ
          title={`Can i cancel my essentials or premium
plan subscription at anytime?`}
          explanation={`You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.`}
        />


      </div>
      <LetsTalkModal />
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

export default FAQs;
