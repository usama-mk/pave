import React from 'react'

function TeamMember({memImg, name, heading, subHeading, desktop}) {
  return (
    <div className='flex flex-col  ' >
      {
      memImg?<img src={memImg} width={149} height={117} className='object-contain mb-2' alt="" />:
      <div className='rounded-2xl mb-2 w-[140px] h-[117px] bg-[white] ' >

      </div>
      }
     <div style={{textAlign: desktop?'left':""}} className='ml-3 ' >
     <h1 className='text-[18px] flex justify-start '>{name}</h1>
      <h2 className='text-[13px] flex justify-start '>{heading}</h2>
      <h3 className='text-[9px] flex justify-start '>{subHeading}</h3>
     </div>
    </div>
  )
}

export default TeamMember