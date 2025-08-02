import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav className="border-b-2 border-black py-2 sticky top-0 bg-amber-50 z-50">
      <div className="flex justify-between items-center md:hidden">
        <span className="font-bold">SECTIONS</span>
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-amber-100 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ul
        className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex md:justify-between 
          text-sm uppercase tracking-widest
          bg-amber-50
          md:bg-transparent
          absolute md:relative
          left-0 right-0
          md:left-auto md:right-auto
          border-b-2 md:border-b-0 border-black
          shadow-lg md:shadow-none
          flex-col md:flex-row items-center md:items-start
          text-center md:text-left
        `}
      >
        <li className="py-3 px-4 md:px-0 md:py-0 hover:bg-amber-100 md:hover:bg-transparent md:hover:underline">
          <a href="#home">Front Page</a>
        </li>
        <li className="py-3 px-4 md:px-0 md:py-0 hover:bg-amber-100 md:hover:bg-transparent md:hover:underline">
          <a href="#about">Executive Board Members</a>
        </li>
        <li className="py-3 px-4 md:px-0 md:py-0 hover:bg-amber-100 md:hover:bg-transparent md:hover:underline">
          <a href="#committee">Committees</a>
        </li>
        <li className="py-3 px-4 md:px-0 md:py-0 hover:bg-amber-100 md:hover:bg-transparent md:hover:underline">
          <a href="#schedule">Conference Agendas</a>
        </li>
        <li className="py-3 px-4 md:px-0 md:py-0 hover:bg-amber-100 md:hover:bg-transparent md:hover:underline">
          <a href="#register">Registration</a>
        </li>
        <li className="py-3 px-4 md:px-0 md:py-0 hover:bg-amber-100 md:hover:bg-transparent md:hover:underline">
          <button
            onClick={scrollToContact}
            className="bg-transparent border-none p-0 m-0 text-inherit cursor-pointer"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
