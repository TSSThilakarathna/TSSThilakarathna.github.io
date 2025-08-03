import React from 'react';
import { FaInstagram, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';

function Hey() {
  return (
    <>
      <div className="relative top-[100px] flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 p-6 sm:p-8 md:p-10">
        <div className="w-full sm:max-w-[90%] md:w-[776px] bg-[#131929] h-auto p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[30px] text-center md:text-left relative">
          
          {/* Text content */}
          <div>
            <h1 className="text-[#DCD5EB] text-lg sm:text-xl md:text-3xl font-semibold">
              Hey, I'm <span className="text-[#FED035]">Sachin</span>
            </h1>
            <h2 className="text-[#928D9B] text-sm sm:text-base md:text-lg mt-2">
              Software Engineer UG | Developer | UI/UX Enthusiast
            </h2>
            <p className="text-[#DCD5EB] text-sm sm:text-base md:text-lg mt-4 ">
              Hello — I’m Sachin Thilakarathna, a Developer and UI/UX Enthusiast based in Sri Lanka, passionate about building clean, engaging, and meaningful digital experiences.
            </p>
          </div>

          {/* Connect & Resume buttons: show on md and up */}
          <div className="hidden md:flex gap-4 mt-6">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#FED035] text-[#131929] font-semibold px-6 py-2 rounded-full hover:bg-[#bdbcba97] transition duration-300"
            >
              Connect
              <AiOutlineMail className="text-lg" />
            </a>
            <a
              href="public/Resume/Sachin Thilakarathna (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-[#FED035] text-[#FED035] font-semibold px-6 py-2 rounded-full hover:bg-[#fecf3598] hover:text-[#131929] transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0 md:absolute md:top-10 md:right-10">
            <a href="https://www.linkedin.com/in/sachin-thilakarathna-b7827727b/" className="text-[#FED035] hover:text-white text-xl" target="_blank" rel="noopener noreferrer" title='Sachin thilakarathna on Linkedin'><FaLinkedin /></a>
            <a href="https://www.behance.net/tss11" className="text-[#FED035] hover:text-white text-xl" target="_blank" rel="noopener noreferrer" title='Sachin thilakarathna on Behance'><FaBehance /></a>
            <a href="https://github.com/SachinThilakarathna" className="text-[#FED035] hover:text-white text-xl" target="_blank" rel="noopener noreferrer" title='Sachin thilakarathna on Github'><FaGithub /></a>
            <a href="https://www.instagram.com/sachn.thilakarathna/?hl=en" className="text-[#FED035] hover:text-white text-xl" target="_blank" rel="noopener noreferrer" title='Sachin thilakarathna on Instagram'><FaInstagram /></a>
            {/* <a href="#" className="text-[#FED035] hover:text-white text-xl" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a> */}
          </div>
        </div>

        {/* Image */}
        <div className="w-[200px] sm:w-[240px] md:w-[292px] h-auto flex flex-col items-center ">
          <img
            src="public/sachin_thilakarathna_image1.png"
            alt="1stimage"
            className="w-full h-auto"
          />

          {/* Connect & Resume buttons: show on small screens only */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:hidden">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#FED035] text-[#131929] font-semibold px-6 py-2 rounded-full hover:bg-[#bdbcba97] transition duration-300 justify-center w-[200px]"
            >
              Connect
              <AiOutlineMail className="text-lg" />
            </a>
            <a
              href="public/Resume/Sachin Thilakarathna (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-[#FED035] text-[#FED035] font-semibold px-6 py-2 rounded-full  hover:bg-[#fecf3598] hover:text-[#131929] transition duration-300 text-center w-[200px]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hey;
