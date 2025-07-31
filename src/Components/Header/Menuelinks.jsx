import React from 'react';

function Menuelinks(props) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = props.url.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <a
        href={props.url}
        onClick={handleClick}
        className="no-underline relative hover:text-[#FED035] transition-colors duration-200 cursor-pointer"
      >
        {props.linkname}
      </a>
    </div>
  );
}

export default Menuelinks;
