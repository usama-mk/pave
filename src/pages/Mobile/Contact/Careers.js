import React from 'react'
import CareerPassionCard from '../../../components/CareerPassionCard'
import LetsTalkModal from '../../../components/LetsTalkModal'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'

function Careers() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  " >
        <div className="  w-[100vw]  flex justify-center  ">
        <MobHeader buttonTitle={`Homepage`} />
      </div>
      <div className=" mt-5 px-[10%] mb-[100px] text-left  " >
        <h1 className='text-[28px] font-bold leading-[34px] ' >Career and passion </h1>
        <h1 className='text-[28px] leading-[34px] '>should go together</h1>

        <h3 className='text-[20px] font-medium leading-[39px] mt-5 ' >Open Positions</h3>
        
            <CareerPassionCard title={`Jr. Graphic Designer`} openRoles={`6`} workType={`Los Angeles / Remote`} />

            <CareerPassionCard title={`SFX Editor`} openRoles={`2`} workType={`Orange County`} />

            <CareerPassionCard title={`Digital Marketing Manager`} openRoles={`2`} workType={`Remote`} />

            <CareerPassionCard title={`Account Manager`} openRoles={`1`} workType={`Orange County`} />

            <CareerPassionCard title={`3D Artist`} openRoles={`1`} workType={`Remote`} />
       
      </div>

      <LetsTalkModal/>
      <div
        className={`${
          true ? "visible cssanimation fadeInBottom " : "invisible"
        }     flex justify-center w-[100vw] fixed bottom-0 z-30  `}
      >
        <MobNavBar showNavBar={true} />
      </div>
    </div>
  )
}

export default Careers