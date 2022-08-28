import React from 'react'
import cpArrow from '../assets/images/cpArrow.png'

function CareerPassionCard({title, openRoles, workType}) {
  return (
    <div
    className='bg-[#1A1A1A] min-w-[324px] h-[107px] rounded-2xl text-white my-5'
    >
        <div  className='flex flex-col' >
            <div className='flex justify-between px-5 mt-5 mb-2 ' >
                <h1 className=' text-[18px] font-bold leading-[25px] ' >{title}</h1>
                <img src={cpArrow} className='object-contain w-[10px] ' alt="" />
            </div>
<hr className='bg-[white] h-[1px] w-full ' />
            <div>
                <h1 className='text-[16] px-5 mt-3' >
                    {openRoles} open roles - {workType}
                </h1>
            </div>
        </div>
        
    </div>
  )
}

export default CareerPassionCard