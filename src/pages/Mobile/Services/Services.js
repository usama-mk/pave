import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import ServiceItem from '../../../components/ServiceItem'
import WorkButton from '../../../components/WorkButton'
import { goToServices } from '../../../store/actions/navOptionsActions'
import ServicesFive from './ServicesFive'
import ServicesFour from './ServicesFour'
import ServicesSeven from './ServicesSeven'
import ServicesSix from './ServicesSix'
import ServicesThree from './ServicesThree'
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

      <div id='scroll-blur' style={{direction: 'rtl'}} className="mt-5 h-52 overflow-auto csa scroll-box relative ">
       
      <ServiceItem title={`Digital Marketing`} selected={true} />

      <ServiceItem title={`Talent & Entertainment`} selected={true} />
      <ServiceItem title={`Paid Advertising (PPC)`} selected={true} />
      <ServiceItem title={`Future Technology`} selected={true} />
      <ServiceItem title={`Search Engine Optimization`} selected={true} />
      <ServiceItem title={`Web Design & Development`} selected={true} />
      <ServiceItem title={`App Design & Development`} selected={true} />
      <ServiceItem title={`Data Analytics & Data Science`} selected={true} />
      <ServiceItem title={`eCommerce & Amazon`} selected={true} />
      <ServiceItem title={`Social Media & PR`} selected={true} />
      <ServiceItem title={`Digital  Marketing`} selected={true} />
      <ServiceItem title={`Brick & Mortar & Local Visibility`} selected={true}  />
      <ServiceItem title={`Branding & Graphic Design`} selected={true} />
      <ServiceItem title={`Photography & Video Production`} selected={true} />
      <ServiceItem title={`Brand Activation`} selected={true} />
      <ServiceItem title={`Lead Generation & Growth Marketing
`} selected={true} />
      <ServiceItem title={`Experiential Marketing`} selected={true} />
 
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

export default Services
