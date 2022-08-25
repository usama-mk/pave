
const PmImages=({imgs})=>{
    return(
        <div className='flex overflow-x-scroll my-5 ' >
              {
              imgs.map(img =>
               <img src={img} className='w-[242px] h-[255px] object-contain rounded-2xl mr-3 ' alt="" />
               )
              }
           </div> )
}

export default PmImages