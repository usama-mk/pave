import React from 'react'

function SalesPipelineComp({img, title, subTitle}) {
  return (
    <div className='grid grid-col-12 gap-2 grid-flow-col my-10' >
        <div className='col-span-2' >
<img src={img} className={`object-contain w-[25px] mt-[6px] ${title==='Measure team performance'?'border-2 border-[#FFB91D]':''}  ` }alt="" />
        </div>

        <div className='col-span-10 justify-self-start text-left ' >
            <h3 className='text-[21px] font-semibold leading-[25px] mb-1 ' >{title}</h3>
            <h5 className='text-[10px] leading-[15px] ' >{subTitle}</h5>
        </div>
    </div>
  )
}

export default SalesPipelineComp