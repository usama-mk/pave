import React, { useState } from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import Recaptcha from '../../../components/Recaptcha'
import WorkButton from '../../../components/WorkButton'
import ServicesThree from './ServicesThree'

const Input=({label, value, onChange, placeholder, type})=>{
return(
    <div className='text-left mb-4 leading-[10px]  ' >
        <label className='text-[11px] font-bold ' >{label}</label>
        <br />
        <div className='leading-[23px] ' >
        <input className='bg-transparent leading-[43px] border-b-2 border-[#707070] placeholder:text-[11px]  w-[100%] focus:outline-none ' type={type} value={value} onChange={(e)=> onChange(e.target.value)} placeholder={placeholder} />
        </div>
    </div>
)
}

function ServicesTwo() {
    const [name, setName]= useState('')
    const [companyName, setCompanyName]= useState('')
    const [workEmail, setWorkEmail]= useState('')
    const [phNum, setPhNum]= useState('')
    const [budget, setBudget]= useState('')
    const [message, setMessage]= useState('')
  return (
    <div className='flex flex-col h-[100vh] sec' >
    <div className="  w-[100vw]  flex justify-center mb-3 ">
    <MobHeader />
  </div>


  <div>
      <div className="px-5  ml-6 mr-6">
      <h2 className='text-[20px] font-bold leading-[19px] text-left ' >
      Want a Free Business
& Marketing Consultation?
      </h2>
     <form className='mt-5' onSubmit={(e)=>{e.preventDefault()}}>
         <Input label={`Name`} type='text' value={name} onChange={setName} placeholder={'Enter your full name here'} />
         <Input label={`Company Name`} type='text' value={companyName} onChange={setCompanyName} placeholder={'PAVE Creative Agency'} />
         <Input label={`Work Email`} type='email' value={workEmail} onChange={setWorkEmail} placeholder={'pave@company.com'} />
         <Input label={`Phone Number`} type='tel' value={phNum} onChange={setPhNum} placeholder={'000000'} />
         <Input label={`Monthly Project Budget`} type='text' value={budget} onChange={setBudget} placeholder={'Enter your estimated budget'} />
         <Input label={`Message`} type='text' value={message} onChange={setMessage} placeholder={'Enter your message here'} />
        <Recaptcha/>
        <div className='mt-1.5' >
        <WorkButton text={`Submit`} bg={'#FEB52B'} textColor={'black'} p4={true}  />
        </div>
     </form>
      

      
      <div className="homeBottom  w-[321px] h-[348px] "> 
        <MobNavBar />
      </div>

      </div>
      <ServicesThree/>

      </div>

  </div>
  )
}

export default ServicesTwo