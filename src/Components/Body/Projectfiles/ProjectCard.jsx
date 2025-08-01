
import React from 'react';
import { FaGithub, FaBehance, FaLinkedin } from 'react-icons/fa';

function ProjectCard({ title, description, imageUrl, siteUrl, iconType, linkedinUrl }) {
  let MainIcon;

  if (iconType === 'github') MainIcon = FaGithub;
  else if (iconType === 'behance') MainIcon = FaBehance;

  return (
    <div className="relative group rounded-lg shadow-lg overflow-hidden transition-all duration-300 max-w-xs bg-[#1a1a2e]">
      {/* Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 sm:h-48 object-cover"
        />

        {/* Hover icons - visible only on sm+ */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex">
          <div className="flex gap-4">
            {MainIcon && siteUrl && (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl hover:scale-110 transition ${
                  iconType === 'github'
                    ? 'text-black'
                    : iconType === 'behance'
                    ? 'text-[#1769FF]'
                    : ''
                }`}
              >
                <MainIcon />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] text-2xl hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h2 className="text-[15px] sm:text-[18px] font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm sm:text-base text-gray-300 text-justify">{description}</p>

        {/* Mobile icons - yellow and shown only on small screens */}
        <div className="flex gap-4 mt-4 sm:hidden">
          {MainIcon && siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FED035] text-xl hover:text-white transition"
            >
              <MainIcon />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FED035] text-xl hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
