import React from 'react'
import mobile_logo from '../../assets/images/mobile_logo.png'


function Home() {
  return (
    <div className='flex flex-col items-center ' >
        {/* top */}
        <div className="homeTop homeTopBG h-[256px] w-[366px]  mt-[-50px] flex justify-center ">

            <div className="topHeader pt-[70px] pb-[10px] flex justify-between w-[100%] bg-[#EFEFEF] opacity-80 h-fit">
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

        </div>
        {/* top ends */}

        {/* award win start */}
        <div className="awardCont">
            <h1 className='uppercase font-bold text-center text-[85px] leading-[80px]' >award <br /> winning</h1>
        </div>
    </div>
  )
}

export default Home