import React, { useState } from 'react'
import addExpand from '../assets/images/addExpand.png'
import minusExpand from '../assets/images/minusExpand.png'



function FAQ({title, explanation}) {
    const [showExp, setShowExp]= useState(false)
  return (
    <div className='w-full' >
        <div className="flex justify-between m-5 font-bold ">
            <h5 className='w-[224px] text-[16px] text-black text-left leading-[24px] ' >{title}</h5>
            {
              <img src={showExp?minusExpand:addExpand} onClick={()=> setShowExp(!showExp)} className='object-contain w-[15px]' alt="" />
            }
        </div>

        {
            showExp?
            <h5 className={`max-w-[300px] text-[14px] leading-[24px] text-left ml-5 pl-5`} >
            {explanation}
        </h5>
            :""
        }

{
        showExp?'': <div className='px-[6%]'>
            <hr className='h-[2px] w-full border-black mt-3 opacity-[6%]' />
   
        </div> }
    </div>
  )
}

export default FAQ