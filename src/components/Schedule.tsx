import React from 'react';
// import { Calendar, Clock } from 'lucide-react';

const agendaImages = [
  { src: '/images/AGENDA AVS 1.jpg', alt: 'Agenda AVS 1' },
  { src: '/images/AGENDA COPUOS.jpg', alt: 'Agenda COPUOS' },
  { src: '/images/AGENDA disec.jpg', alt: 'Agenda DISEC' },
  { src: '/images/AGENDA unhcr.jpg', alt: 'Agenda UNHCR' },
  { src: '/images/AGENDA AIPPM.jpg', alt: 'AGENDA AIPPM' },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="newspaper-border fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase border-b-2 border-black pb-2">
        Conference Agendas
      </h2>

      {/* <div className="flex items-center justify-center mb-4">
        <Calendar className="mr-2" size={20} />
        <span className="font-bold">January 25-28, 2025</span>
      </div>

      <div className="space-y-6">
        {scheduleItems.map((day, index) => (
          <div key={index} className={index > 0 ? "pt-4 border-t border-gray-400" : ""}>
            <h3 className="text-xl font-bold mb-2">{day.day}</h3>
            <div className="space-y-2">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="flex">
                  <div className="w-1/3 font-bold flex items-center">
                    <Clock size={14} className="mr-1" />
                    {event.time}
                  </div>
                  <div className="w-2/3">{event.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-400 text-sm italic text-center">
        Schedule subject to minor changes. All delegates will receive a detailed program upon registration.
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <h3 className="text-xl font-bold mb-2">Coming Soon!</h3>
      </div>*/}

      {/* Scrollable Agenda Image Slider */}
      <div
        className="mt-10 flex overflow-x-auto scroll-snap-x mandatory space-x-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {agendaImages.map((image, index) => (
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

export default Schedule;
