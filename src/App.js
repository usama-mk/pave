import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Mobile/Home/Home';
import About from './pages/Mobile/About/About';
import Services from './pages/Mobile/Services/Services';
// import 'animate.css';
import MobHomeTwo from './pages/Mobile/Home/MobHomeTwo';
import MobHomeThree from './pages/Mobile/Home/MobHomeThree';
import ServicesFour from './pages/Mobile/Services/ServicesFour';
import DMService from './pages/Mobile/Services/DMService';
import MobNavBar from './components/MobNavBar';
import SEO from './pages/Mobile/SEO/SEO';
import SeoProposal from './pages/Mobile/SEO/SeoProposal';
import MMCompaign from './pages/Mobile/SEO/MMCompaign';
import SEOPricing from './pages/Mobile/SEO/SEOPricing';
import SeoCompare from './pages/Mobile/SEO/SeoCompare';
import SeoModuleOne from './pages/Mobile/SEO/SeoModuleOne';
import SeoModuleTwo from './pages/Mobile/SEO/SeoModuleTwo';
import SeoModuleThree from './pages/Mobile/SEO/SeoModuleThree';
import SeoModuleFour from './pages/Mobile/SEO/SeoModuleFour';
import SeoModuleFive from './pages/Mobile/SEO/SeoModuleFive';
import SeoModuleSix from './pages/Mobile/SEO/SeoModuleSix';
import SeoModuleSeven from './pages/Mobile/SEO/SeoModuleSeven';
import SeoCaseStudies from './pages/Mobile/SEO/SeoCaseStudies';
import SeoClientOne from './pages/Mobile/SEO/SeoClientOne';
import SeoClientTwo from './pages/Mobile/SEO/SeoClientTwo';
import SeoClientThree from './pages/Mobile/SEO/SeoClientThree';
import SeoClientFour from './pages/Mobile/SEO/SeoClientFour';
import AccelerateAndgrow from './pages/Mobile/PaveLead/AccelerateAndgrow';
import SalesPipeline from './pages/Mobile/PaveLead/SalesPipeline';
import StagesSalesPipeline from './pages/Mobile/PaveLead/StagesSalesPipeline';
import AccelerateB2B from './pages/Mobile/PaveLead/AccelerateB2B';
import GrowOpportunity from './pages/Mobile/PaveLead/GrowOpportunity';
import IncreaseQualified from './pages/Mobile/PaveLead/IncreaseQualified';
import AcquireEngage from './pages/Mobile/PaveLead/AcquireEngage';
import BuyersJourney from './pages/Mobile/PaveLead/BuyersJourney';
import CollectData from './pages/Mobile/PaveLead/CollectData';
import StrategyExecution from './pages/Mobile/PaveLead/StrategyExecution';
import MarketingMeasured from './pages/Mobile/PaveLead/MarketingMeasured';
import LeadGeneration from './pages/Mobile/PaveLead/LeadGeneration';
import AlignMarketing from './pages/Mobile/PaveLead/AlignMarketing';
import HowItWorks from './pages/Mobile/PaveLead/HowItWorks';
import BookMeeting from './pages/Mobile/PaveLead/BookMeeting';
import MainPage from './pages/Mobile/Projects/MainPage';
import OchaOne from './pages/Mobile/Projects/OchaOne';
import OchaTwo from './pages/Mobile/Projects/OchaTwo';
import OchaThree from './pages/Mobile/Projects/OchaThree';
import CloudLab from './pages/Mobile/Projects/CloudLab';
import Coway from './pages/Mobile/Projects/Coway';
import Jetsmarter from './pages/Mobile/Projects/Jetsmarter';
import Lavage from './pages/Mobile/Projects/Lavage';
import Philip from './pages/Mobile/Projects/Philip';
import ElCamino from './pages/Mobile/Projects/ElCamino';
import Vigor from './pages/Mobile/Projects/Vigor';
import Porto from './pages/Mobile/Projects/Porto';
import Main from './pages/Mobile/Learn/Main';
import PrintMarketing from './pages/Mobile/Learn/PrintMarketing';
import KillerCopy from './pages/Mobile/Learn/KillerCopy';
import DMSecrets from './pages/Mobile/Learn/DMSecrets';
import PsyColors from './pages/Mobile/Learn/PsyColors';
import GraphicAndImg from './pages/Mobile/Learn/GraphicAndImg';
import WebGlossary from './pages/Mobile/Learn/WebGlossary';
import ContactUs from './pages/Mobile/Contact/ContactUs';
import Careers from './pages/Mobile/Contact/Careers';
import FAQs from './pages/Mobile/Contact/FAQs';
import PrivacyPolicy from './pages/Mobile/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/Mobile/PrivacyPolicy/TermsOfService';
import ContactNavigation from './pages/Mobile/Contact/ContactNavigation';
import BlogMain from './pages/Mobile/Blog/BlogMain';
import LitePackages from './pages/Mobile/Projects/LitePackages';
import LitePackagesTwo from './pages/Mobile/Projects/LitePackagesTwo';
function App() {

  return (
    <div className="App bg-[#EFEFEF]  ">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/DigitalMarketing" element={<DMService title={`Digital Marketing`} subItems={['Search Engine Marketing', 'Pay-Per-Click Advertising','Social Media Marketing', 'Content Marketing', 'Affiliate Marketing', 'Influencer Marketing', 'Email Marketing', 'Viral Marketing', 'Mobile Marketing']} />} />
        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['Talent, Artist & DJ Bookings','Celebrity & VIP Relations', 'Mega & Giga Influencer Relations', 'Private, Live & Corporate Events', 'Charity & Non Profit Activations', 'Virtual Entertainment', 'Production & Creatives', 'Talent Branding', 'Partnership Development']} />} />

        <Route path="/services/PaidAdvertising(PPC)" element={<DMService title={`Paid Advertising (PPC)`} subItems={['Google Adwords','Social Media Ads', 'Bing Ads', 'Local Service Ads', 'Shopping Ads', 'Retargeting Ads', 'Retention Marketing', 'Life Time Value Boost']} />} />

        <Route path="/services/FutureTechnology" element={<DMService title={`Future Technology`} subItems={['Blockchain','NFT', 'Virtual Reality (VR)', 'Augmented Reality (AR)','Mixed Reality (MR)', 'Extended Reality (XR)', 'space']} />} />

        <Route path="/services/SearchEngineOptimization" element={<DMService title={`Search Engine Optimization`} subItems={['Keywords Mapping, Analysis, & Research','White Hat SEO', 'Google SEO', 'Bing SEO', 'Foreign Language SEO', 'On-site SEO', 'Off-site SEO']} />} />

        <Route path="/services/WebDesign&Development" element={<DMService title={`Web Design & Dev`} subItems={['Web Design','Web Development', 'Multiple Tech Stack', 'API & ERP Development', 'eCommerce Website']} />} />

        <Route path="/services/AppDesign&Development" element={<DMService title={`App Design & Dev`} subItems={['iOS App Design & Development','Android App Design & Development', 'Tablet Design & Development', 'Game Design & Development']} />} />

        <Route path="/services/DataAnalytics&Science" element={<DMService title={`Data Analytics & Science`} subItems={['Web Analysis','Conversion Analysis', 'Risk Analysis', 'Advertising and Marketing', 'Enterprise Decision Making', 'Marketing Optimization', 'Marketing Models']} />} />

        <Route path="/services/eCommerce&Amazon" element={<DMService title={`eCommerce & Amazon`} subItems={['eCommerce Design & Development','eCommerce SEO', 'eCommerce Paid Ads', 'eCommerce Visual Enhancement', 'eCommerce Lifetime Value Increase', 'Amazon Account Management', 'Amazon SEO & PPC', 'Amazon Analytics', 'Amazon Visual Enhancement']} />} />

        <Route path="/services/SocialMedia&PR" element={<DMService title={`Social Media & PR`} subItems={['Facebook Optimization','Instagram Optimization', 'Twitter Management', 'Social Media Visual Enhancement', 'Corporate PR Management', 'Press Outreach & Coverage', 'Recommended Website Outreach']} />} />

        <Route path="/services/Brick&Mortar/Local" element={<DMService title={`Brick & Mortar / Local`} subItems={['Foot Traffic Increase','Market & Competitor', 'Research / Analysis', 'Restaurant Enhancement', 'Real Estate Marketing', 'Small Business Marketing','Life Time Value Increase', 'Local Visibility Increase', 'Social Media Management']} />} />

        <Route path="/services/Branding&GraphicDesign" element={<DMService title={`Branding & Graphic Design`} subItems={['Content Creation','Graphic Design', 'Branding', 'Social Media', 'Print Graphics', 'Brand Book', 'Branding Guidelines', 'Logo Exploration', 'Color Explorations']} />} />

        <Route path="/services/Photo&VideoProduction" element={<DMService title={`Photo & Video Production`} subItems={['Photography','Product Photography', 'Video Production', 'Video Editing', 'Short Films', 'Commercial Shoots']} />} />

        <Route path="/services/BrandActivation" element={<DMService title={`Brand Activation`} subItems={['Promotional Marketing','Experiential Marketing', 'Brand Engagement', 'Digital Enablement', 'Live & Virtual Events', 'Workshops & Pop-ups', 'Digital Marketing', 'Public Relations (PR)', 'Sponsorship & Partnership Activation']} />} />

        <Route path="/services/LeadGeneration&GrowthMarketing" element={<DMService title={`Lead Generation`} subItems={['B2B Lead Generation','SaaS Lead Generation', 'Growth Marketing', 'Cross Channel Marketing', 'Sales Data Solutions', 'CRM Software Application']} />} />

        <Route path="/services/ExperientialMarketing" element={<DMService title={`Experiential Marketing`} subItems={['Brand Awareness Campaign','Lead Generation', 'Experiential Funnel', 'Branding & Prospecting', 'Customer Loyalty Increase']} />} />

        <Route path='/seo' element={<SEO/>} />


        <Route path='/seoproposal' element={<SeoProposal/>} />
        <Route path='/mmcompaign' element={<MMCompaign/>} />
        <Route path='/seopricing' element={<SEOPricing/>} />
        <Route path='/seocompare' element={<SeoCompare/>} />
        <Route path='/seomoduleone' element={<SeoModuleOne/>} />
        <Route path='/seomoduletwo' element={<SeoModuleTwo/>} />
        <Route path='/seomodulethree' element={<SeoModuleThree/>} />
        <Route path='/seomodulefour' element={<SeoModuleFour/>} />
        <Route path='/seomodulefive' element={<SeoModuleFive/>} />
        <Route path='/seomodulesix' element={<SeoModuleSix/>} />
        <Route path='/seomoduleseven' element={<SeoModuleSeven/>} />
        <Route path='/seocasestudies' element={<SeoCaseStudies/>} />
        <Route path='/seoclientone' element={<SeoClientOne/>} />
        <Route path='/seoclienttwo' element={<SeoClientTwo/>} />
        <Route path='/seoclientthree' element={<SeoClientThree/>} />
        <Route path='/seoclientfour' element={<SeoClientFour/>} />
        <Route path='/accelerateandgrow' element={<AccelerateAndgrow/>} />
        <Route path='/salespipeline' element={<SalesPipeline/>} />
        <Route path='/stagessalespipeline' element={<StagesSalesPipeline/>} />
        <Route path='/accelerateb2b' element={<AccelerateB2B/>} />
        <Route path='/growopportunity' element={<GrowOpportunity/>} />
        <Route path='/increasequalified' element={<IncreaseQualified/>} />
        <Route path='/marketingmeasured' element={<MarketingMeasured/>} />
        <Route path='/acquireengage' element={<AcquireEngage/>} />
        <Route path='/buyersjourney' element={<BuyersJourney/>} />
        <Route path='/collectdata' element={<CollectData/>} />
        <Route path='/strategyexecution' element={<StrategyExecution/>} />
        <Route path='/leadgeneration' element={<LeadGeneration/>} />
        <Route path='/alignmarketing' element={<AlignMarketing/>} />
        <Route path='/howitworks' element={<HowItWorks/>} />
        <Route path='/bookmeeting' element={<BookMeeting/>} />
        <Route path='/main' element={<MainPage/>} />
        <Route path='/ochaone' element={<OchaOne/>} />
        <Route path='/ochatwo' element={<OchaTwo/>} />
        <Route path='/ochathree' element={<OchaThree/>} />
        <Route path='/cloudlab' element={<CloudLab/>} />
        <Route path='/coway' element={<Coway/>} />
        <Route path='/jetsmarter' element={<Jetsmarter/>} />
        <Route path='/lavage' element={<Lavage/>} />
        <Route path='/philip' element={<Philip/>} />
        <Route path='/elcamino' element={<ElCamino/>} />
        <Route path='/vigor' element={<Vigor/>} />
        <Route path='/porto' element={<Porto/>} />
        <Route path='/learn/main' element={<Main/>} />
        <Route path='/learn/printmarketing' element={<PrintMarketing/>} />
        <Route path='/learn/killercopy' element={<KillerCopy/>} />
        <Route path='/learn/dmsecrets' element={<DMSecrets/>} />
        <Route path='/learn/colorspsy' element={<PsyColors/>} />
        <Route path='/learn/graphicandimg' element={<GraphicAndImg/>} />
        <Route path='/learn/webglossary' element={<WebGlossary/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/faqs' element={<FAQs/>} />
        <Route path='/privacy' element={<PrivacyPolicy/>} />
        <Route path='/termsofservice' element={<TermsOfService/>} />
        <Route path='/contactnav' element={<ContactNavigation/>} />
        <Route path='/blog' element={<BlogMain/>} />
        <Route path='/litepackages' element={<LitePackages/>} />
        <Route path='/litepackagestwo' element={<LitePackagesTwo/>} />
        
        
        <Route path="/home2" element={<MobHomeTwo />} />
        <Route path="/home3" element={<MobHomeThree />} />

      </Routes>
      {/* <div
        className={`${
          true
            ? "visible cssanimation fadeInBottom "
            : "invisible"
        }     flex justify-center w-[100vw] fixed bottom-0 z-30  `}
      >
        
       
      <MobNavBar showNavBar={true} />
        
      </div> */}
     
    </div>
  );
}

export default App;
