import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { goToAbout, goToCaseStudy, goToHome, goToLearn, goToProjects, goToServices } from '../store/actions/navOptionsActions'

const NavItem=({name, selected, handleNav})=>{
    return(
        <div className='grid grid-cols-2 gap-16 relative z-10' >
             <h5 onClick={handleNav} className={`${selected?'font-bold text-[black] ':'font-normal text-[#B1B1B1]'} text-[12px] w-[50px] mr-5 text-right } `} >{name}</h5>

            <div className={`${selected?'bg-[black] ':'bg-[#B1B1B1]'} h-[48px] mb-3  w-[10px] `} ></div>
           
        </div>
    )
}

function DesktopNavBar({showNavBar}) {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const home= useSelector(state=> state.navOptions.home)
    const about= useSelector(state=> state.navOptions.about)
    const services= useSelector(state=> state.navOptions.services)
    const projects= useSelector(state=> state.navOptions.projects)
    const learn= useSelector(state=> state.navOptions.learn)
    const process= useSelector(state=> state.navOptions.process)
    const caseStudy= useSelector(state=> state.navOptions.caseStudy)
    

    const handleNav=(address)=>{
        if(address==="home"){
            dispatch(goToHome())
            navigate(`/`)
        }
        else if(address==="about"){
             dispatch(goToAbout())
             navigate(`/${address}`)
        }
        else if(address==="services"){
            dispatch(goToServices())
            navigate(`/${address}`)
       }
       else if(address==="projects"){
        dispatch(goToProjects())
        navigate(`/${address}`)
   }
        else if(address==="learn"){
            dispatch(goToLearn())
            navigate(`/${address}`)
        }
        else if(address==="caseStudy"){
            dispatch(goToCaseStudy())
            navigate(`/${address}`)
        }
    }
  return (
    <div className={`${showNavBar? 'visible cssanimation   fadeInBottom' :'invisible'} w-[108px] grid grid-cols-3   pb-2 bg-transparent
             `}>
                
               <div className='flex flex-col col-span-2 ' >
               <NavItem handleNav={()=> handleNav('home')} name="Home" selected={home} />
               <NavItem handleNav={()=> handleNav('about')} name="About" selected={about} />
               <NavItem handleNav={()=> handleNav('services')} name="Services" selected={services} />
               <NavItem handleNav={()=> handleNav('projects')} name="Projects" selected={projects} />
               <NavItem handleNav={()=> handleNav('learn')} name="Learn" selected={learn} />
               <NavItem handleNav={()=> handleNav('process')} name="Process" selected={process} />
               <NavItem handleNav={()=> handleNav('contactus')} name="Contact" selected={caseStudy} />

               </div>

               <div className='bg-[#B1B1B1] w-[10px] h-[380px] mt-[10px] ml-[-4px] relative z-0  ' >

                </div>
            </div>
  )
}

export default DesktopNavBar