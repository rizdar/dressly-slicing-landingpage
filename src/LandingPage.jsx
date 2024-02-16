import BestSeller from './components/BestSeller';
import Brand from './components/Brand';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Steps from './components/Steps';
import Subscribe from './components/Subscribe';
import TopSelections from './components/TopSelections';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <TopSelections />
      <BestSeller />
      <Steps />
      <Subscribe />
      <Footer />
    </>
  );
}
