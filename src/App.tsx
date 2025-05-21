import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Benefits from './components/sections/Benefits';
import MobileApp from './components/sections/MobileApp';
import Testimonials from './components/sections/Testimonials';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import CallToAction from './components/sections/CallToAction';
import FAQ from './components/sections/FAQ';
import ScrollToTop from './components/ui/ScrollToTop';
import CookieConsent from './components/ui/CookieConsent';
import FreeTrialModal from './components/sections/FreeTrialModal';

function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const openTrialModal = () => {
    setIsTrialModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header onTrialClick={openTrialModal} />
        <main>
          <Hero onTrialClick={openTrialModal} />
          <Benefits />
          <MobileApp />
          <Testimonials />
          <HowItWorks />
          <Pricing onTrialClick={openTrialModal} />
          <FAQ />
          <CallToAction onTrialClick={openTrialModal} />
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
        <FreeTrialModal
          isOpen={isTrialModalOpen}
          onClose={() => setIsTrialModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;