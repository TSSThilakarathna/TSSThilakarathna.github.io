import React, { useState } from 'react';
import Menuelinks from './Menuelinks';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-opacity-70 backdrop-blur-lg px-[30px] sm:px-18 md:px-16 lg:px-24 py-4 sm:py-5 flex justify-between items-center">
      <img
        src="public/sachin_thilakarathna_logo.png"
        alt="logo"
        className="w-8 sm:w-10"
      />

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 sm:gap-8 md:gap-10 text-[#d6d6d6]">
        <Menuelinks linkname="About" url="#about" />
        <Menuelinks linkname="Projects" url="#projects" />
        <Menuelinks linkname="Contact" url="#contact" />
      </nav>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-[#d6d6d6] text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#131929] bg-opacity-95 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden text-[#d6d6d6]">
          <Menuelinks
            linkname="About"
            url="#about"
            onClick={() => setMenuOpen(false)}
          />
          <Menuelinks
            linkname="Projects"
            url="#projects"
            onClick={() => setMenuOpen(false)}
          />
          <Menuelinks
            linkname="Contact"
            url="#contact"
            onClick={() => setMenuOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}

export default Header;
