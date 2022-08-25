import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import dmOne from "../../../assets/images/dmOne.png";
import dmTwo from "../../../assets/images/dmTwo.png";
import PmImages from '../../../components/PmImages';




function DMSecrets() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className='mb-[100px] px-[6%]' >
        <img src={arrowBlack}  className="object-contain"  alt="" />
        <PmImages imgs={[dmOne, dmTwo]} />

        <h1 className='text-[23px] font-bold leading-[25px] text-left' >
        Digital Marketing Secrets: How The Marketing Funnel Works

        </h1>
        <h5 className='text-[14px] font-bold leading-[23px] text-left text-[#B1B1B1] mt-2 ' >By pavebusiness ·  May 9th, 2020</h5>
        <h5 className='text-[13px] leading-[20px] text-left my-4 ' >
       
        A marketing funnel is a series of steps that turns a lead into a buying customer. The nature of the steps taken, and the number of steps is up to you. Ever business has their own take on what a marketing funnel should look like. You could have a short funnel where as soon as the email address is harvested, marketing messages are sent. Or, you could increase the length of the funnel by sending several “warm-up” emails before the pitch is made.
<br />
<br />
Typically the first few steps of a funnel will be executed by a large portion of your potential customer base. As they get further down the funnel the number of leads decreases. The idea is to keep the potential customer engaged and moving down the funnel until the conversion is achieved.
<br />
<br />
A simple example of a funnel can be a model based on guest posting, email capture and affiliate product sales. The first step could be to get people to land on your site from the guest posting article. Then you’d want the prospect to fill out the email form on your website. The last step is achieving a sale via the links within the email marketing campaign.
<br />
<br />
Uikreative-on-Dribble
<br />
<br />
Image Source: Lead Funnels Homepage Design by Naresh | Uikreative on Dribble
<br />
<br />
Different Stages of A Marketing Funnel
Awareness: this is the first stage of the marketing funnel. Potential customers typically enter this stage of the funnel via marketing efforts, discovery and consumer research. You can acquire leads into the awareness stage by tradeshows, direct mail, viral campaigns, webinars, events, advertising, media mentions and search. By increasing the number of methods used, the scope of customers entering the funnel increases.
<br />
<br />
Interest: the next stage is the interest phase, where a relationship is developed with the lead. They will learn more about the company and get an idea of what your brand is about. Additionally, you can provide helpful information during this stage to build a level of trust. It will be easier to close the deal later on if you provided value free of charge from the start.
<br />
<br />
Consideration: the success of the interest phase leads to the consideration phase. Here the lead is given more marketing attention. They might be sent marketing material to provide additional information about the products and services.
<br />
<br />
Intent: during this step, the lead demonstrates an interest to buy the product, or hire the services. It can take the form of placing a product in a shopping cart or providing feedback via a survey.
<br />
<br />
Evaluation: here a decision making process occurs to finally conclude if they should buy the product. The sales and marketing team can increase the chances of the conversion by nurturing the lead.
<br />
<br />
Purchase: this is the final stage, which also indicates that the conversion was successfully done. The lead buys the product and the buyer can be led into another marketing funnel where additional products are offered.
<br />
<br />
Increasing Conversions of A Marketing Funnel via Analytics
As you’ve seen in the previous section there are several steps to the marketing funnel, and therefore plenty of chances to increase the conversion rate. However, understanding what metrics to pay attention to is key to improving the conversion rate.
<br />
<br />
The number of people moving from one part of the funnel to the next must be analyzed. If you spot a particular step of the funnel that is under performing, then you know what to work on.
<br />
<br />
A/B split testing is a great way to increase conversion rates without over-complicating things. For example, let’s say that you’re trying to increase the conversion rate of your landing page. You could have two versions of the same page, but each one has a different headline. The one that performs best can remain, and other discarded.
<br />
<br />

To Sum It Up
Having a good grasp of how a marketing funnel works allows you to figure out the optimal strategy for achieving a sale. The point is to
maximize the return on each person that enters the funnel. By tweaking the funnel, you can increase the return on your marketing investment.
<br />
<br />
{/* 
Start Paving Today
Free Business Consultations
<br />
<br />
Name
<br />
<br />
Email
<br />
<br />
Business Name
<br />
<br />
Website
<br />
<br />
Message
<br />
<br />

PAVE Business <br />
© 2022 Pave Creative and Marketing Agency. Privacy Policy
Contact Us <br />
support@clubpave.com <br />
(714) 332-0019By Appointment Only: <br />
1055 W 7th St, 33F, Los Angeles, CA 90017
451 W. Lambert Road, Suite 210, Brea, CA 92821 */}
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

export default DMSecrets
