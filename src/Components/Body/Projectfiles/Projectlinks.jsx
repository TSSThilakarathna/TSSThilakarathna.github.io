import React from 'react';

function Projectlinks({ titlename, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-200 ${
        isActive ? 'text-[#FED035]' : 'text-[#d6d6d6]'
      } hover:text-[#FED035]`}
    >
      {titlename}
    </button>
  );
}

export default Projectlinks;
