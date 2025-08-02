import React, { useRef } from 'react';
import { Globe, Award, Users } from 'lucide-react';

const executiveBoardImages = [
  { src: '/images/DISEC EB ANUBHAV.jpg', alt: 'DISEC EB ANUBHAV' },
  { src: '/images/DISEC EB VICE.jpg', alt: 'DISEC EB VICE' },
];

const About: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="newspaper-border mb-8 fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase border-b-2 border-black pb-2">
        Executive Board Members
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <div>
          <h3 className="text-xl font-bold mb-2"></h3>
         
          <p className="newspaper-dropcap mb-4">
            Model United Nations (MUN) is an educational simulation where students 
            learn about diplomacy, international relations, and the United Nations. 
            Participants role-play as delegates representing different countries and 
            debate on pressing international issues.
          </p>
          <div className="flex items-center mt-4">
            <Globe className="mr-2" size={20} />
            <span>25+ Countries Represented</span>
          </div>
          <div className="flex items-center mt-2">
            <Users className="mr-2" size={20} />
            <span>400+ Participants Expected</span>
          </div>
          <div className="flex items-center mt-2">
            <Award className="mr-2" size={20} />
            <span>10 Committee Sessions</span>
          </div>
          
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">This Year's Theme</h3>
          <p className="italic text-center border-b border-black pb-2 mb-3">
            "Building Resilient Futures: Global Cooperation in Challenging Times"
          </p>
          <p>
            Our 2025 conference focuses on how nations can work together to address 
            unprecedented global challenges including climate change, technological 
            disruption, and public health emergencies.
          </p>
          <div className="newspaper-divider"></div>
          <h4 className="text-lg font-bold">Committees Include:</h4>
          <ul className="list-disc pl-5 mt-2">
            <li>Security Council</li>
            <li>General Assembly</li>
            <li>Economic and Social Council</li>
            <li>Human Rights Council</li>
            <li>Environmental Programme</li>
            <li>Historical Crisis Committee</li>
          </ul>
        </div>*/}
      </div>

      {/* Manual Slider */}
      <div
        ref={sliderRef}
        className="mt-10 flex overflow-x-auto scroll-snap-x mandatory space-x-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {executiveBoardImages.map((image, index) => (
          <div
            key={index}
            className="flex-none bg-amber-50 rounded-md border-2 border-gray-400 scroll-snap-align start"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '440px',
                maxHeight: '435px',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
