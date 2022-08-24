import arrowRightBold from '../assets/images/arrowRightBold.png'

const ArrowTitleBold=({title})=>{
    return(
        <div className="flex items-center mb-3 " >
            <img src={arrowRightBold} className='w-[12px] object-contain ' alt="" />
            <h5 className="text-[14px] font-bold leading-[21px] ml-2 text-[#410D81] " >{title}</h5>
        </div>
    )
}

export default ArrowTitleBold