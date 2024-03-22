import React from "react";

import styles from "./Projects.module.css";

import { useEffect, useState } from 'react'

import AnimatedLetters from '../AnimatedLetters'
import projects from "./projects.json";
import "./index.scss";

import { ProjectCard } from "./ProjectCard";

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        return  setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
 
    <section className={styles.container} id="projects">
      
        <div className="text-zone">
          <h1 className="pos">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e','c','t', 's']}
              idx={15}
            />
          </h1>
          
        </div>
       
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard index={id} project={project} />;
        })}
      </div>
    </section>
    
  );
};
export default Project;
