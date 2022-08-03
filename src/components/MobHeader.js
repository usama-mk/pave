import React from 'react'
import mobile_logo from '../assets/images/mobile_logo.png'
import mobile_logo_white from '../assets/images/mobile_logo_white.png'
import servicesHeader from '../assets/images/servicesHeader.png'


function MobHeader({purpleTheme}) {
  return (
    <div style={{backgroundColor: purpleTheme?`#410D7F`:'', opacity:purpleTheme?1:'' }} className="topHeader pt-[20px] pb-[10px] pl-[6%] pr-[6%] flex justify-between w-[100%] bg-[#EFEFEF] opacity-80 h-fit">
    <div className="logoCont flex">
        {
          purpleTheme?
          <img src={mobile_logo_white} className='object-contain w-[52px] h-[53px] '  alt="" />
          :
          <img src={mobile_logo} className='object-contain w-[52px] h-[53px] '  alt="" />}
        <h3 style={{color:purpleTheme?"white":""}} className='uppercase font-bold text-left text-sm mt-[-5px] ml-[10px] leading-4 ' >pave <br />
        creative <br />
        marketing <br />
        agency </h3>
    </div>
{
  purpleTheme?
  <img src={servicesHeader} className='object-contain' alt="" />
  :

  <div style={{backgroundColor: purpleTheme?purpleTheme:'white', color:purpleTheme?'white':'', borderColor:purpleTheme?'white':''}} className="letsTalk bg-[white] px-4 py-3 h-fit border-2 border-black rounded-[10px] text-sm font-bold text-center flex items-center justify-center  ">
  <span > Lets Talk</span>
</div>
}
</div>
  )
}

export default MobHeader