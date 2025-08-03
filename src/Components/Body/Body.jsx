import React from 'react'
import Hey from './Hey'
import ThreeBackground from '../ThreeBackground'
import About from './about'
import Help from './Help'
import Contact from './Contact'
import Project from './Project'
import BackToTop from './BackToTop'
import UpcomingProjects from './UpcomingProjects'
import FeedbackSlider from './FeedbackSlider'


function Body() {
  return (
    <div className='mb-[400px]'>
        <ThreeBackground/>
        <Hey/>
        <About/>
        <Project/>
        <UpcomingProjects/>
        <FeedbackSlider/>
        <Help/>
        <Contact/>
        
        <BackToTop/>
    </div>
  )
}

export default Body
