import React, { useEffect, useRef, useState } from "react";
import mouse from "../../../assets/images/mouse.png";
import deskHomeBottomBG from "../../../assets/images/deskHomeBottomBG.png";
import homeTopBG from "../../../assets/images/deskTopBg.png";
import fbIcon from "../../../assets/images/fbIcon.png";
import instaIcon from "../../../assets/images/instaIcon.png";
import twitterIcon from "../../../assets/images/twitterIcon.png";
import linkedInIcon from "../../../assets/images/linkedInIcon.png";
import { useDispatch, useSelector } from "react-redux";
import '../../../App.css'

import WorkButton from "../../../components/WorkButton";
import PlayVideoButton from "../../../components/PlayVideoButton";
import { useNavigate } from "react-router-dom";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import DesktopHeader from "../../../components/DesktopHeader";
import MobNavBar from "../../../components/MobNavBar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCube, FreeMode, Mousewheel, Pagination, Scrollbar } from "swiper";
import DesktopNavBar from "../../../components/DesktopNavBar";
// import "animate.css";


function Home1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showHeading, setShowHeading] = useState(true);
  const [isHomeTwo, setIsHomeTwo] = useState(false);
  const [showSubHeading, setSubShowHeading] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
 
  const handleWorkWithUs = () => {
    navigate("/a-z");
  };


 

  return (
    <div
    style={{height: '100vh', overflowY: 'scroll'}}
      onClick={()=>{}}
      className={`${
        isHomeTwo ? "transitionH2Bg bg-[#410D7F]" : ""
      }  flex flex-col items-center overflow-x-clip bg-[#EFEFEF] w-[100%] overflow-y-scroll  home1    `}
    >
      <img
        className={`
        ${isHomeTwo ? "animate__animated animate__fadeOutUpBig " : ""}
        w-[70%] mt-[-30px] mb-auto object-contain cssanimation fadeInBottom `}
        src={homeTopBG}
        alt=""
      />

      {/* top */}
      {/*  homeTopBG */}
      <div className="homeTop absolute top-0 h-[356px] w-[100vw]  flex justify-start ">
        {/* header start */}
        <DesktopHeader />
        {/* header ends */}
      </div>
      {/* top ends */}

      {/* award win start */}
      <div className="homeMid">
     
        <div className="awardCont my-10">
          <h1
            className={` ${
              showHeading && !isHomeTwo
                ? "visible cssanimation fadeInBottom "
                : isHomeTwo
                ? "visible cssanimation fadeOut"
                : "invisible"
            } font-bold font-sans text-center text-[67px] leading-[67px] `}
          >
            Award Winning
          </h1>
          <h5
            className={`${
              showSubHeading && !isHomeTwo
                ? "visible cssanimation fadeInBottom   "
                : isHomeTwo
                ? "visible cssanimation fadeOut"
                : "invisible"
            } text-lg font-sans text-center mt-6 leading-[28px] `}
          >
            Agency that elevates your priorities by paving the way for your brand's success
          </h5>
        </div>
       
        <div
          className={`${
            showButtons && !isHomeTwo
              ? "visible cssanimation fadeInBottom "
              : isHomeTwo
              ? "visible cssanimation fadeOut"
              : "invisible"
          } homeMidButtons mt-3 flex justify-center `}
        >
          {/* btn 1 */}
          <WorkButton
            handleWorkWithUs={handleWorkWithUs}
            textColor={"black"}
            bg={"white"}
            text={"Work With Us"}
          />
          {/* btn1 ends */}

          {/* btn 2 */}
          <PlayVideoButton textColor={"white"} bg={"#363636"} />
          {/* btn 2  ends */}
        </div>
      </div>
     
      <div
        className={` ${
          isHomeTwo ? " cssanimation fadeOut" : ""
        } mouseCont flex justify-center my-3`}
      >
        <img src={`https://clipex.com.au/wp-content/uploads/2020/05/swipe-1.gif`} width={60} className="object-contain mr-5" alt="" />
      </div>
      {/* mouse cont ends */}
      <img
        className={` ${
          isHomeTwo ? " cssanimation fadeOutDownBig " : ""
        } w-[70%] mt-auto object-contain cssanimation fadeInBottom `}
        src={deskHomeBottomBG}
        alt=""
      />
     
      
    </div>
  );
}



function Home() {
  const [homeTwoDisplay, setHomeTwoDisplay]= useState(false)
  const [homeThreeDisplay, setHomeThreeDisplay]= useState(false)
  return (
    <div className="h-[100%]" >
        <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          
          
        }}
      
      zoom={true}
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
     
        onSlideChange={(swiper)=> {
            if(swiper.activeIndex===1){
                setHomeTwoDisplay(true)
            }
            else if(swiper.activeIndex===2){
                setHomeThreeDisplay(true)
            }
        }}
         
        // onScroll={()=> setHomeTwoDisplay(true)}
        modules={[Mousewheel, Pagination, Scrollbar, EffectCube ]}
        className="mySwiper"
      >
        <SwiperSlide  ><Home1/></SwiperSlide>
        <SwiperSlide > {<HomeTwo homeTwoDisplay={homeTwoDisplay}/>} </SwiperSlide>
        <SwiperSlide> <HomeThree homeThreeDisplay={homeThreeDisplay} /> </SwiperSlide>
         
      </Swiper>
      
        <div
        className={`${
          true
            ? "visible cssanimation fadeInBottom "
            : "invisible"
        }     flex justify-end fixed bottom-0 right-0 z-30 mr-5 `}
      >
        
       
      <DesktopNavBar showNavBar={true} />
        
      </div>

      <div
        className={`${
          true
            ? "visible cssanimation fadeInBottom "
            : "invisible"
        }     flex justify-start items-center fixed left-16 bottom-8 z-30 mr-5 `}
      >
        
       
     <img src={fbIcon} className='object-contain w-[12px] h-[18px] mr-8 ' alt="" />
     <img src={instaIcon} className='object-contain w-[18px] h-[18px] mr-8 ' alt="" />
     <img src={twitterIcon} className='object-contain w-[18px] h-[18px] mr-8 ' alt="" />
     <img src={linkedInIcon} className='object-contain w-[18px] h-[18px] mr-8 ' alt="" />
        
      </div>
     
    </div>
    
     
      
  )
}

export default Home;
