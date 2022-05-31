import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goToAbout, goToCaseStudy, goToHome, goToLearn, goToProjects, goToServices } from '../store/actions/navOptionsActions'

const NavItem=({name, selected, handleNav})=>{
    return(
        <div>
            <div className={`${selected?'bg-[black] ':'bg-[#B1B1B1]'} ${name==='Case Study'?'w-[75px]':name.length>5?'w-[55px]':'w-[43px]'} mb-3  h-[10px] `} ></div>
            <h5 onClick={handleNav} className={`${selected?'font-bold text-[black] ':'font-normal text-[#B1B1B1]'} text-[14px] ${name==='Case Study'?'mr-0':'mr-5'}`} >{name}</h5>
        </div>
    )
}

function MobNavBar() {
    const dispatch= useDispatch()
    const home= useSelector(state=> state.navOptions.home)
    const about= useSelector(state=> state.navOptions.about)
    const services= useSelector(state=> state.navOptions.services)
    const projects= useSelector(state=> state.navOptions.projects)
    const learn= useSelector(state=> state.navOptions.learn)
    const caseStudy= useSelector(state=> state.navOptions.caseStudy)
    

    const handleNav=(address)=>{
        if(address==="home"){
            dispatch(goToHome())
        }
        else if(address==="about"){
             dispatch(goToAbout())
        }
        else if(address==="services"){
            dispatch(goToServices())
       }
       else if(address==="projects"){
        dispatch(goToProjects())
   }
        else if(address==="learn"){
            dispatch(goToLearn())
        }
        else if(address==="caseStudy"){
            dispatch(goToCaseStudy())
        }
    }
  return (
    <div className="mobileNav fixed bottom-0 left-0 mt-[100%] bg-[#EFEFEF] w-[100vw] p-5 
             ">
                <div className='bg-[#B1B1B1] w-[90vw] h-[10px] mt-[10px] ' >

                </div>
               <div className='flex mt-[-10px]' >
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