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

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />

        <Route path="/services/Talent&Entertainment" element={<DMService title={`Talent & Entertainment`} subItems={['s','w']} />} />
        <Route path="/home2" element={<MobHomeTwo />} />
        <Route path="/home3" element={<MobHomeThree />} />
      </Routes>
    </div>
  );
}

export default App;
