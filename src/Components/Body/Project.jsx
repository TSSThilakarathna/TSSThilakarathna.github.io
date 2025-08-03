import React, { useState } from 'react';
import Projectlinks from './Projectfiles/Projectlinks';
import ProjectCard from './Projectfiles/ProjectCard';

const projectData = [
  {
    id: 1,
    category: 'Web',
    title: 'Student Management System',
    description:
      'Web app to manage student data and registration for Akura SE Dept. Built with React and Firebase.',
    builtWith: ['React', 'Firebase'],
    imageUrl: 'public/Projects/Student_management_system.png',
    siteUrl: 'https://github.com/SachinThilakarathna/student-management-system.git',
    iconType: 'github',
    linkedinUrl:
      'https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_reactjs-firebase-studentmanagementsystem-activity-7314538429172629504-CaPJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ0dMwBtAf4-DqXMTY-MnuaYdYKAO-FOcw',
  },
  {
    id: 2,
    category: 'UI/UX',
    title: 'Campmate App UI',
    description:
      'A mobile app for planning camping trips, finding campsites, and staying safe outdoors. Designed with a focus on nature and user needs.',
    builtWith: ['Figma'],
    imageUrl: 'public/Projects/Campmate.png',
    siteUrl: 'https://www.behance.net/gallery/230797091/Campmate-Your-Smart-Camping-Companion',
    iconType: 'behance',
    linkedinUrl:
      'https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_campmate-uidesign-uxdesign-activity-7352965805430484993-asPQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ0dMwBtAf4-DqXMTY-MnuaYdYKAO-FOcw',
  },
  {
    id: 3,
    category: 'UI/UX',
    title: 'Viveé – Fashion eCommerce site UI',
    description:
      'A clean, modern UI/UX design for a women’s fashion website, focused on elegance, usability, and brand identity.',
    builtWith: ['Figma'],
    imageUrl: 'public/Projects/ecommerce_shopping_website.png',
    siteUrl:
      'https://www.behance.net/gallery/231043069/Vive-A-Modern-eCommerce-Website-for-Womens-Fashion',
    iconType: 'behance',
    linkedinUrl:
      'https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_uidesign-uxdesign-figmaprototype-activity-7355488436717305856-0Jtc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ0dMwBtAf4-DqXMTY-MnuaYdYKAO-FOcw',
  },
  {
    id: 4,
    category: 'Web',
    title: 'Tire Management Web and Mobile Application',
    description:
      'Our second-year group project — a tire management system for Pavara Traders at Colombo Port. Tracks tire data in real time with web and mobile apps using React and Firebase.',
    builtWith: ['React','Node.js', 'Firebase'],
    imageUrl: 'public/Projects/tire_management_System.jpeg',
    siteUrl: 'https://github.com/example/sales-tool',
    iconType: 'github',
    linkedinUrl:
      'https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_innovation-digitaltransformation-mobileappdevelopment-activity-7273285569818894336-8aDZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ0dMwBtAf4-DqXMTY-MnuaYdYKAO-FOcw',
  },
  {
    id: 5,
    category: 'UI/UX',
    title: 'Forest Time Capsule App UI',
    description:
      'A nature-themed UI design for exploring forest history and sharing future visions. Focused on awareness and interaction.',
    builtWith: ['Figma'],
    imageUrl:
      'public/Projects/MiniCapcule_behance_minicapsule_sachin_thilakarathna_UI_UX_designer_softeare_engineer_user_interface_freelancer_instergram_facebook_mobile_app_Upwork 1.png',
    siteUrl: 'https://www.behance.net/gallery/207147861/Forest-Time-Capsule-Past-and-Future-Exploration',
    iconType: 'behance',
    linkedinUrl:
      'https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_uidesign-uxdesign-environmentalawareness-activity-7237297138634760192-KX5m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ0dMwBtAf4-DqXMTY-MnuaYdYKAO-FOcw',
  },
];

function Project() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === 'All'
      ? projectData
      : projectData.filter((proj) => proj.category === activeFilter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <div id="projects" className="relative top-[300px] flex flex-col items-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 pb-10">
        <h1 className="text-[#FED035] text-xl sm:text-2xl md:text-2xl font-semibold">
          What I've done?
        </h1>
        <img
          src="public/sachin_thilakarathna_image4.png"
          alt="Header"
          className="w-10 sm:w-14 md:w-15 h-auto"
        />
      </div>

      <div className="flex gap-6 text-[#d6d6d6] pb-[30px]">
        {['All', 'Web', 'UI/UX'].map((item) => (
          <Projectlinks
            key={item}
            titlename={item}
            isActive={activeFilter === item}
            onClick={() => {
              setActiveFilter(item);
              setShowAll(false);
            }}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {visibleProjects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>

      {filteredProjects.length > 3 && (
        <button
          className="mt-6 text-sm text-[#FED035] hover:text-[#DCD5EB] transition"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
}

export default Project;
