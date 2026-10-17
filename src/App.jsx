import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EPCIService from './pages/services/EPCIService';
import SubseaService from './pages/services/SubseaService';
import PipelineService from './pages/services/PipelineService';
import AssetIntegrityService from './pages/services/AssetIntegrityService';
import FabricationService from './pages/services/FabricationService';
import ProcurementService from './pages/services/ProcurementService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Blog from './pages/Blog';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/epci" element={<EPCIService />} />
            <Route path="/services/subsea-engineering" element={<SubseaService />} />
            <Route path="/services/pipeline-engineering" element={<PipelineService />} />
            <Route path="/services/asset-integrity" element={<AssetIntegrityService />} />
            <Route path="/services/fabrication" element={<FabricationService />} />
            <Route path="/services/procurement" element={<ProcurementService />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
