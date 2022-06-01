import React from 'react'
import arrowBlack from '../assets/images/arrowBlack.png'
import arrowYellow from '../assets/images/arrowYellow.png'

function WorkButton({textColor, bg, handleWorkWithUs}) {
  return (
    <div style={{borderColor: textColor, backgroundColor: bg}} onClick={handleWorkWithUs} className={`workWithUsBtn bg-[${bg}] px-3 py-1 h-fit border-2 border-[${textColor}] rounded-[10px] w-fit flex items-center mr-5 `}>
            <h5 style={{color: textColor}} className={`text-[${textColor}] text-sm font-bold text-center text-[10px] `} >

            Work With Us
            </h5>
            <img src={textColor==='black'?arrowBlack:arrowYellow} className=' object-contain ml-4' alt="" />
        </div>
  )
}

export default WorkButton