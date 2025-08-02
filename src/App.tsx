import React from 'react';
import { Newspaper } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

const committeeImages = [
  { src: '/images/AIPPM%202.jpg', alt: 'AIPPM Chair' },
  { src: '/images/AIPPM%20SIVCON.jpg', alt: 'SIVCON Chair' },
  { src: '/images/DISEC%201.jpg', alt: 'DISEC Chair' },
  { src: '/images/IPC_1.jpg', alt: 'IPC Head' },
  { src: '/images/UNHCR.jpg', alt: 'UNHCR Chair' },
  { src: '/images/COPUOS.jpg', alt: 'COPUOS Chair' },
];

const Committee: React.FC = () => {
  return (
    <section
      id="committee"
      className="newspaper-border mt-8 mb-8 fade-in p-6 rounded-md relative max-w-[800px] mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 uppercase border-b-2 border-black pb-2 text-left">
        Committee 
      </h2>

      <div
        className="
          overflow-x-auto whitespace-nowrap flex
          scroll-snap-x mandatory
          w-full
          px-0
        "
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {committeeImages.map((image, index) => (
          <div
            key={index}
            className="
              flex-none border-2 border-gray-400 rounded-md bg-white overflow-hidden
              w-full max-w-[800px]
              sm:w-[300px] sm:h-[290px]
              md:w-[440px] md:h-[435px]
              scroll-snap-align start
            "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-amber-50 font-serif text-gray-900">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 bg-paper-texture opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <Navigation />
        <main className="mt-6">
          <Hero />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
            <div className="md:col-span-8">
              <About />
              <Schedule />
              <Committee /> {/* Committee section with scrollable images inside border */}
            </div>
            <div className="md:col-span-4">
              <RegistrationForm />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
