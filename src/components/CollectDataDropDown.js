import React from 'react'
import redArrow from '../assets/images/redArrow.png'
import arrowDown from '../assets/images/arrowDown.png'
import arrowUp from '../assets/images/arrowUp.png'

function CollectDataDropDown({title, sub, active, setActive}) {
  return (
    <div className='my-5' >
        <div className='flex justify-between items-center ' >
           <div className='flex items-center  ' >
            {
                active?<img src={redArrow} className='object-contain w-[18px] ' alt="" />:''
            }
            <h2 style={{color:active?'#FD4C3C':''}} className='ml-2 text-[14px] font-bold leading-[16px] ' >{title}</h2>
           </div>

           <div onClick={()=> setActive(prev=> !prev)} >
           {
            active? <img src={arrowUp} className='object-contain w-[8px] ' alt="" />:
            <img src={arrowDown} className='object-contain w-[8px] ' alt="" />
           }
           </div>
        </div>
       {
        active? <h3 className='text-[16px] leading-[24px] text-[#9F9F9F] text-left mt-2 ' >
        {sub}
    </h3>:''
    
       }

{
        active?'': <hr className='h-[2px] w-full border-black mt-3 '  />
    }
    </div>
  )
}

export default CollectDataDropDown