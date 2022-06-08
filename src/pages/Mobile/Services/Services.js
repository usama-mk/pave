import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import ServiceItem from '../../../components/ServiceItem'
import WorkButton from '../../../components/WorkButton'
import { goToServices } from '../../../store/actions/navOptionsActions'
import ServicesTwo from './ServicesTwo'




function Services() {
    const dispatch= useDispatch()
   useEffect(()=>{
    dispatch(goToServices())
   },[])
  return (
    <div className='flex flex-col h-[100vh] sec' >
        <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div>
      <div className="px-5  ml-6 mr-6">
      <h2 className='text-[22px] font-bold leading-[29px] text-left ' >
      We partner with our clients to help solve their business challenges
      </h2>
      <p className='text-[14px] text-left mt-5 mb-5 ' >
      Pave can help you throughout your digital journey. We partner with marketing, product and board level leaders to help you understand your customers better – and then build the right products and experiences to serve them. We work with you to define your product vision, design a strategy and improve your business outcomes.
      </p>
      <WorkButton text={`Work With Us`} bg={'white'} textColor={'black'}  />

      <div className="mt-5">
      <ServiceItem title={`Digital  Marketing`} selected={true} />
      <ServiceItem title={`Paid Advertising (PPC)`}  />
      <ServiceItem title={`Search Engine Optimization`}  />
      <ServiceItem title={`Web/App Design & Development`}  />
      </div>
      <div className="homeBottom  w-[321px] h-[348px] "> 
        <MobNavBar />
      </div>

      </div>
      <ServicesTwo/>

      </div>

    </div>
  )
}

export default Services
