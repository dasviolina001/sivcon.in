import React from 'react';

const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).toUpperCase();

  return (
    <header className="border-b-2 border-black pb-3 fade-in">
      {/* Top section with logo and title */}
      <div className="flex items-center justify-between mb-2">
        {/* Logo on the left (moved up slightly) */}
        <img
          src="/images/logo-Photoroom.png"
          alt="SIVCON Logo"
          className="h-16 w-auto ml-2 -mt-11"
        />

        {/* Headline and subheadline */}
        <div className="flex-1 text-center">
          <h1 className="newspaper-headline">THE SIVCON TIMES</h1>
          <p className="newspaper-subheadline mt-1 inline-block text-left ml-[-5%]">
            SIVCON'25
          </p>
        </div>

        {/* Empty div to balance layout */}
        <div className="w-16" />
      </div>

      {/* Bottom info row */}
      <div className="flex justify-between items-center text-xs mt-4 px-2">
        <div>VOL. 3</div>
        <div>{currentDate}</div>
        <div>SIBSAGAR EDITION</div>
      </div>
    </header>
  );
};

export default Header;
