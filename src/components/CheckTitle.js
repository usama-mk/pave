import React from 'react'
import check from '../assets/images/check.png'


function CheckTitle({title, month}) {
  return (
    <div className='flex items-center ' >
        <img src={check} className='object-contain' alt="" />
        <h5 className={`ml-2 ${month?`text-[16px]`:`text-[18px]`} `} >{title}</h5>
    </div>
  )
}

export default CheckTitle