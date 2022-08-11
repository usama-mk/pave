import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import blackLuArrow from '../../../assets/images/black-lu-arrow.png'
import seoProposalMain from '../../../assets/images/seo-proposal-main.png'
import CheckTitle from '../../../components/CheckTitle'



function SeoProposal() {
  return (
    <div style={{height: '93vh', overflowY: 'scroll'}} className='flex flex-col items-center ' >
       <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className='mb-[100px] px-[6%] ' >
<div className="flex items-start ">
  <img src={blackLuArrow} className='object-contain  ml-5 mt-2 ' alt="" />
  <div className='text-left ml-[4%] ' >
  <h1 className=' text-[28px] font-bold leading-[35px] ' >
    Search Engine Optimization Proposal
  </h1>
  <h3 className='text-[23px] leading-[30px] mb-5 '  >SEO Compaign Processs</h3>
<img src={seoProposalMain} className='object-contain h-[308px] ' alt="" />

<div className='mt-5' >
<CheckTitle title={`Website and  Competive Analysis`} />
<CheckTitle title={`Keywords Reasearch`} />
<CheckTitle title={`Website On-page Optimization`} />
<CheckTitle title={`Manual Link Building`} />
<CheckTitle title={`Submissions Trusted Sites`} />
<CheckTitle title={`Weekly Keyword Ranking Reports`} />
<CheckTitle title={`Monthly SEO Performance Reports`} />
<CheckTitle title={`PermanentTraffic, Leads, Income, ROI`} />

</div>
  </div>
</div>
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

export default SeoProposal