import blueRightArrow from '../assets/images/blueRightArrow.png'

export const ArrowTitle=({title, textSize, leading})=>{
    return(
        <div className="flex items-center mb-3 " >
            <img src={blueRightArrow} className='w-[8px] object-contain ' alt="" />
            <h5 style={{fontSize: textSize?textSize:'', lineHeight: leading?leading:'' }} className="text-[9px] leading-[14px] ml-2 " >{title}</h5>
        </div>
    )
}