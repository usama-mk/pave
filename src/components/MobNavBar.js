import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { goToAbout, goToCaseStudy, goToHome, goToLearn, goToProjects, goToServices } from '../store/actions/navOptionsActions'

const NavItem=({name, selected, handleNav})=>{
    return(
        <div>
            <div className={`${selected?'bg-[black] ':'bg-[#B1B1B1]'} ${name==='Case Study'?'w-[69px]':name.length>5?'w-[48px]':'w-[36px]'} mb-3  h-[10px] `} ></div>
            <h5 onClick={handleNav} className={`${selected?'font-bold text-[black] ':'font-normal text-[#B1B1B1]'} text-[12px] ${name==='Case Study'?'mr-0':'mr-5'}`} >{name}</h5>
        </div>
    )
}

function MobNavBar({showNavBar}) {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const home= useSelector(state=> state.navOptions.home)
    const about= useSelector(state=> state.navOptions.about)
    const services= useSelector(state=> state.navOptions.services)
    const projects= useSelector(state=> state.navOptions.projects)
    const learn= useSelector(state=> state.navOptions.learn)
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
    <div className={`${showNavBar? 'visible animate__animated animate__fadeInUpBig' :'invisible'}mobileNav   pb-4 w-full bg-[#EFEFEF] 
             `}>
                <div className='bg-[#B1B1B1]  h-[10px] mt-[10px] ' >

                </div>
               <div className='flex justify-around mt-[-10px]' >
               <NavItem handleNav={()=> handleNav('home')} name="Home" selected={home} />
               <NavItem handleNav={()=> handleNav('about')} name="About" selected={about} />
               <NavItem handleNav={()=> handleNav('services')} name="Services" selected={services} />
               <NavItem handleNav={()=> handleNav('projects')} name="Projects" selected={projects} />
               <NavItem handleNav={()=> handleNav('learn')} name="Learn" selected={learn} />
               <NavItem handleNav={()=> handleNav('caseStudy')} name="Case Study" selected={caseStudy} />

               </div>
            </div>
  )
}

export default MobNavBar