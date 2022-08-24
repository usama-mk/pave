import React from 'react'

function RecentProjects({projects}) {
  return (
    <div className='flex overflow-x-scroll ' >
       {
       projects.map(project =>
        <img src={project} className='w-[262px] h-[386px] object-contain shadow-md rounded-2xl  ' alt="" />
        )
       }
    </div>
  )
}

export default RecentProjects