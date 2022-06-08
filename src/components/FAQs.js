import React, { useState } from 'react'
import faqOpenArrow from '../assets/images/faqOpenArrow.png'

function FAQs({title, explanation}) {
    const [showExp, setShowExp]= useState(false)
  return (
    <div className='w-full' >
        <div className="flex justify-between m-5 font-bold ">
            <h5 className='max-w-[150px] text-[15px] text-left ' >{title}</h5>
            <img src={faqOpenArrow} onClick={()=> setShowExp(!showExp)} className='object-contain' alt="" />
        </div>

        {
            showExp?
            <h5 className='max-w-[300px] text-[12px] text-left ml-9 ' >
            {explanation}
        </h5>
            :""
        }
    </div>
  )
}

export default FAQs