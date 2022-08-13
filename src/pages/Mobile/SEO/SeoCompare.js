import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import blackLuArrow from '../../../assets/images/black-lu-arrow.png'
import seoProposalMain from '../../../assets/images/seo-proposal-main.png'
import CheckTitle from '../../../components/CheckTitle'
import CompareSeoTable from '../../../components/CompareSeoTable'



function SeoCompare() {
  return (
    <div style={{height: '93vh', overflowY: 'scroll'}} className='flex flex-col pb-[100px] ' >
       <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>

      <div className='px-[6%] ' >
<div className="flex items-start ">
  <img src={blackLuArrow} className='object-contain  ml-5 mt-2 ' alt="" />
  <div className='text-left ml-[4%] ' >
  <h1 className=' text-[28px] font-bold leading-[35px] ' >
  Compare Features of Each SEO Marketing Package
  </h1>
  <h3 className='text-[14px] leading-[30px] my-5 '  >We make it easy for you to choose the right package. See exactly what you get when you subscribe to one of our affordable SEO packages. We have crafted each package carefully based on the business needs and the size of the website and client needs</h3>

  </div>
</div>
      </div>

 <CompareSeoTable first={true} stage="Initial Analysis" features={['In-depth Website Analysis', 'Initial Website Audit Report', 'nitial Backlinks Analysis', 'Competition Analysis', 'Relevant Keyword Research', 'Duplicate Content Check', 'Technical Advice on Website']} starter={[true, true, true, false, true, false, true]} visiblity={[true, true, true, true, true, true, true]} performance={[true, true, true, true, true, true, true]} booster={[true, true, true, true, true, true, true]}  />




 <CompareSeoTable first={false} stage="On Page Optimization" features={['Meta Tags Optimization', 'Site Structure Optimization', 'Improve URLs Structure', 'Anchor Text Optimization', 'Images Optimization', 'Heading Tags Optimization', 'Effective Use of Robots.text', 'HTML Code Optimization', 'Effective Use of Robots.text', 'HTML Code Optimization']} starter={[true, true, true, false, false, false, false, false, false, true]} visiblity={[true, true, true, true, false, true, true, true, true, true]} performance={[true, true, true, true, true, true, true, true, true, true]} booster={[true, true, true, true, true, true, true, true, true, true]}  />


 <CompareSeoTable first={false} stage="Local SEO" features={['GMB Optimization', 'Local Scheme Implementation', 'Citation Building', 'Google Map Optimization', 'Knowledge Graph Optimization', 'Multi Location Optimization', 'Reviews Management']} starter={[ true, true, true, false, false, false, false]} visiblity={[true, true, true, true, true, true, false]} performance={[true, true, true, true, true, true, false]} booster={[true, true, true, true, true, true, true]}  />



 <CompareSeoTable first={false} stage="Conversion Rate Optimization" features={['Call To Action Optimization', 'Goals Setup in Google Analytics', 'Event Tracking', 'Thank You Page Tracking', 'Hotjar Implementation', 'UMT Tracking', 'CallRail Implementation']} starter={[true, true, false, true, false, false, false]} visiblity={[true, true, true, true, true, true, false]} performance={[true, true, true, true, true, true, false]} booster={[true, true, true, true, true, true, true]}  />


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

export default SeoCompare