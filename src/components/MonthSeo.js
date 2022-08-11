import React from 'react'
import arrowLeft from '../assets/images/arrowLeft.png'
import arrowRight from '../assets/images/arrowRight.png'
import CheckTitle from './CheckTitle'


function MonthSeo({monthImage, number, p1, onsiteTasks, offSiteTasks, expectations, setNumber}) {
    if(number===7 || number===0){
        setNumber(1)
    }
  return (
    <div>
        <div className='flex justify-between' >
            <div className='flex ' >
               <img src={monthImage} className='mr-3 border-2 border-yellow-500 object-contain'  alt="" />
               <h3 className='font-bold text-[21px] leading-[25px] ' >MONTH <span>{number}</span> </h3>
            </div>
            <div className='flex ' >
                <img onClick={()=>setNumber((num)=> num-1)} src={arrowLeft} className='object-contain mr-2 '  alt="" />
                <img  onClick={()=>setNumber((num)=> num+1)} src={arrowRight} className='object-contain ml-2 '  alt="" />
            </div>
        </div>
        <div className="my-5  ">
            {
                p1.map(para=>
            <h4 className='text-[12px] leading-[15px]' >{para}</h4>
                    
                    )
            }
        </div>

        <div className='mb-8' >
            <h1 className='text-[14px] font-semibold leading-[16px] ' >Onsite Tasks</h1>
            {
                onsiteTasks.map((task)=>
                <CheckTitle title={task} month={true} />
                )
            }
        </div>

        <div className='mb-8' >
            <h1 className='text-[14px] font-semibold leading-[16px] '>Offsite Tasks</h1>
            {
                offSiteTasks.map((task)=>
                <CheckTitle title={task} month={true} />
                )
            }
        </div>

        <div className='mb-12' >
            <h1 className='text-[14px] font-semibold leading-[16px] '>Expectation</h1>
            {
                expectations.map((expectation)=>
               <h5 className='text-[16px] leading-[24px] ' >{expectation}</h5>
                )
            }
        </div>
    </div>
  )
}

export default MonthSeo