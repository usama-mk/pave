import React, { useState } from 'react'
import faqOpenArrow from '../assets/images/faqOpenArrow.png'
import faqCloseArrow from '../assets/images/faqCloseArrow.png'
import faqOpenArrowWhite from '../assets/images/faqOpenArrowWhite.png'
import faqCloseArrowWhite from '../assets/images/faqCloseArrowWhite.png'



function FAQs({title, explanation, color}) {
    const [showExp, setShowExp]= useState(false)
  return (
    <div className='w-full' >
        <div className="flex justify-between m-5 font-bold ">
            <h5  style={{color: color==='white'?'white':'black', lineHeight: color==='white'?'18px': ''}} className='max-w-[224px] text-[19px] text-left leading-[25px] ' >{title}</h5>
            {
                color==='white'?
                <img src={showExp?faqCloseArrowWhite:faqOpenArrowWhite} onClick={()=> setShowExp(!showExp)} className='object-contain' alt="" />
                :<img src={showExp?faqCloseArrow:faqOpenArrow} onClick={()=> setShowExp(!showExp)} className='object-contain' alt="" />
            }
        </div>

        {
            showExp?
            <h5 style={{color: color==='white'?'white':'black', fontSize: color==='white'?'16px':'14px', lineHeight: color==='white'?'24px':'20px' }} className={`max-w-[300px] text-[14px] text-left   ${color==='white'?`ml-9`:`ml-5`}`} >
            {explanation}
        </h5>
            :""
        }
    </div>
  )
}

export default FAQs