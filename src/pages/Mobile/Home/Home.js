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
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import clamp from 'lodash.clamp'
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
      }  flex flex-col items-center overflow-x-clip  `}
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
            } font-bold text-center text-[85px] leading-[65px] `}
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
            } text-lg text-center mt-6 leading-[20px] `}
          >
            Creative agency that provides{" "}
            <span className="font-bold">a full</span>
            <br /> range of marketing services{" "}
          </h5>
        </div>
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
        <img src={mouse} width={20} className="object-contain" alt="" />
      </div>
      {/* mouse cont ends */}
      <img
        className={` ${
          isHomeTwo ? "animate__animated animate__fadeOutDownBig " : ""
        } w-[336px] h-full animate__animated animate__fadeInUpBig`}
        src={homeBottomBG}
        alt=""
      />
      {/* bottom start */}
      {/* homeBottomBG */}


      <div
        className={`${
          showNavBar
            ? "visible animate__animated animate__fadeInUpBig"
            : "invisible"
        }     flex justify-center `}
      >
        
       
      <MobNavBar showNavBar={showNavBar} />
        
      </div>

      {/* bottom ends */}
      {/* <MobHomeTwo />
      <MobHomeThree/> */}
    </div>
  );
}




function Viewpager() {
  const [homeTwoDisplay, setHomeTwoDisplay]= useState(false)
  const [homeThreeDisplay, setHomeThreeDisplay]= useState(false)
  const pages = [
    <Home1/>,
   <MobHomeTwo homeTwoDisplay={homeTwoDisplay} />,
    <MobHomeThree homeThreeDisplay={homeThreeDisplay} />,
    'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  ]
  const index = useRef(0)
  const width = window.innerWidth

  const [props, api] = useSprings(pages.length, i => ({
    x: i * width,
    scale: 1,
    display: 'block',
  }))
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
    if (active && Math.abs(mx) > width / 2) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
     if(index.current==1){
      setHomeTwoDisplay(true)
     }
     if(index.current==2){
      setHomeThreeDisplay(true)
     }
      cancel()
    }
    api.start(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - Math.abs(mx) / width / 2 : 1
      return { x, scale, display: 'block' }
    })
  })
  return (
    <div className='wrapper'>
      {props.map(({ x, display, scale }, i) => (
        <animated.div className='page' {...bind()} key={i} style={{ display, x }}>
          {/* <animated.div style={{ scale, backgroundImage: `url(${pages[i]})` }}/> */}
          <animated.div style={{ scale }}>
            {pages[i]}
            
            </animated.div> 
        </animated.div>
      ))}
    </div>
  )
}
function Home() {
  return (
    <div className="flex items-center justify-center h-[100%]">
      <Viewpager />
    </div>
  )
}

export default Home;
