import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll to top
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-yellow-400 hover:bg-[#FED035] text-[#0C0F16] shadow-lg transition"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default BackToTop;
