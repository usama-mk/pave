import React from "react";

function SeoPricingTable({ title, monthlyPkgs, keywords, guestPosts, gapAnalysis, cro, halfYearly, yearly }) {
  return (
    <div className="mb-10" >
      <h1 className="text-[19px] leading-[33px] text-[#FD4C3C] mb-3 ">{title}</h1>

      <div className="grid grid-flow-col  gap-16 w-[100%] overflow-x-scroll  ">
        <div className="col-span-2 ">
          <h3 className="text-[12px] font-medium leading-[23px] mb-5 ">
            MONTHLY PACKAGE
          </h3>
            
                {
                    monthlyPkgs.map((pkg)=>
                    <h4 className="text-[13px] leading-[31px] " >{pkg}</h4>
                    )
                }
            
        </div>

        <div className="col-span-2 ">
          <h3 className="text-[12px] text-center font-medium leading-[23px] mb-5">KEYWORDS <span className="invisible" >invisible</span> </h3>
          {
                    keywords.map((keyword)=>
                    <h4 className="text-[13px] text-center leading-[31px] " >{keyword}</h4>
                    )
                }

        </div>

        <div className="col-span-3 ">
          <h3 className="text-[12px] font-medium text-center leading-[23px] mb-5 ">
            GUEST POSTS <span className="invisible" >invisible</span> 
          </h3>
          {
                    guestPosts.map((guestPost)=>
                    <h4 className="text-[13px] text-center leading-[31px] " >{guestPost}</h4>
                    )
                }
        </div>

        <div className="col-span-3 ">
          <h3 className="text-[12px] font-medium text-center leading-[23px] mb-5 ">
            GAP ANALYSIS <span className="invisible" >invisible</span>
          </h3>
          {
                    gapAnalysis.map((gapAna)=>
                    <h4 className="text-[13px] text-center leading-[31px] " >{gapAna}</h4>
                    )
                }
        </div>

        <div className="col-span-2 ">
          <h3 className="text-[12px] text-center font-medium leading-[23px] mb-5 ">CRO  <span className="invisible" >invisible</span></h3>
          {
                    cro.map((cro)=>
                    <h4 className="text-[13px] text-center leading-[31px] " >{cro}</h4>
                    )
                }
        </div>

        <div className="col-span-2 ">
          <h3 className="text-[12px] font-medium text-center leading-[23px] mb-5 ">
            HALF YEARLY
          </h3>
          {
                    halfYearly.map((hY)=>
                    <h4 className="text-[13px] text-center leading-[31px] " >{hY}</h4>
                    )
                }
        </div>

        <div className="col-span-2 ">
          <h3 className="text-[12px] font-medium text-center leading-[23px] mb-5 ">YEARLY  <span className="invisible" >invisible</span></h3>
          {
                    yearly.map((y)=>
                    <h4 className="text-[13px] text-center leading-[31px] " >{y}</h4>
                    )
                }
        </div>
      </div>
    </div>
  );
}

export default SeoPricingTable;
