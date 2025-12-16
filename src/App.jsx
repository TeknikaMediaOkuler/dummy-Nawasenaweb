import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#6B4638] min-h-screen text-slate-900 font-sans selection:bg-[#C8D82E]/30">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
