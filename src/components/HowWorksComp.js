import React from 'react'

function HowWorksComp({img, title, sub}) {
  return (
    <div className='flex flex-col items-center h-[200px] my-10 ' >
        <img src={img} className='object-contain w-[52px] ' alt="" />
        <h1 className='text-[27px] font-semibold leading-[30px] ' >{title}</h1>
        <h4 className='text-[16px] leading-[29px] ' >{sub}</h4>
    </div>
  )
}

export default HowWorksComp