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
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 80,
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
