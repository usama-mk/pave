import React from 'react'
import arrowBlack from '../../assets/images/arrowBlack.png'
import play_icon from '../../assets/images/play_icon.png'
import mouse from '../../assets/images/mouse.png'
import { useDispatch, useSelector } from 'react-redux'
import MobNavBar from '../../components/MobNavBar'
import MobHeader from '../../components/MobHeader'



function Home() {
    const dispatch= useDispatch()
    
   
  return (
    <div className='flex flex-col items-center ' >
        {/* top */}
        <div className="homeTop homeTopBG h-[256px] w-[366px]  mt-[-50px] flex justify-center ">
                {/* header start */}
           <MobHeader/>
                {/* header ends */}


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
        <div className="homeBottom homeBottomBG w-[321px] h-[348px] ">
            {/* bottom nav */}
            <MobNavBar/>
            {/* bottom nav ends */}
        </div>
        {/* bottom ends */}

    </div>
  )
}

export default Home