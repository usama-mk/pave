import React from 'react'

function Process({img, title, sub}) {
  return (
    <div className='mx-5 w-[192px] ' >
        <img style={{minWidth: '192px'}} src={img} className='object-contain w-[192px] ' alt="" />

        <h1 className='text-[19px] font-bold leading-[25px] mt-3 text-left ' >
            {title}
        </h1>

        <h3 className='text-[16px] leading-[24px] mt-1 text-left '>
            {sub}
        </h3>
    </div>
  )
}

export default Process