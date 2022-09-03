import React from 'react'
import { useDispatch } from 'react-redux'
import mobile_logo from '../assets/images/mobile_logo.png'
import mobile_logo_white from '../assets/images/mobile_logo_white.png'
import servicesHeader from '../assets/images/servicesHeader.png'
import { openLeadPopUp } from '../store/actions/leadPopupACtions'



function DesktopHeader({purpleTheme, redTheme, buttonTitle, yellowTheme, }) {
 

  const dispatch= useDispatch()

  return (
    <div onClick={()=>  dispatch(openLeadPopUp())} style={{backgroundColor: purpleTheme?`#410D7F`:redTheme?'#FD4C3C':yellowTheme?'#FEB52B':'', opacity:purpleTheme || redTheme || yellowTheme?1:'' }} className="topHeader pt-[20px] pb-[10px] pl-[6%] pr-[6%] flex justify-between w-[38%]  opacity-100 h-fit">
    <div className="logoCont flex">
        {
          purpleTheme || redTheme?
          <img src={mobile_logo_white} className='object-contain w-[52px] h-[53px] '  alt="" />
          :
          <img src={mobile_logo} className='object-contain w-[52px] h-[53px] '  alt="" />}
        <h3 style={{color:purpleTheme || redTheme?"white":""}} className='uppercase font-bold text-left text-sm mt-[-5px] ml-[10px] leading-4 ' >pave <br />
        creative <br />
        marketing <br />
        agency </h3>
    </div>
{
  purpleTheme?
  // <img src={servicesHeader} className='object-contain' alt="" />
  <div style={{backgroundColor: purpleTheme?'#410D7F':yellowTheme?'#FEB52B':'white', color:purpleTheme?'white':'', borderColor:purpleTheme?'white':''}} className="letsTalk bg-[#410D7F] px-4 py-3 h-fit border-2 border-black rounded-[10px] text-sm font-bold text-center flex items-center justify-center ml-12 ">
  <span > {buttonTitle?buttonTitle:'Lets Talk'}</span>
</div>
  :
  redTheme?
  // <img src={servicesHeader} className='object-contain' alt="" />
  <div style={{backgroundColor: redTheme?'#FD4C3C':'white', color:'white', borderColor:'white'}} className="letsTalk bg-[#FD4C3C] px-4 py-3 h-fit border-2 border-white rounded-[10px] text-sm font-bold text-center flex items-center justify-center ml-12 ">
  <span > {buttonTitle?buttonTitle:'Lets Talk'}</span>
</div>:

  <div style={{backgroundColor: purpleTheme?purpleTheme:yellowTheme?'#FEB52B':'white', color:purpleTheme?'white':'', borderColor:purpleTheme?'white':''}} className="letsTalk bg-[white] px-4 py-3 h-fit border-2 border-black rounded-[10px] text-sm font-bold text-center flex items-center justify-center ml-12 ">
  <span > {buttonTitle?buttonTitle:'Lets Talk'}</span>
</div>
}
</div>
  )
}

export default DesktopHeader