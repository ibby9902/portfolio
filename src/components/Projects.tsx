import React from 'react'
import Project from './Project'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-wrapper">
        <div className="projects-container">
        <h1>Projects</h1>
          <Project/>
        </div>
    </div>
  )
}

export default Projects