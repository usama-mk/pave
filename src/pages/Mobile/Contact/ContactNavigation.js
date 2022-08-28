import React from 'react'
import LetsTalkModal from '../../../components/LetsTalkModal'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import contactImageOne from '../../../assets/images/contactImageOne.png'
import contactImageTwo from '../../../assets/images/contactImageTwo.png'
import contactImageThree from '../../../assets/images/contactImageThree.png'
// import WorkButton from '../../../components/WorkButton'
import arrowBlack from '../../../assets/images/arrowBlack.png'
import arrowYellow from '../../../assets/images/arrowYellow.png'

function ContactNavigation() {
    const [contact, setContact] = React.useState([contactImageOne, contactImageTwo, contactImageThree ])
  return (
    <div  style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
        <div className="  w-[100vw]  flex justify-center  ">
        <MobHeader  purpleTheme={true} />
      </div>
        <div className='pb-[100px] text-left px-[6%] text-white bg-[#410D7F] mt-[-10px] flex flex-col flex-1 '  >
            <h1 className='text-[27px] font-bold leading-[31px] mt-12 max-w-[211px] ' >What Our Client 
Are Saying !</h1>

            <h5 className='text-[20px] leading-[30px] mt-8 ' >
            The service that is served is so very charming with friendly waiters and also a comfortable place. <br />
Customers feel at home for a long time in this shop and also the tea shop owner provides free warm
and pastries making the atmosphere so beautiful, and this is a very pleasant experience for me. <br />
And I will visit here again every weekend with my family.”
            </h5>
            <div className='overflow-x-auto flex mt-5' >
           <img src={contactImageOne} className='object-contain w-[220px] mr-2 h-[272px] ' alt="" />

           <img src={contactImageTwo} className='object-contain w-[86px] mr-2 h-[272px] ' alt="" />

           <img src={contactImageThree} className='object-contain w-[86px] mr-2 h-[272px] ' alt="" />
            </div>

            <div className='flex flex-col items-center mt-5 ' >
            <WorkButton
        handleWorkWithUs={()=>{}}
        textColor={"#FEB52B"}
        bg={"#410D7F"}
        p4={true}
        text={"Work With Us"}
      />

      <div className='bg-[#FEB52B] rounded-[10px] mt-3 h-[48px] flex items-center justify-center py-4 px-6' >
        <h5 className='text-[13px] font-bold leading-[23px] text-black ' >Frequently Asked Questions</h5>
      </div>
            </div>
        </div>
        <LetsTalkModal />
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

export default ContactNavigation



function WorkButton({textColor, bg, handleWorkWithUs, text}) {
  return (
    <div style={{borderColor: textColor}} onClick={handleWorkWithUs} className={` bg-[${bg}] px-3 py-2 h-fit border-2 rounded-[10px] w-fit flex items-center  `}>
            <h5 style={{color: textColor}} className={` text-sm font-bold text-center text-[13px] font-sans `} >

            {text}
            </h5>
            <img src={textColor==='black'?arrowBlack:arrowYellow} className=' object-contain ml-4' alt="" />
        </div>
  )
}