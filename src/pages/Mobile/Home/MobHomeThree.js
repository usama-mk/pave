import React, { useEffect, useState } from 'react'
import PlayVideoButton from '../../../components/PlayVideoButton'
import homeThreeMovies from "../../../assets/images/homeThreeMovies1.png";
// import homeThreeMovies from "../../../assets/images/homeThreeMovies.png";
import straight_arrow from "../../../assets/images/straight_arrow.png";
import rings from "../../../assets/images/rings.png";
import WorkButton from '../../../components/WorkButton'
import MobNavBar from '../../../components/MobNavBar';
import MobHeader from '../../../components/MobHeader';
import { useNavigate } from 'react-router-dom';

function MobHomeThree({homeThreeDisplay}) {
  const [showHeading, setShowHeading] = useState(true);
  const [isHomeTwo, setIsHomeTwo] = useState(false);
  const [showSubHeading, setSubShowHeading] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
  const [showNavBar, setShowNavBar] = useState(true);
  const navigate = useNavigate();

  const handleWorkWithUs = () => {
    navigate("/a-z");
  };
 
  useEffect(() => {
    // setTimeout(() => {
    //   setShowNavBar(true);
    // }, 1500);
    // setTimeout(() => {
    //   setShowHeading(true);
    //   setShowNavBar(true);
    // }, 1500);
    // setTimeout(() => {
    //   setSubShowHeading(true);
    // }, 2000);
    // setTimeout(() => {
    //   setShowButtons(true);
    // }, 2800);
  }, []);
  const handleOnHomeClick = () => {
    setIsHomeTwo(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
if(homeThreeDisplay){


  return (
    <div onClick={handleOnHomeClick} className=' flex flex-col  max-h-[93vh] w-[100vw]  bg-[#410D7F] overflow-x-clip sec' >
       <div className="homeTop absolute top-0 visible z-10 h-[356px] w-[100vw]  flex justify-center ">
          <MobHeader />
        </div>
       <div className='bg-[#FD4C3C] h-[40%] flex flex-col justify-between  cssanimation sequence  fadeInDownBigz' >
       <div className={`
      

       flex justify-center items-center `} >
       <img src={rings} className={`
        ${
          showHeading && !isHomeTwo
            ? "visible cssanimation sequence  fadeInBottom":'invisible'}
       object-contain mt-28 mr-8 ml-[-10px] `} alt="" />

<img src={homeThreeMovies} className={`
 ${
  showButtons && !isHomeTwo
    ? `visible cssanimation sequence  fadeInBottom`:'invisible'}
object-cover mt-[-70px] max-h-52 `}  alt="" />
       </div>
           
           <div className='flex justify-center items-end   ' >
           <h1 className={`
           ${
            showHeading && !isHomeTwo
              ? "visible cssanimation sequence fadeInBottom  "
              : isHomeTwo
              ? "visible animate__animated  fadeOut"
              : "invisible"
          }
           text-[60px] font-bold leading-[66px] text-[white] text-center  `} >Performance 
           </h1>
           </div>
       </div>
       
        <div className=' bg-[#410D7F] ' >
        <div className=' flex flex-col items-center justify-center ' >
           <h1 className={`
            ${
              showHeading && !isHomeTwo
                ? "visible cssanimation sequence  fadeInBottom"
                : isHomeTwo
                ? "visible animate__animated fadeOut"
                : "invisible"
            }
           text-[70px] font-bold leading-[66px] text-[white] `} >
           Based
           </h1>
           <h4 className={`
            ${
              showSubHeading && !isHomeTwo
                ? "visible cssanimation sequence  fadeInBottom"
                : isHomeTwo
                ? "visible animate__animated fadeOut"
                : "invisible"
            }
           text-[16px] mt-5 font-medium leading-[25px] text-white  `} >Marketing agency that focuses on your
 <br />
 ROI and metrics that matter for <br /> your brand & business
</h4>

  {/* btns start */}
<div className={`
${
  showButtons && !isHomeTwo
    ? "visible cssanimation sequence fadeInBottom"
    : isHomeTwo
    ? "visible animate__animated animate__fadeOut"
    : "invisible"
}
homeMidButtons mt-5 flex justify-center`}>
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
      <img src={homeThreeMovies} className={`
       ${
        showSubHeading && !isHomeTwo
          ? "visible cssanimation sequence fadeInBottom":'invisible'}
      object-cover ml-[-40%] mt-[-50px] `}  alt="" />
      </div>
      {/* bottom image end */}
        </div>
        </div>
         {/* mouse cont */}
     
 

         <div
        className={`${
          showNavBar
            ? "visible cssanimation sequence fadeInBottom"
            : "invisible"
        }     flex justify-center w-[100%] fixed bottom-0 left-0 z-30 `}
      >
        
       
      <MobNavBar showNavBar={showNavBar} />
        
      </div>
       
    </div>
  )
       }
}

export default MobHomeThree