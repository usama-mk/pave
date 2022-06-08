import React from 'react'

function ServiceImageGroup({mainImg, subImages, setMainImg}) {

    const handleSelectedImg=(img)=>{
        setMainImg(img)
    }
  return (
    <div className='flex flex-col justify-center' >
        <img src={mainImg} className='object-contain w-[100vw]' alt="" />
        <div className='flex justify-center space-x-1' >
            {
                subImages.map((img)=>{
                    return(
                        <div className='' >
                            <img style={{opacity: mainImg==img?0.61:1}} onClick={()=> handleSelectedImg(img)} src={img} className='object-contain' alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ServiceImageGroup