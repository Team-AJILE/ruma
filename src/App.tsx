import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Features from "./components/Features";
import Walkthrough from "./components/Walkthrough";
import HowItWorks from "./components/HowItWorks";
import Metrics from "./components/Metrics";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

const SHOW_TRUST_STRIP = false;

function App() {
  return (
    <div className="r-app">
      <Hero />
      {SHOW_TRUST_STRIP && <TrustStrip />}
      <Features />
      <Walkthrough />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
