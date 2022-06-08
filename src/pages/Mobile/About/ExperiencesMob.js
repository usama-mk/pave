import React from 'react'
import FAQs from '../../../components/FAQs'
import MobHeader from '../../../components/MobHeader'

function ExperiencesMob() {
    const NumbersItem=({subTitle, value})=>{
        return(
            <div className='text-left' >
                <h3 className='text-[30px] font-bold  text-[#410D81] ' >{value}</h3>
                <h5 className='text-[10px] text-[#410D81] ' >{subTitle}</h5>
            </div>
        )
    }
  return (
    <div  className='flex flex-col  h-[100vh] w-[100vw] sec ' >
        <div className="flex flex-col  bg-[#FD4C3C] h-[55%]  ">
        <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <h2 className='text-[25px] font-bold text-[white] text-left ml-8 mb-2 leading-[35px] ' >Experiences</h2>
      <div className='overflow-auto h-[28vh] ml-4 mr-4 ' >
        <FAQs color='white' title={`Customer Experience`} explanation={`Focusing on the customer, we design your customer’s journey, optimizing every touchpoint for convenience and delight.`} />

<FAQs color='white' title={`Digital Products
`} explanation={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />

<FAQs color='white' title={`Innovation & Technology
`} explanation={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />

<FAQs color='white' title={`Data Science
`} explanation={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />

</div>
        </div>

        {/* numbers */}
        <div className='mt-8 ml-8' >
        <h2 className='text-[25px] font-bold text-[#410D81] text-left leading-[35px] ' >Numbers</h2>
       <div className="flex space-x-8 mt-8 ">
       <NumbersItem value={`1400+`} subTitle={`Lifetime Projects`} />
       <NumbersItem value={`4M`} subTitle={`Users Impacted`} />
       </div>

       <div className="flex space-x-8 mt-8">
       <NumbersItem value={`740+`} subTitle={`Monthly Subscriptions`} />
       <NumbersItem value={`93%`} subTitle={`Client Satisfaction Rate
`} />
       </div>
        </div>
    </div>
  )
}

export default ExperiencesMob