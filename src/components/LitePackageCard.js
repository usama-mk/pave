import React from 'react'

function LitePackageCard({img, name, heading, subHeading}) {
  return (
    <div className='flex flex-col  ' >
      <div className="flex justify-center ">
      {
        img?<img src={img} width={157} height={117} className='object-contain mb-2' alt="" />:
      <div className='rounded-2xl mb-2 w-[140px] h-[117px] bg-[white] ' >

      </div>
      }
      </div>
     <div className='flex flex-col items-center' >
     <h1 className='text-[19px] leading-[22px] text-center my-2 '>{name}</h1>
    
      <h3 className='text-[12px] leading-[18px] text-center'>{subHeading}</h3>
     </div>
    </div>
  )
}

export default LitePackageCard