import React from 'react'
import faqOpenArrow from '../assets/images/faqOpenArrow.png'
import faqOpenArrowFaded from '../assets/images/faqOpenArrowFaded.png'
function ServiceItem({title, selected}) {
  return (
    <div className="flex my-5">
    <h1 style={{color: selected?'black':'#ADADAD'}} className='font-semibold text-[18px] text-left' >
    {title}
</h1>
<img className='object-contain ml-3' src={selected?faqOpenArrow:faqOpenArrowFaded} alt="" />
</div>
  )
}

export default ServiceItem