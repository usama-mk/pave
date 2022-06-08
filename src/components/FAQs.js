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
            <h5  style={{color: color==='white'?'white':'black'}} className='max-w-[150px] text-[15px] text-left ' >{title}</h5>
            {
                color==='white'?
                <img src={showExp?faqCloseArrowWhite:faqOpenArrowWhite} onClick={()=> setShowExp(!showExp)} className='object-contain' alt="" />
                :<img src={showExp?faqCloseArrow:faqOpenArrow} onClick={()=> setShowExp(!showExp)} className='object-contain' alt="" />
            }
        </div>

        {
            showExp?
            <h5 style={{color: color==='white'?'white':'black'}} className='max-w-[300px] text-[12px] text-left ml-9 ' >
            {explanation}
        </h5>
            :""
        }
    </div>
  )
}

export default FAQs