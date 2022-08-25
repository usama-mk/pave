import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'

function ContactUs() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className='mb-[100px] px-[6%]'>
      ContactUs
      </div>
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

export default ContactUs