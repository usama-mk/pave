import React from "react";
import DesktopSideNav from "../../../components/DesktopSideNav";
import TeamMember from "../../../components/TeamMember";

function Team() {
  return (
    <div className="flex">
      <DesktopSideNav name={`About`} />

      <div className="w-full">
        <div className="flex justify-end m-5  ">
          <div className="letsTalk bg-[white] px-4 py-3 h-fit border-2 border-black rounded-[10px] text-sm font-bold text-center flex items-center justify-center w-max  ">
            <span> {"Lets Talk"}</span>
          </div>
        </div>

        <section className="flex flex-col items-start justify-center ">
          <h1 className="text-[3rem] font-bold leading-[45px] ">
            Just some of our core team members
          </h1>

          <div className="grid grid-cols-7 gap-4 gap-y-8 overflow-auto mb-[100px] align-middle mt-16 max-h-[500px] ">
            <TeamMember
              desktop={true}
              name="Peter L."
              heading={"Chief Marketing Officer"}
              subHeading={"Marketing Partner"}
            />
            <TeamMember
              desktop={true}
              name="Thomas P."
              heading={"Chief Of Operations"}
              subHeading={"Marketing Partner"}
            />
            <TeamMember
              desktop={true}
              name="Nathan T."
              heading={"Chief Of Entertainment"}
              subHeading={"Marketing Partner"}
            />
            <TeamMember
              desktop={true}
              name="Gabriela S."
              heading={"Director of Business Dev"}
              subHeading={"& Marketing Partner"}
            />

            <TeamMember
              desktop={true}
              name="Sara T."
              heading={"Head Of Operation"}
              subHeading={"& Project Management"}
            />
            <TeamMember
              desktop={true}
              name="Max M."
              heading={"Head Of Digital Innovation"}
              subHeading={"& Growth Strategy"}
            />
            <TeamMember
              desktop={true}
              name="Jenny C."
              heading={"Head Of Finance"}
              subHeading={"& Human Resources"}
            />
            <TeamMember
              desktop={true}
              name="Nikhil P."
              heading={"Head Of Client Relations"}
              subHeading={"& Growth Strategy"}
            />
            <TeamMember
              desktop={true}
              name="Tom S."
              heading={"Creative Direction Lead"}
              subHeading={"& Marketing Strategy"}
            />
            <TeamMember
              desktop={true}
              name="Gabe K."
              heading={"Director Of Photography"}
              subHeading={"& Cinematography Expert"}
            />
            <TeamMember
              desktop={true}
              name="Kelly R."
              heading={"Strategic Board Advisor"}
              subHeading={"Creative Brand Strategy"}
            />
            <TeamMember
              desktop={true}
              name="Ben E."
              heading={"Sr. Graphic Designer"}
              subHeading={"& Brand Strategy"}
            />
            <TeamMember
              desktop={true}
              name="Andrew L."
              heading={"Strategic Board Advisor"}
              subHeading={"Licensing/IP & Brand Extension"}
            />
            <TeamMember
              desktop={true}
              name="Erika R."
              heading={"Activations & Culture"}
              subHeading={"& Business Development"}
            />
            <TeamMember
              desktop={true}
              name="Vivianna S."
              heading={"Music Management"}
              subHeading={"& Activations Expert"}
            />
            <TeamMember
              desktop={true}
              name="Belinda R."
              heading={"Brand Partnership"}
              subHeading={"& Business Development"}
            />
            <TeamMember
              desktop={true}
              name="Sierra G."
              heading={"Director of Talent"}
              subHeading={"& Model Acquisition"}
            />
            <TeamMember
              desktop={true}
              name="Jahil A."
              heading={"Print Design Expert"}
              subHeading={"& Local Production"}
            />
            <TeamMember
              desktop={true}
              name="Olga T."
              heading={"Hair & Makeup Artist"}
              subHeading={"Fashion Stylist"}
            />
            <TeamMember
              desktop={true}
              name="Mike W."
              heading={"Director of Engineering"}
              subHeading={"& Development Lead"}
            />
            <TeamMember
              desktop={true}
              name="Chandi M."
              heading={"Fashion & Style Expert"}
              subHeading={"VIP Business Development"}
            />
            <TeamMember
              desktop={true}
              name="Cynthia J."
              heading={"Social & SEO Specialist"}
              subHeading={"Campaign Manager"}
            />
            <TeamMember
              desktop={true}
              name="David C."
              heading={"Art Director"}
              subHeading={"& Brand Strategy"}
            />
            <TeamMember
              desktop={true}
              name="Dan B."
              heading={"Digital creator"}
              subHeading={"& Lead Photographer"}
            />
            <TeamMember
              desktop={true}
              name="Cam I."
              heading={"PPC Manager"}
              subHeading={"SEM/SMM"}
            />
            <TeamMember
              desktop={true}
              name="Fin W."
              heading={"Digital Creator"}
              subHeading={"& Project Manager"}
            />
            <TeamMember
              desktop={true}
              name="Divya K."
              heading={"Media Relations Expert"}
              subHeading={"& Project Manager"}
            />
            <TeamMember
              desktop={true}
              name="Nigel M."
              heading={"Strategic Board Advisor"}
              subHeading={"Global Procurement"}
            />
            <TeamMember
              desktop={true}
              name="Brain L."
              heading={"Sales Manager"}
              subHeading={"Business Development"}
            />
            <TeamMember
              desktop={true}
              name="Louis S."
              heading={"Sales Manager"}
              subHeading={"Account manager"}
            />
            <TeamMember
              desktop={true}
              name="Divya K."
              heading={"Media Relations Expert"}
              subHeading={"& Project Manager"}
            />
            <TeamMember
              desktop={true}
              name="Mahdi S."
              heading={"Full Stack Developer"}
              subHeading={"Java/CSS/Laravel/Shopify/WP"}
            />
            <TeamMember
              desktop={true}
              name="Christy A."
              heading={"Sr. Accountant"}
              subHeading={"& Human Resources"}
            />
            <TeamMember
              desktop={true}
              name="Maple M."
              heading={"Marketing Specialist"}
              subHeading={"International Relations"}
            />
            <TeamMember
              desktop={true}
              name="Hiba D."
              heading={"Graphic Designer"}
              subHeading={"& UI/UX Expert"}
            />
            <TeamMember
              desktop={true}
              name="Chris S."
              heading={"Content Creator"}
              subHeading={"& Videographer"}
            />
            <TeamMember
              desktop={true}
              name="Usama M."
              heading={"Full Stack Developer"}
              subHeading={"React/Firebase/Node.js/Mongodb"}
            />
            <TeamMember
              desktop={true}
              name="Shahid M."
              heading={"UI/UX Designer"}
              subHeading={"Figma & Xd Expert"}
            />
            <TeamMember
              desktop={true}
              name="Vlad S."
              heading={"Developer & IT Specialist"}
              subHeading={"CSS/Shopify/WP"}
            />
            <TeamMember
              desktop={true}
              name="Harris F."
              heading={"3D Artist"}
              subHeading={"& Jr. Graphic Designer"}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;
