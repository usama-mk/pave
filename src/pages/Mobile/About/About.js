import React from 'react'
import MobHeader from '../../../components/MobHeader'
import WorkButton from '../../../components/WorkButton'
import PlayVideoButton from '../../../components/PlayVideoButton'
import FAQs from '../../../components/FAQs'
import MobNavBar from '../../../components/MobNavBar'
import ExperiencesMob from './ExperiencesMob'

function About() {
  return (
    <div className='flex flex-col items-center h-[100vh] sec ' >
        <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className="px-5">
      <h2 className='text-[22px] font-bold leading-[29px] text-left ml-8 mr-8' >
      We create value for your 
business by creating value 
for your customers.
      </h2>
      <h4 className='text-left text-[14px] leading-[20px] mt-8 ml-8 mr-8 ' >
      PAVE Creative Marketing Agency is a 
<span className='font-bold'> team of overachievers</span>. <span className='underline text-[13px] text-[#969696] ' >Read More</span>
      </h4>
      <div className="homeMidButtons mt-10 mb-10 flex justify-center">
          {/* btn 1 */}
          <WorkButton
            handleWorkWithUs={()=>{}}
            textColor={"black"}
            bg={"#FEB92B"}
            p4={true}
            text={"Read Testimonials"}
          />
          {/* btn1 ends */}

          {/* btn 2 */}
          <PlayVideoButton textColor={"white"} bg={"#363636"} />
          {/* btn 2  ends */}
        </div>
        <div className='overflow-auto h-[28vh] ml-4 mr-4 ' >
        <FAQs title={`Collaborate on
Strategic Planning`} explanation={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />

<FAQs title={`Maximum Conversion
`} explanation={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />

<FAQs title={`Analytics & Optimization`} explanation={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />

<FAQs title={`Ego-Free Adaptation`} explanation={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />

</div>
<h2 className='text-left m-5 font-bold text-[18px] leading-[25px] ' >
“PAVE may be the most inventive
agency in Southern California”
</h2>
<h5 className='text-[12px] text-left ml-5 ' >-Marketwatch</h5>
<div className="homeBottom  w-[321px] h-[348px] ">

<MobNavBar/>
      </div>
      <ExperiencesMob/>
      </div>
      {/* page con ends */}
      

    </div>
  )
}

export default About