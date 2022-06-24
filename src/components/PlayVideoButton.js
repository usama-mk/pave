import React from 'react'
import play_icon from '../assets/images/play_icon.png'
import play_icon_black from '../assets/images/play_icon_black.png'


function PlayVideoButton({textColor, bg}) {
  return (
    <div style={{backgroundColor: bg, borderColor: bg}} className={`playVideoBtn  bg-[${bg}] px-3 py-1 h-fit border-2 border-[${bg}] rounded-[10px] w-fit flex items-center pr-9`}>
        <img src={textColor==='white'?play_icon:play_icon_black} className=' object-contain mr-4' alt="" />
        <h5 style={{color: textColor}} className={`text-sm font-bold text-center text-[10px] text-[${textColor}] font-sans `} >
        Play Video
        </h5>
       
        </div>
  )
}

export default PlayVideoButton