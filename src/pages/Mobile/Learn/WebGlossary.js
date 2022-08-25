import React from 'react'
import MobHeader from '../../../components/MobHeader'
import MobNavBar from '../../../components/MobNavBar'
import arrowBlack from "../../../assets/images/black-lu-arrow.png";
import wgOne from "../../../assets/images/wgOne.png";
import wgTwo from "../../../assets/images/wgTwo.png";
import PmImages from '../../../components/PmImages';




function WebGlossary() {
  return (
    <div style={{ height: "93vh", overflowY: "scroll" }}
    className="flex flex-col  ">
         <div className="  w-[100vw]  flex justify-center mb-12 ">
        <MobHeader />
      </div>
      <div className='mb-[100px] px-[6%]' >
        <img src={arrowBlack}  className="object-contain"  alt="" />
        <PmImages imgs={[wgOne, wgTwo]} />

        <h1 className='text-[23px] font-bold leading-[25px] text-left' >
        A Glossary of Web Design Terms
        </h1>
        <h5 className='text-[14px] font-bold leading-[23px] text-left text-[#B1B1B1] mt-2 ' >By pavebusiness ·  May 9th, 2020</h5>
        <h5 className='text-[13px] leading-[20px] text-left my-4 ' >
        Now, you’ll be introduced to the key definitions relating to web design. Some of these you may already know, and some might be new to you. In any case, take the time to go through the list to make sure you’re up to date with the common web design terms.
<br />
<br />
Anchor text: the clickable text used to create a link.
<br />
<br />
Back end: the section of the website hidden from website visitors that’s used to manage the website.
<br />
<br />
Below the fold: this refers to the content that cannot be immediately seen once the website loads up. You have to scroll down in order to see the content below the fold.
<br />
<br />
Bounce rate: the percentage of website visitors that exit the website without performing an action.
<br />
<br />
CMS: it stands for Content Management System and is the tool used to separate the website from the backend. A popular example of a CMS would be WordPress.
<br />
<br />
DHTML: an acronym that stands for Dynamic Hyper Text Markup Language. CSS and XHTML are mixed to create a dynamic interactive web page.
<br />
<br />
External style sheet: a CSS document that can be linked to HTML/XHTML files because it’s written in a separate external document.
<br />
<br />
HTML: Hypertext Markup Language, which is the most popular and primary coding language to create webpages.
<br />
<br />
Inbound link: a hyperlink that leads to your website.
<br />
<br />
IP address: all computers that are conected to the Internet have a numerical designation, which is the IP address.
<br />
<br />
JPEG: it stands for Joint Photographic Experts Group and is a lossy graphics format for images and photos.
<br />
<br />
Landing page: it’s the first page a visitor will land on. Typically a specific landing page is built with a specific goal (e.g. to acquire an e-mail address or achieve a sale).
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

export default WebGlossary
