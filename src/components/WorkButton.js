import React from 'react'
import arrowBlack from '../assets/images/arrowBlack.png'
import arrowYellow from '../assets/images/arrowYellow.png'

function WorkButton({textColor, bg, handleWorkWithUs, p4, text}) {
  return (
    <div style={{borderColor: p4?bg:textColor, backgroundColor: bg}} onClick={handleWorkWithUs} className={`workWithUsBtn bg-[${bg}] px-3 py-2 h-fit border-2 border-[${textColor}] rounded-[10px] w-fit flex items-center mr-5 `}>
            <h5 style={{color: textColor}} className={`text-[${textColor}] text-sm font-bold text-center text-[13px] font-sans `} >

            {text}
            </h5>
            <img src={textColor==='black'?arrowBlack:arrowYellow} className=' object-contain ml-4' alt="" />
        </div>
  )
}

export default WorkButton