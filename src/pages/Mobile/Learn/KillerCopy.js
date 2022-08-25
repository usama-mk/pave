import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import kcOne from "../../../assets/images/kcOne.png";
import kcTwo from "../../../assets/images/kcTwo.png";
import PmImages from '../../../components/PmImages';




function KillerCopy() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className='mb-[100px] px-[6%]' >
        <img src={arrowBlack}  className="object-contain"  alt="" />
        <PmImages imgs={[kcOne, kcTwo]} />

        <h1 className='text-[23px] font-bold leading-[25px] text-left' >
        Things to Keep In Mind
for Killer Copy
        </h1>
        <h5 className='text-[14px] font-bold leading-[23px] text-left text-[#B1B1B1] mt-2 ' >By pavebusiness ·  May 9th, 2020</h5>
        <h5 className='text-[13px] leading-[20px] text-left my-4 ' >
       

The headline is the first thing a new website visitor notices. Therefore, it’s your first opportunity to catch their attention. The short attention span of the average internet user means writing attention-grabbing headlines is becoming increasingly harder. However, there are a few proven methods that work regardless of what industry you’re operating in.
<br/>
<br/>
One method that always works is to ask a provocative or controversial question as the headline. Surely, the audience will want to know the answer to the question and move onto the body of the content. Appealing to the “how-to” instinct also works well. Everyone wants to improve their life by learning how to do something new. A headline that promises to deliver on that might intrigue the viewer in wanting to learn more. By suggesting that value will be found in the body of the content, the viewer is more likely to read past the headline.
<br/>
<br/>
Good example: 10 Ways to Make Money While Waiting for A Pension Check
Bad example: How to Make Money After Retirement
<br/>
<br/>
Importance of using simple language <br />
It’s important to quickly communicate each point when copywriting, so simple language is a no-brainer. Using words that aren’t spoken in everyday language and confusing sentence structures will not achieve the desired level of engagement.
<br/>
<br/>
Great copywriting has the ability to persuade the audience to believe a certain point of view. This might be that a particular problem exists, and that your product or service can solve the problem. Persuading the audience is much easier to achieve when they can understand the content without having to read it twice.
<br/>
<br/>
Furthermore, not every audience member is going to be a native English speaker. For these individuals, using simple language might be the only way to communicate at all.
<br/>
<br/>
Follow The AIDA formula (Attention, Interest, Desire, Action)<br/>

If you’re looking for some actionable guidelines when copywriting, then you can’t go wrong with the AIDA formula:
<br/>
<br/>
Attention: the first step is to grab the attention of the lead. As mentioned previously, a headline is a great way to achieve that. <br />
However, the first paragraph must also do a great job of selling the reader to continue onwards with the rest of the content.
<br/>
<br/>
Interest: to spike the interest level of the reader, you must do one of two things. Induce a sense of fear that a problem they have is real and requires a solution, which you will provide in the content. Or, play to their emotions and share a story that inspires them to read on.
Aastha-Rana-for-Zomato-on-Dribble
<br/>
<br/>
Image Source: Merchandise Design by Aastha Rana for Zomato on Dribble
<br/>
<br/>
Desire: once the prospect is interested, you must give them a reason to trust in your products or services in solving the problem. <br />
Action: once you have effectively conveyed that your product is worthy of attention, use a call-to-action (or CTA) to convert the lead. Without a call to action the lead has no idea what to do after they have read the content. You need to make it easy for them and nudge them in the direction of the desired action. This might be to download a free ebook in exchange for the email address, buy a product, or sign up for a service. <br />
Highlight Your Unique Selling Point (USP)
The internet is a big place and there are plenty of copycats out there, so differentiating yourself is important. Establishing a USP gives the viewers a reason to pay attention to your product and ultimately choose you over the competition.
<br/>
<br/>
You might already know what sets you apart from your competition, so it’s just a case of highlighting it whenever you get an opportunity. If you don’t know your USP then you need to create one. Not just so that you can write better copy, but for the purposes of branding too.
An example of a successful USP is one that provides a unique benefit to the client–a benefit that isn’t offered by other competitors. Highlighting this in the copywriting will spike the interest of the audience. However, the USP must be amazing; if it’s bland, then that’s not enough to set yourself apart from the rest of the pack.
<br/>
<br/>
For instance, let’s say that your company specializes in swimming pool installation. A USP could be to offer a free inspection every year, or the ability to add additional features at a 50% discount for 2 years.
        </h5>
      </div>

      <div
        className={`${
          true ? "visible cssanimation fadeInBottom " : "invisible"
        }     flex justify-center w-[100vw] fixed bottom-0 z-30  `}
      >
        <MobNavBar showNavBar={true} />
      </div>
    </div>
  )
}

export default KillerCopy
