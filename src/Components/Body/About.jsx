import React, { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div id ="about" className="relative top-[200px] flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 p-6 sm:p-8 md:p-10">
      
      {/* Image Section */}
      <div className="w-[200px] sm:w-[240px] md:w-[292px] h-auto flex flex-col items-center">
        <img
          src="public/sachin_thilakarathna_image2.png"
          alt="1stimage"
          className="w-full h-auto rounded-[20px]"
        />
      </div>

      {/* Text + Tabs Section */}
      <div className="w-full sm:max-w-[90%] md:w-[776px] bg-[#131929] h-auto p-8 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[30px] text-center md:text-left relative">
        <h1 className="text-[#FED035] text-lg sm:text-xl md:text-2xl font-semibold">
          What makes me different?
        </h1>
        <p className="text-[#DCD5EB] text-sm sm:text-base md:text-lg mt-4">
          I’m a Software Engineering student at General Sir John Kotelawala Defence University. I’m a fast learner who loves web development and UI/UX design. I enjoy building clean, easy-to-use websites and apps that make people’s lives better.
        </p>

        {/* Tabs */}
        <div className="flex justify-center md:justify-start space-x-8 border-b border-gray-600 mt-8 mb-6">
          {['skills', 'education', 'certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-base sm:text-lg font-semibold ${
                activeTab === tab
                  ? 'border-b-4 border-yellow-400 text-yellow-400'
                  : 'text-gray-400 hover:text-yellow-400'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-gray-200 text-sm sm:text-base md:text-lg text-left md:text-left">
          {activeTab === 'skills' && (
            <ul className="list-disc list-inside space-y-1">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Java</li>
              <li>JQuery</li>
              <li>Tailwind CSS</li>
              <li>UI/UX Design with Figma</li>
              <li>Version Control with Git</li>
            </ul>
          )}

          {activeTab === 'education' && (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li>General sir John Kotelawala Defense University ( 2022 - Present )</li>
                <li className="pl-6 list-none text-[12px] md:text-[15px] text-[#928D9B]">Bc (Hons) in Software Engineering Undergraduate.</li><br />
                <li>Mahinda College Galle ( Jan 2008 - Jan 2022 )</li>
                <li className="pl-6 list-none text-[12px] md:text-[15px] text-[#928D9B]">For A/L, I appeared in the Mathematics stream and obtained 1A and 2Cs.</li>
              </ul>
            
            </div>
          )}

          {activeTab === 'certifications' && (
            <ul className="list-disc list-inside space-y-1">
              <li><a href="https://www.coursera.org/account/accomplishments/verify/RGINMBC5JRI8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" className='text-[#4f81cd]' target="_blank">React Basics</a> by Coursera</li>
              <li><a href="https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_1000-free-courses-with-free-certificates-activity-7119388277022879745-Thlj?utm_source=share&utm_medium=member_desktop" className='text-[#4f81cd]' target="_blank">Front End Development - HTML</a> by Great Learning Academy</li>
              <li><a href="https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_1000-free-courses-with-free-certificates-activity-7119364327324733441-K6uP?utm_source=share&utm_medium=member_desktop" className='text-[#4f81cd]' target="_blank">Programming Basics</a> by Great Learning Academy</li>
              <li><a href="https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_1000-free-courses-with-free-certificates-activity-7180967972742606849-LMmT?utm_source=share&utm_medium=member_desktop" className='text-[#4f81cd]' target="_blank">Java Programming</a> by Great Learning Academy</li>
              <li><a href="https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_1000-free-courses-with-free-certificates-activity-7179893732350070784-12Pb?utm_source=share&utm_medium=member_desktop" className='text-[#4f81cd]'target="_blank">OOPs in Java</a> by Great Learning Academy</li>
              <li><a href="https://alison.com/certification/check/1e0671c63f" className='text-[#4f81cd]'>Introduction to UI/UX Design</a> by Alison</li>
              <li><a href="https://www.linkedin.com/posts/sachin-thilakarathna-b7827727b_web-design-for-beginners-certificate-activity-7251437819401773056-jBtY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ0dMwBtAf4-DqXMTY-MnuaYdYKAO-FOcw" className='text-[#4f81cd]' target="_blank">Web Design for Beginners</a> by University of Moratuwa</li>
              <li><a href="http://verify.skilljar.com/c/2akixdq6azun" className='text-[#4f81cd]' target="_blank">LinkedIn Content and Creative Design Certification</a> by Linkedin Marketing Labs</li>
              <li><a href="https://www.hackerrank.com/certificates/6ab013642d01" className='text-[#4f81cd]' target="_blank">CSS</a> by HackerRank</li>
              <li><a href="https://www.hackerrank.com/certificates/ed1c34ea7030" className='text-[#4f81cd]' target="_blank">JavaScript</a> by HackerRank</li>
              <li><a href="https://www.hackerrank.com/certificates/cb99224f586b" className='text-[#4f81cd]' target="_blank">Java(Basic)</a> by HackerRank</li>
              <li><a href="https://www.sololearn.com/en/certificates/CC-FTBLCZ6G" className='text-[#4f81cd]' target="_blank">SEO with AI</a> by Sololearn</li>
              <li><a href="https://www.credly.com/badges/4f64253f-2390-44f8-8ae5-6156d7a502b7/linked_in_profile" className='text-[#4f81cd]' target="_blank">Introduction to Networks</a> by Cisco Network Academy</li>
              <li><a href="https://coursera.org/share/ed7a5fa42d90c7ac8441f14066a39d0f" className='text-[#4f81cd]' target="_blank">Introduction to Data Analysis using Microsoft Excel</a> by Coursera</li>




            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
