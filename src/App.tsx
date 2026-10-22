import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Certifications from "@/components/Certifications";
import Guide from "@/components/Guide";
import Gallery from "@/components/Gallery";
import AreasCovered from "@/components/AreasCovered";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";
import FloatingButtons from "@/components/FloatingButtons";
import ServiceDetail from "@/pages/ServiceDetail";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Certifications />
      <Guide />
      <AreasCovered />
      <Gallery />
      <FAQ />
      <CTAFooter />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        <FloatingButtons />
      </div>
    </HashRouter>
  );
}

export default App;
