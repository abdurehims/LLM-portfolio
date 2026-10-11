import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 60,
      startEvent: 'DOMContentLoaded',
      disableMutationObserver: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
