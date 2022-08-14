import React from 'react'
import faqOpenArrow from '../assets/images/faqOpenArrow.png'
import faqOpenArrowFaded from '../assets/images/faqOpenArrowFaded.png'
function ServiceItem({title, selected, handleServiceClick, marginLNo}) {
  return (
    <div onClick={()=> handleServiceClick(title)} style={{direction: 'ltr', marginLeft: marginLNo?'0px':''}} className="flex my-5 ml-5 cursor-pointer ">
    <h1 style={{color: selected?'black':'#ADADAD'}} className='font-semibold text-[18px] text-left' >
    {title}
</h1>
<img className='object-contain ml-3' src={selected?faqOpenArrow:faqOpenArrowFaded} alt="" />
</div>
  )
}

export default ServiceItem