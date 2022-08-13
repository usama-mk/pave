import React from 'react'
import CheckTitle from './CheckTitle'

function MainTitleCheck({title, keywords}) {
  return (
    <div className='mt-7' >
                <h1 className='text-[22px] font-semibold leading-[20px] mb-4 ' >{title}</h1>
                {
                    keywords.map(keyword=>
                        <CheckTitle month={true} title={keyword} />
                        )
                }
               </div>
  )
}

export default MainTitleCheck