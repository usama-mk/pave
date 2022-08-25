import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import mainCopyWriting from '../../../assets/images/mainCopyWriting.png'
import dmSecrets from '../../../assets/images/dmSecrets.png'
import printMarketing from '../../../assets/images/printMarketing.png'


function Main() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className='flex flex-col items-center mb-[100px] px-[16%]  '>
      <ImgSub img={mainCopyWriting} sub={`Copywriting`} />
      <ImgSub img={dmSecrets} sub={`Digital marketing secrets`} />
      <ImgSub img={printMarketing} sub={`Print Marketing`} />
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

export default Main

const ImgSub=({img, sub})=>{
    return(
        <div className='my-8' >
             <img src={img} className='object-contain w-[300px] rounded-xl ' alt="" />
             <h5 className='text-[13px] font-semibold leading-[14px] mt-2 ' >{sub}</h5>

        </div>
    )
}