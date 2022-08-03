import React from 'react'
import blackLuArrow from '../assets/images/black-lu-arrow.png'



function TeamHeader({title}) {
   
  return (
    <div className='flex justify-between items-center m-5 ' >
         <h1 className='text-[25px] font-semibold leading-[28px] text-left text-black' >{title}</h1>

    <img src={blackLuArrow} className='object-contain  ml-5 ' alt="" />
   
    <div>
        
    </div>
</div>
  )
}

export default TeamHeader