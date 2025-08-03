import React from 'react';

function Projectlinks({ titlename, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-[14px] sm:text-[16px] md:text-[18px] font-medium transition-colors duration-200 ${
        isActive ? 'text-[#FED035]' : 'text-[#d6d6d6]'
      } hover:text-[#FED035]`}
    >
      {titlename}
    </button>
  );
}

export default Projectlinks;
