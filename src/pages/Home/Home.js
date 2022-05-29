import React from 'react'
import mobile_logo from '../../assets/images/mobile_logo.png'
import arrowBlack from '../../assets/images/arrowBlack.png'
import play_icon from '../../assets/images/play_icon.png'
import mouse from '../../assets/images/mouse.png'

const NavItem=({name, selected})=>{
    return(
        <div>
            <div className={`${selected?'bg-[black] ':'bg-[#B1B1B1]'} ${name==='Case Study'?'w-[75px]':name.length>5?'w-[55px]':'w-[43px]'} mb-3  h-[10px] `} ></div>
            <h5 className={`${selected?'font-bold text-[black] ':'font-normal text-[#B1B1B1]'} text-[14px] text-[] ${name==='Case Study'?'mr-0':'mr-5'}`} >{name}</h5>
        </div>
    )
}

function Home({home}) {
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
        <div className="homeMid">
        <div className="awardCont mt-10">
            <h1 className=' font-bold text-center text-[85px] leading-[80px]' >Award <br /> Winning</h1>
            <h5 className='text-lg text-center mt-5 ' >Creative agency that provides  <span className='font-bold' >a full</span><br /> range of marketing services </h5>
        </div>
        {/* buttons */}
        <div className="homeMidButtons mt-5 flex justify-center">
            {/* btn 1 */}
        <div className="workWithUsBtn bg-[white] px-5 py-3 h-fit border-2 border-black rounded-[10px] w-fit flex items-center mr-5 ">
            <h5 className='  text-sm font-bold text-center text-[11px] ' >

            Work With Us
            </h5>
            <img src={arrowBlack} className=' object-contain ml-4' alt="" />
        </div>
        {/* btn1 ends */}

        {/* btn 2 */}
        <div className="playVideoBtn  bg-[#363636] px-5 py-3 h-fit border-2 rounded-[10px] w-fit flex items-center pr-9">
        <img src={play_icon} className=' object-contain mr-4' alt="" />
        <h5 className='  text-sm font-bold text-center text-[11px] text-[white] ' >
        Play Video
        </h5>
       
        </div>
        {/* btn 2  ends */}
        </div>
        </div>
        {/* award wins end */}

        {/* mouse cont */}
        <div className="mouseCont flex justify-center my-5">
            <img src={mouse} className='object-contain' alt="" />
        </div>
        {/* mouse cont ends */}

        {/* bottom start */}
        <div className="homeBottom homeBottomBG w-[321px] h-[348px]  ">
            {/* bottom nav */}
            <div className="mobileNav fixed bottom-0 left-0 mt-[100%] bg-[#EFEFEF] w-[100vw] p-5 
             ">
                <div className='bg-[#B1B1B1] w-[90vw] h-[10px] mt-[45px] ' >

                </div>
               <div className='flex mt-[-10px]' >
               <NavItem name="Home" selected={home} />
               <NavItem name="About" selected={false} />
               <NavItem name="Services" selected={false} />
               <NavItem name="Projects" selected={false} />
               <NavItem name="Learn" selected={false} />
               <NavItem name="Case Study" selected={false} />

               </div>
            </div>
            {/* bottom nav ends */}
        </div>
        {/* bottom ends */}

    </div>
  )
}

export default Home