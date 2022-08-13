import React from "react";
import tick from '../assets/images/tick.png'
import cross from '../assets/images/cross.png'

function CompareSeoTable({ first, stage, features, starter, visiblity, performance, booster }) {
  return (
    <div className="ml-[20%] mr-[2%] ">
     

      <div className="grid grid-flow-col  gap-16 overflow-x-scroll ">
        <div className="col-span-4 ">
         {
            first ?  <h1 className="text-left text-[14px] font-semibold leading-[43px] mb-5">
            FEATURES
          </h1> :<h1 className="text-left text-[14px] invisible font-semibold leading-[43px] mb-5">
            FEATURES
          </h1>
         }
          <h1 className="text-left text-[#FD4C3C] text-[12px] font-medium leading-[14px] mb-4  ">{stage}</h1>
          {
            features.map(feature=>
                <h4 className="text-left text-[11px] font-medium leading-[14px] mb-2 " >{feature}</h4>
                )
        }
        </div>
        

        <div className=" ">
        {
            first ?  <h1 className="text-center text-[14px] font-semibold leading-[43px] mb-5">
            Starter
          </h1> :<h1 className="text-center text-[14px] font-semibold leading-[43px] invisible mb-5">
            Starter
          </h1>
         }

<h1 className="text-center invisible  text-[#FD4C3C] text-[12px] font-medium leading-[14px] mb-4  ">{'stage'}</h1>
       
         {
            starter.map(value=>
                value?<div className="flex justify-center  mb-[14px]" ><img src={tick}  className="object-contain w-[12px]  "/> </div> : <div className="flex justify-center mb-[14px]" ><img src={cross}  className="object-contain  w-[8px]"/> </div>
                )
        }
        
        </div>

        <div className=" ">
        {
            first ?  <h1 className="text-left text-[14px] font-semibold leading-[43px] mb-5">
            Visibility
          </h1> :<h1 className="text-left text-[14px] invisible font-semibold leading-[43px] mb-5">
            Visibility
          </h1>
         }


<h1 className="text-center invisible  text-[#FD4C3C] text-[12px] font-medium leading-[14px] mb-4  ">{'stage'}</h1>
       
       {
          visiblity.map(value=>
              value?<div className="flex justify-center  mb-[14px]" ><img src={tick}  className="object-contain w-[12px]  "/> </div> : <div className="flex justify-center mb-[14px]" ><img src={cross}  className="object-contain  w-[8px]"/> </div>
              )
      }
      
        </div>

        <div className=" ">
        {
            first ?  <h1 className="text-left text-[14px] font-semibold leading-[43px] mb-5">
            Performance
          </h1> : <h1 className="text-left text-[14px] font-semibold leading-[43px] invisible mb-5">
            Performance
          </h1>
         }

<h1 className="text-center invisible  text-[#FD4C3C] text-[12px] font-medium leading-[14px] mb-4  ">{'stage'}</h1>
       
       {
          performance.map(value=>
              value?<div className="flex justify-center  mb-[14px]" ><img src={tick}  className="object-contain w-[12px]  "/> </div> : <div className="flex justify-center mb-[14px]" ><img src={cross}  className="object-contain  w-[8px]"/> </div>
              )
      }
      
        </div>

        <div className=" ">
        {
            first ?  <h1 className="text-left text-[14px] font-semibold leading-[43px] mb-5">
            Booster
          </h1> :<h1 className="text-left text-[14px] font-semibold invisible leading-[43px] mb-5">
            Booster
          </h1>
         }


<h1 className="text-center invisible  text-[#FD4C3C] text-[12px] font-medium leading-[14px] mb-4  ">{'stage'}</h1>
       
       {
          booster.map(value=>
              value?<div className="flex justify-center  mb-[14px]" ><img src={tick}  className="object-contain w-[12px]  "/> </div> : <div className="flex justify-center mb-[14px]" ><img src={cross}  className="object-contain  w-[8px]"/> </div>
              )
      }
      
        </div>
      </div>
    </div>
  );
}

export default CompareSeoTable;
