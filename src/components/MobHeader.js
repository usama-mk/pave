import React from 'react'
import mobile_logo from '../assets/images/mobile_logo.png'


function MobHeader() {
  return (
    <div className="topHeader pt-[20px] pb-[10px] flex justify-between w-[100%] bg-[#EFEFEF] opacity-80 h-fit">
    <div className="logoCont flex">
        <img src={mobile_logo} className='object-contain w-[52px] h-[53px] '  alt="" />
        <h3 className='uppercase font-bold text-left text-sm mt-[-5px] ml-[10px] leading-4 ' >pave <br />
        creative <br />
        marketing <br />
        agency </h3>
    </div>

    <div className="letsTalk bg-[white] px-5 py-3 h-fit border-2 border-black rounded-[10px] text-sm font-bold text-center  ">
        Lets Talk
    </div>
</div>
  )
}

export default MobHeader