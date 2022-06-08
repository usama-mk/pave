import React from 'react'
import PlayVideoButton from '../../../components/PlayVideoButton'
import homeThreeMovies from "../../../assets/images/homeThreeMovies.png";
import straight_arrow from "../../../assets/images/straight_arrow.png";
import rings from "../../../assets/images/rings.png";
import WorkButton from '../../../components/WorkButton'
import MobNavBar from '../../../components/MobNavBar';

function MobHomeThree() {
  return (
    <div className=' h-[100vh] w-[100vw] sec ' >
       <div className='bg-[#FD4C3C] h-[40%] ' >
       <div className='flex' >
       <img src={rings} className='object-contain mt-28 mr-12 ml-[-60px]' alt="" />

<img src={homeThreeMovies} className='object-cover mt-[-70px]'  alt="" />
       </div>
           <h1 className='text-[60px] mt-[30px] font-bold leading-[66px] text-[white] ' >Performance 
           </h1>
       </div>
       
        <div className='h-[60%] bg-[#410D7F] ' >
        <div className=' flex flex-col items-center  h-[100vh] ' >
           <h1 className='text-[70px] font-bold leading-[66px] text-[white] ' >
           Based
           </h1>
           <h4 className='text-[16px] mt-5 font-medium leading-[25px] text-white  ' >Marketing agency that focuses on your
 <br />
 ROI and metrics that matter for <br /> your brand & business
</h4>

  {/* btns start */}
<div className="homeMidButtons mt-5 flex justify-center">
            {/* btn 1 */}
        <WorkButton text={"Work With Us"} textColor={'#FEB92B'} bg={'#410D7F'} />
        {/* btn1 ends */}

        {/* btn 2 */}
        <PlayVideoButton textColor={'black'} bg={'#FEB92B'} />
        {/* btn 2  ends */}
        </div>
        {/* btns end */}
        <div className="mouseCont flex justify-center my-3">
        <img src={straight_arrow} className="object-contain m-5 " alt="" />
      </div>
      {/* bottom image */}
      <div>
      <img src={homeThreeMovies} className='object-cover ml-[-40%] mt-[-50px] '  alt="" />
      </div>
      {/* bottom image end */}
        </div>
        </div>
         {/* mouse cont */}
     
 

        <MobNavBar/>
       
    </div>
  )
}

export default MobHomeThree