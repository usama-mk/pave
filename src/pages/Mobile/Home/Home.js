import React, { useEffect, useRef, useState } from "react";
import mouse from "../../../assets/images/mouse.png";
import homeBottomBG from "../../../assets/images/homeBottomBG.png";
import homeTopBG from "../../../assets/images/homeTopBG.png";
import A1 from "../../../assets/images/A1.png";
import A2 from "../../../assets/images/A2.png";
import A3 from "../../../assets/images/A3.png";
import { useDispatch, useSelector } from "react-redux";
import '../../../App.css'

import WorkButton from "../../../components/WorkButton";
import PlayVideoButton from "../../../components/PlayVideoButton";
import { useNavigate } from "react-router-dom";
import MobHomeTwo from "./MobHomeTwo";
import MobHomeThree from "./MobHomeThree";
import MobHeader from "../../../components/MobHeader";
import MobNavBar from "../../../components/MobNavBar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCube, FreeMode, Mousewheel, Pagination, Scrollbar } from "swiper";
import "animate.css";


function Home1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showHeading, setShowHeading] = useState(false);
  const [isHomeTwo, setIsHomeTwo] = useState(false);
  const [showSubHeading, setSubShowHeading] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const handleWorkWithUs = () => {
    navigate("/a-z");
  };


  useEffect(() => {
    setTimeout(() => {
      setShowNavBar(true);
    }, 1500);
    setTimeout(() => {
      setShowHeading(true);
      setShowNavBar(true);
    }, 1500);
    setTimeout(() => {
      setSubShowHeading(true);
    }, 2000);
    setTimeout(() => {
      setShowButtons(true);
    }, 2800);
  }, []);

  const handleOnHomeClick = () => {
    setIsHomeTwo(true);
    setTimeout(() => {
      navigate("/home2");
    }, 2000);
  };

  return (
    <div
      onClick={handleOnHomeClick}
      className={`${
        isHomeTwo ? "transitionH2Bg bg-[#410D7F]" : ""
      }  flex flex-col items-center overflow-x-clip bg-[#EFEFEF] w-[100%] max-h-[93vh] home1    `}
    >
      <img
        className={`
        ${isHomeTwo ? "animate__animated animate__fadeOutUpBig " : ""}
        w-[336px] h-[170px] animate__animated animate__fadeInDownBig `}
        src={homeTopBG}
        alt=""
      />

      {/* top */}
      {/*  homeTopBG */}
      <div className="homeTop absolute top-0 h-[356px] w-[100vw]  flex justify-center ">
        {/* header start */}
        <MobHeader />
        {/* header ends */}
      </div>
      {/* top ends */}

      {/* award win start */}
      <div className="homeMid">
     
        <div className="awardCont mt-3">
          <h1
            className={` ${
              showHeading && !isHomeTwo
                ? "visible animate__animated animate__fadeIn"
                : isHomeTwo
                ? "visible animate__animated animate__fadeOut"
                : "invisible"
            } font-bold font-sans text-center text-[85px] leading-[65px] `}
          >
            Award <br /> Winning
          </h1>
          <h5
            className={`${
              showSubHeading && !isHomeTwo
                ? "visible animate__animated animate__fadeInUp"
                : isHomeTwo
                ? "visible animate__animated animate__fadeOut"
                : "invisible"
            } text-lg font-sans text-center mt-6 leading-[20px] `}
          >
            Creative agency that provides{" "}
            <span className="font-bold">a full</span>
            <br /> range of marketing services{" "}
          </h5>
        </div>
        {/* <div style={{height: '340px', overflowY:'scroll'}} >
       <div style={{height: '40px', overflowY:'scroll'}}>
       hi <br />
        hi <br />
        hi <br />
        hi <br />
        hi <br />
        hi <br />
        hi <br />
        hi <br />
       </div>
        </div> */}
        {/* buttons */}
        <div
          className={`${
            showButtons && !isHomeTwo
              ? "visible animate__animated animate__fadeIn"
              : isHomeTwo
              ? "visible animate__animated animate__fadeOut"
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
      {/* award wins end */}

      {/* mouse cont */}
      <div
        className={` ${
          isHomeTwo ? "animate__animated animate__fadeOut" : ""
        } mouseCont flex justify-center my-3`}
      >
        <img src={`https://clipex.com.au/wp-content/uploads/2020/05/swipe-1.gif`} width={60} className="object-contain mr-5" alt="" />
      </div>
      {/* mouse cont ends */}
      <img
        className={` ${
          isHomeTwo ? "animate__animated animate__fadeOutDownBig " : ""
        } w-[336px] animate__animated animate__fadeInUpBig`}
        src={homeBottomBG}
        alt=""
      />
     
        
      
      <div
        className={`${
          showNavBar
            ? "visible animate__animated animate__fadeInUpBig"
            : "invisible"
        }     flex justify-center w-[100vw] fixed bottom-0 left-0 z-30  `}
      >
        
       
      <MobNavBar showNavBar={showNavBar} />
        
      </div>
     
        

      {/* bottom ends */}
      {/* <MobHomeTwo />
      <MobHomeThree/> */}
    </div>
  );
}



function Home() {
  const [homeTwoDisplay, setHomeTwoDisplay]= useState(false)
  const [homeThreeDisplay, setHomeThreeDisplay]= useState(false)
  return (
    
    <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        
        // mousewheel={true}
        pagination={{
          clickable: true,
          
          
        }}
        // pagination={{
        //   clickable: true,
        // }}
      zoom={true}
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
        
        // freeModeSticky={ false}
        // freeMode={true}
        
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
        <SwiperSlide  ><Home1 /></SwiperSlide>
        <SwiperSlide > {homeTwoDisplay?<MobHomeTwo homeTwoDisplay={homeTwoDisplay}/>:'loading..'} </SwiperSlide>
        <SwiperSlide> {homeThreeDisplay?<MobHomeThree homeThreeDisplay={homeThreeDisplay} />:'loading..'} </SwiperSlide>
         
      </Swiper>
     
      
  )
}

export default Home;
