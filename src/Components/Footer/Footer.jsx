import React, { useEffect, useState } from 'react';

function Footer() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    function updateDateTime() {
      const options = { 
        year: 'numeric', month: 'long', day: 'numeric', 
        hour: '2-digit', minute: '2-digit', hour12: false, 
        timeZone: 'Asia/Colombo' 
      };
      const now = new Date();
      setDateTime(now.toLocaleString('en-US', options));
    }

    updateDateTime();
    const timer = setInterval(updateDateTime, 60000); // update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#131929] text-[#DCD5EB] py-6 text-center text-sm md:text-base select-none">
      <div>{dateTime}</div>
      <div className="text-[12px] sm:text-[13px] md:text-[13px] mt-2 text-[#928D9B]">Local time in Sri Lanka, LK</div>
      <div className="text-[12px] sm:text-[13px] md:text-[13px] mt-2 text-[#928D9B]">© 2025 . Made by <span className='text-[#DCD5EB] font-semibold'>sachin</span></div>
    </footer>
  );
}

export default Footer;
