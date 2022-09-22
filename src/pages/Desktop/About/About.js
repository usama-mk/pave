import React from "react";
import DesktopSideNav from "../../../components/DesktopSideNav";
import PlayVideoButton from "../../../components/PlayVideoButton";
import WorkButton from "../../../components/WorkButton";
import mainPageBottomBg from '../../../assets/images/mainPageBottomBg.png'

function About() {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <div className="grid grid-cols-2 max-h-screen  ">
      <div className="grid grid-cols-3">
        <DesktopSideNav name={`About`} />
        <div className="col-span-2 flex flex-col justify-center ">
          <h1 className="text-[3.3rem] text-left font-bold leading-[55px] font-sfpro ">
            We create value for your business by creating value for your
            customers.
          </h1>

          {readMore ? (
            <div className="text-left my-9 ">
              <h5 className="text-[23px] leading-[30px] ">
                PAVE Creative Marketing Agency is a{" "}
                <span className="font-bold"> team of overachievers</span> . We
                are graphic designers, paid advertising specialists, search
                engine optimization engineers, photographers, video technicians,
                eCommerce experts, and industry leading digital marketers. We
                continue to tackle challenges for our clients that are all over
                the world through our studios in Los Angeles and Orange County.
                The culture we foster here is that of a winner’s mentality. What
                you imagine, we pave. It’s that simple.
              </h5>
              <h5
                onClick={() => setReadMore((prev) => !prev)}
                className="border-b-2 border-[#707070] text-[#707070] my-3 cursor-pointer w-max "
              >
                Read Less
              </h5>
            </div>
          ) : (
            <div className="text-left my-9 ">
              <h5 className="text-[23px] leading-[30px] ">
                PAVE Creative Marketing Agency is a{" "}
                <span className="font-bold"> team </span>{" "}
              </h5>
              <h5
                onClick={() => setReadMore((prev) => !prev)}
                className="border-b-2 border-[#707070] text-[#707070] my-3 cursor-pointer w-max"
              >
                Read More
              </h5>
            </div>
          )}

          <div className={`homeMidButtons mt-3 flex justify-start `}>
            <WorkButton
              handleWorkWithUs={() => console.log("read testimonials")}
              textColor={"black"}
              bg={"#FEB92B"}
              text={"Read Testimonials"}
              p4={"#FEB92B"}
            />

            <PlayVideoButton textColor={"white"} bg={"#363636"} />
          </div>
        </div>
      </div>
      {/* right grid */}
      <div>
        
        
        <div className="flex justify-end m-5  ">
        <div
           
           className="letsTalk bg-[white] px-4 py-3 h-fit border-2 border-black rounded-[10px] text-sm font-bold text-center flex items-center justify-center w-max  "
         >
           <span> { "Lets Talk"}</span>
         </div>
        </div>
       
        
        <div className="grid grid-cols-2 justify-center items-center " >
            <div>
               <TitleSub title={`Collaborate on
Strategic Planning`} sub={`Before we speak, we must hear. Our agency will listen to every detail of your concerns and truly analyze your priorities. Together, we will come up with the perfect strategic plan.`} />
<TitleSub title={`Ego-Free
Adaptation`} sub={`We approach every project ego-free. That means
we put our client's needs first over anything else.
We hope our approach is the perfect pairing you
always dreamed of.`} />
            </div>
            <div className="mr-10" >
            <TitleSub title={`Maximum
Conversion`} sub={`We're all about putting numbers on the board
at our agency. That's why our focus is often
heavily on making conversions work.`} />
<TitleSub title={`Analytics &
Optimization`} sub={`Improving on a weekly, and daily basis is
what we strive to do for all of our clients. And
with pinpoint analytics, we continue to optimize.
`} />
            </div>
        </div>
        <div>
          <div className="text-left" > 
            <h1 className="font-bold text-[2.65rem] leading-[47px] font-sfpro " >“PAVE may be the most inventive
agency in Southern California”</h1>
            <h5 className="text-[1.1rem] leading-[17px] my-4 " >— Marketwatch</h5>

          </div>
          <div className="flex justify-end absolute bottom-[-120px] right-0 " >
            <img src={mainPageBottomBg} className='object-contain w-[492px] ' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

const TitleSub=({title,sub})=>{
    return(
        <div className="text-left m-8 min-h-[180px]" >
            <h1 className="text-[1.7rem] leading-[40px] font-bold mb-4 font-sfpro " >
                {title}
            </h1>
            <h5 className="text-[0.85rem] leading-[24px] " >
                {sub}
            </h5>
        </div>
    )
}
