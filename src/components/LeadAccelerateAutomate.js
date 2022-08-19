import React from 'react'

function LeadAccelerateAutomate({tabOne, tabTwo, tabThree, tabFour, selected }) {
  return (
    <div className='grid grid-flow-col gap-8 overflow-x-scroll  ' >
        <div className='w-[160px] '  >
        <h5 style={{borderColor:selected==='one'?'black':'#CBCBCB'}} className='text-[12px] leqading-[14px] h-[36px] ' >{tabOne}</h5>
        <div style={{borderColor:selected==='one'?'black':'#CBCBCB'}} className='w-[150px] border-2 border-black mt-3' >

        </div>
        </div>

        <div className='w-[160px] '>
        <h5 style={{borderColor:selected==='two'?'black':'#CBCBCB'}} className='text-[12px] leqading-[14px] h-[36px]' >{tabTwo}</h5>
        <div style={{borderColor:selected==='two'?'black':'#CBCBCB'}} className='w-[150px] border-2 border-black mt-3' >

        </div>
        </div>

        <div className='w-[160px] '>
        <h5 style={{borderColor:selected==='three'?'black':'#CBCBCB'}} className='text-[12px] leqading-[14px] h-[36px]' >{tabThree}</h5>
        <div style={{borderColor:selected==='three'?'black':'#CBCBCB'}} className='w-[150px] border-2 border-black mt-3' >

        </div>
        </div>

        <div className='w-[160px] '>
        <h5 style={{borderColor:selected==='four'?'black':'#CBCBCB'}} className='text-[12px] leqading-[14px] h-[36px] ' >{tabFour}</h5>
        <div style={{borderColor:selected==='four'?'black':'#CBCBCB'}} className='w-[150px] border-2 border-black mt-3' >

        </div>
        </div>

        
    </div>
  )
}

export default LeadAccelerateAutomate