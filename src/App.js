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
function App() {

  return (
    <div className="App bg-[#EFEFEF]  ">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
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
