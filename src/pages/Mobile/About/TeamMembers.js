import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import TeamHeader from '../../../components/TeamHeader'
import TeamMember from '../../../components/TeamMember'

function TeamMembers() {
  return (
    <div  style={{height: '93vh', overflowY: 'scroll'}} className='flex flex-col mb-[100px] items-center bg-[#EFEFEF] '>
         <div className="homeTop relative top-0 mb-5 w-[100vw]  flex justify-center ">
    <MobHeader />
  </div>
  <TeamHeader title={`Just some of our
core team members`} />

<div className='grid grid-cols-2 gap-2 gap-y-4 overflow-auto mb-[100px] align-middle ' >
<TeamMember name="Peter L." heading={"Chief Marketing Officer"} subHeading={"Marketing Partner"} />
<TeamMember name="Thomas P." heading={"Chief Of Operations"} subHeading={"Marketing Partner"}/>
<TeamMember name="Nathan T." heading={"Chief Of Entertainment"} subHeading={"Marketing Partner"}/>
<TeamMember name="Gabriela S." heading={"Director of Business Dev"} subHeading={"& Marketing Partner"}/>

<TeamMember name="Sara T." heading={"Head Of Operation"} subHeading={"& Project Management"} />
<TeamMember name="Max M." heading={"Head Of Digital Innovation"} subHeading={"& Growth Strategy"}/>
<TeamMember name="Jenny C." heading={"Head Of Finance"} subHeading={"& Human Resources"}/>
<TeamMember name="Nikhil P." heading={"Head Of Client Relations"} subHeading={"& Growth Strategy"}/>
<TeamMember name="Tom S." heading={"Creative Direction Lead"} subHeading={"& Marketing Strategy"}/>
<TeamMember name="Gabe K." heading={"Director Of Photography"} subHeading={"& Cinematography Expert"}/>
<TeamMember name="Kelly R." heading={"Strategic Board Advisor"} subHeading={"Creative Brand Strategy"}/>
<TeamMember name="Ben E." heading={"Sr. Graphic Designer"} subHeading={"& Brand Strategy"}/>
<TeamMember name="Andrew L." heading={"Strategic Board Advisor"} subHeading={"Licensing/IP & Brand Extension"}/>
<TeamMember name="Erika R." heading={"Activations & Culture"} subHeading={"& Business Development"}/>
<TeamMember name="Vivianna S." heading={"Music Management"} subHeading={"& Activations Expert"}/>
<TeamMember name="Belinda R." heading={"Brand Partnership"} subHeading={"& Business Development"}/>
<TeamMember name="Sierra G." heading={"Director of Talent"} subHeading={"& Model Acquisition"}/>
<TeamMember name="Jahil A." heading={"Print Design Expert"} subHeading={"& Local Production"}/>
<TeamMember name="Olga T." heading={"Hair & Makeup Artist"} subHeading={"Fashion Stylist"}/>
<TeamMember name="Mike W." heading={"Director of Engineering"} subHeading={"& Development Lead"}/>
<TeamMember name="Chandi M." heading={"Fashion & Style Expert"} subHeading={"VIP Business Development"}/>
<TeamMember name="Cynthia J." heading={"Social & SEO Specialist"} subHeading={"Campaign Manager"}/>
<TeamMember name="David C." heading={"Art Director"} subHeading={"& Brand Strategy"}/>
<TeamMember name="Dan B." heading={"Digital creator"} subHeading={"& Lead Photographer"}/>
<TeamMember name="Cam I." heading={"PPC Manager"} subHeading={"SEM/SMM"}/>
<TeamMember name="Fin W." heading={"Digital Creator"} subHeading={"& Project Manager"}/>
<TeamMember name="Divya K." heading={"Media Relations Expert"} subHeading={"& Project Manager"}/>
<TeamMember name="Nigel M." heading={"Strategic Board Advisor"} subHeading={"Global Procurement"}/>
<TeamMember name="Brain L." heading={"Sales Manager"} subHeading={"Business Development"}/>
<TeamMember name="Louis S." heading={"Sales Manager"} subHeading={"Account manager"}/>
<TeamMember name="Divya K." heading={"Media Relations Expert"} subHeading={"& Project Manager"}/>
<TeamMember name="Mahdi S." heading={"Full Stack Developer"} subHeading={"Java/CSS/Laravel/Shopify/WP"}/>
<TeamMember name="Christy A." heading={"Sr. Accountant"} subHeading={"& Human Resources"}/>
<TeamMember name="Maple M." heading={"Marketing Specialist"} subHeading={"International Relations"}/>
<TeamMember name="Hiba D." heading={"Graphic Designer"} subHeading={"& UI/UX Expert"}/>
<TeamMember name="Chris S." heading={"Content Creator"} subHeading={"& Videographer"}/>
<TeamMember name="Usama M." heading={"Full Stack Developer"} subHeading={"React/Firebase/Node.js/Mongodb"}/>
<TeamMember name="Shahid M." heading={"UI/UX Designer"} subHeading={"Figma & Xd Expert"}/>
<TeamMember name="Vlad S." heading={"Developer & IT Specialist"} subHeading={"CSS/Shopify/WP"}/>
<TeamMember name="Harris F." heading={"3D Artist"} subHeading={"& Jr. Graphic Designer"}/>

</div>


 
<div
        className={`${
          true
            ? "visible cssanimation fadeInBottom "
            : "invisible"
        }     flex justify-center w-[100vw] fixed bottom-0 z-30  `}
      >
        
       
      <MobNavBar showNavBar={true} />
        
      </div>
    </div>
  )
}

export default TeamMembers