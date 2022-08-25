import React from 'react'

function CloudLabComp({bulletColor, title, stack, sub}) {
  return (
    <div className='grid grid-cols-10 gap-1 my-5 ' >
        <div className={`w-[30px] h-[30px] rounded-full mt-[0.15rem] col-span-2 bg-[${bulletColor}] `} >

        </div>
        <div className='col-span-8 text-left ' >
            <h1 className='text-[27px] font-bold leading-[31px]' >{title}</h1>
            <h5 className='text-[14px] font-medium   my-1  ' >{stack} </h5>

            <h5 className='text-[14px] leading-[16px] text-left'>Extreme attention to detail and creation of branding elements that carry on beautifully in both web and mobile applications.</h5>
        </div>
    </div>
  )
}

export default CloudLabComp