import React from 'react'
import DesktopSideNav from '../../../components/DesktopSideNav'
import homeThreeDesktop from '../../../assets/images/homeThreeDesktop.png'

function Details() {
  return (
    <div className='grid grid-cols-2 h-screen' >
       <div className='col-span-1' >
       <div className="flex">
       <DesktopSideNav name={`About`} redTheme={`true`} />
        <div className='bg-[#FD4C3C] col-span-2 gap-0 p-10 pt-7 flex flex-col items-start  ' >
        <div
           
           className="letsTalk bg-[#FD4C3C] px-4 py-3 h-fit border-2 border-white rounded-[10px] text-sm font-bold text-center flex items-center justify-center w-max text-white  "
         >
           <span> { "Lets Talk"}</span>
         </div>

         <h1 className='my-10 text-[2.7rem] font-bold text-white  ' >
            Experiences
         </h1>

        <TitleSub title={`Customer Experience`} sub={`Focusing on the customer, we design your customer’s journey, optimizing every touchpoint for convenience and delight.`} />

        <TitleSub title={`Digital Products`} sub={`Websites, apps, interfaces, AI, and more – we are a full-service product strategy, design, and development partner.
`} />

        <TitleSub title={`Innovation & Technology`} sub={`Creative engineering – we offer innovation and high-quality, cost-effective solutions on multiple platforms at scale.`} />

        <TitleSub title={`Data Science`} sub={`Harnessing the power of data, we create actionable insights and deeper connections with your customers.`} />

        </div>
       </div>
        </div>
{/* right */}
        <div className='col-span-1 flex flex-col items-stretch '>
            <img src={homeThreeDesktop} className='object-contain mt-[-160px] ml-[120px]' alt="" />
            <div className='flex flex-col items-start p-10 ' >
               <h3 className='text-[#410D81] text-[2.3rem] font-bold font-sfpro ' >Numbers</h3>

               <div className="grid grid-flow-col gap-4 ">
                    <NumberSub number={`2630+`} sub={`Lifetime Projects`} />
                    <NumberSub number={`2630+`} sub={`Lifetime Projects`} />
                    <NumberSub number={`2630+`} sub={`Lifetime Projects`} />
                    <NumberSub number={`2630+`} sub={`Lifetime Projects`} />
               </div>
            </div>
            <img src={homeThreeDesktop} className='object-contain' alt="" />

            </div> 
    </div>
  )
}

export default Details


const TitleSub=({title,sub})=>{
    return(
        <div className="text-left my-5 text-white " >
            <h1 className="text-[1.6rem] leading-[25px] font-bold mb-4 font-sfpro " >
                {title}
            </h1>
            <h5 className="text-[0.85rem] leading-[24px] " >
                {sub}
            </h5>
        </div>
    )
}

const NumberSub=({number,sub})=>{
    return(
        <div className="text-left my-5 text-[#410D81] " >
            <h1 className="text-[3.1rem] leading-[28px] font-bold mb-4 font-sfpro " >
                {number}
            </h1>
            <h5 className="text-[0.95rem] leading-[29px] " >
                {sub}
            </h5>
        </div>
    )
}