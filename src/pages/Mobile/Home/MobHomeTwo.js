import React from 'react'
import MobNavBar from '../../../components/MobNavBar'

import PlayVideoButton from '../../../components/PlayVideoButton'
import WorkButton from '../../../components/WorkButton'

function MobHomeTwo() {
  return (
    <div className=' h-[100vh] w-[100vw] sec ' >
       <div className='MobHomeTwoBG h-[90vh]' >
       
        <div className=' flex flex-col items-center justify-center h-[100vh] ' >
           <h1 className='text-[70px] font-bold leading-[66px] text-[#410D7F] soText' >A-Z Service <br />
           Offerings
           </h1>
           <h4 className='text-[18px] mt-5 font-medium leading-[25px] text-white  ' >Providing all aspects of creative, digital, <br />
and marketing services in one agency</h4>

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
        </div>
       </div>

        <MobNavBar/>
       
    </div>
  )
}

export default MobHomeTwo