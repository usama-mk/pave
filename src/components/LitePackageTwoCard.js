import React from 'react'
import getStartedArrow from '../assets/images/getStartedArrow.png'

function LitePackageTwoCard({img, title, price, desc}) {
  return (
    <div className='grid grid-cols-4 my-5' >
        <div className='' >
            <img src={img} className=' object-contain w-[75px]' alt="" />
            <h1 className='text-left  text-[24px] font-bold leading-[36px] my-1 '>{title}</h1>
            <h1 className='text-left  text-[24px] leading-[36px]'>{price}</h1>
        </div>

        <div className='col-span-3' >
            <h1 className='text-left  text-[17px] leading-[26px] ml-4 '>{desc}</h1>

            <div className='flex justify-end mt-5' >
                <h5 className='text-[14px] font-bold leading-[24px] ' >Get Started</h5>
                <img src={getStartedArrow} className='object-contain w-[12px] ml-2 ' alt='arrow'   />
            </div>
        </div>
    </div>
  )
}

export default LitePackageTwoCard