import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="newspaper-border slide-in">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 uppercase leading-tight">
        Welcome to SIVCON'25
      </h2>
      <div className="border-t-2 border-b-2 border-black py-2 my-4 text-center italic text-sm sm:text-base">
        Where Voices Rise, Diplomacy Thrives, and Leaders Are Born
      </div>
      
      <div className="relative">
        <img 
          src="/images/first.jpg" 
          alt="Students at MUN conference" 
           className="w-full object-contain object-center border-2 border-black"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-xs sm:text-sm">
          SIVCON 2025 — The world is waiting for your resolution. Are you ready to take the floor?
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="newspaper-column sm:border-b md:border-b-0 sm:border-r-0 md:border-r pb-4 md:pb-0">
          <p className="newspaper-dropcap text-justify">
            Since its inception in 2019, SIVCON has stood as more than just a Model United Nations—
            it has become a movement of ideas, a forge for future diplomats, and a celebration of youth-led change.
            Rooted in the historic town of Sivasagar, a land of legacy and leadership, SIVCON carries forward
            a tradition of dialogue, critical thought, and progressive vision.
          </p>
        </div>

        <div className="newspaper-column border-b md:border-b-0 sm:border-r-0 md:border-r pb-4 md:pb-0">
          <p className="text-justify">
            Every edition of SIVCON has raised the bar higher—bringing together passionate delegates,
            expert executive boards, and transformative agendas that mirror the complexities of our real world.
            With a legacy of excellence and inclusivity, we’ve earned our place as one of the finest
            Model UN conferences in the region.
          </p>
        </div>

        <div className="newspaper-column">
          <p className="text-justify">
            Whether you’re a seasoned delegate or a curious first-timer, SIVCON promises a platform where words matter,
            solutions count, and every voice finds space.
            Join us this July for a three-day journey into global affairs, diplomacy, and youth leadership—
            where the conference floor becomes a crucible of ideas, collaboration, and change.
            <br /><br />
           
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
