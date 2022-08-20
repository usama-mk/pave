import React from 'react'

function ContactPoints({points}) {
  return (
    <div className='' >
        
        {
            points.map(point=>
                <div className='grid grid-cols-10 gap-2 items-center ' >
                <div className='h-[9px] w-[9px] bg-[#FEB52B] rounded-full mb-2 ' >

</div>
<h4 className='text-[24px] leading-[35px] text-left col-span-9 mb-2 '>{point}</h4>
                </div>
                
                )
        }
    </div>
  )
}

export default ContactPoints