import React from 'react';
import { Helmet } from 'react-helmet';
import Hey from './Hey';
import ThreeBackground from '../ThreeBackground';
import About from './about';
import Help from './Help';
import Contact from './Contact';
import Project from './Project';
import BackToTop from './BackToTop';
import UpcomingProjects from './UpcomingProjects';

function Body() {
  return (
    <div className="mb-[400px]">
      <Helmet>
        <title>Sachin Thilakarathna | Software Engineer & UI/UX Designer</title>
        <meta
          name="description"
          content="Portfolio of Sachin Thilakarathna – Software Engineering student with a passion for web development, UI/UX design, and innovative projects."
        />
        <meta name="keywords" content="Sachin Thilakarathna, Software Engineer, UI/UX Designer, React Developer, Web Developer, Portfolio" />
        <meta name="author" content="Sachin Thilakarathna" />
        <meta property="og:title" content="Sachin Thilakarathna | Software Engineer & UI/UX Designer" />
        <meta property="og:description" content="Showcasing projects, skills, and upcoming initiatives by Sachin Thilakarathna." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="http://sachinthilakarathna.me/" />
      </Helmet>

      <ThreeBackground />
      <Hey />
      <About />
      <Project />
      <UpcomingProjects />
      <Help />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default Body;
