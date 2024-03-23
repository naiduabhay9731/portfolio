import React from "react";

import styles from "./ProjectCard.module.css";
import LangAI from "./images/LangAI.png";
import Gmeet from "./images/Gmeet2.png";
import Todo from "./images/Todo.png";


export const ProjectCard = (props) => {
    
    // const {
    //      { title, imageSrc, description, skills, demo, source },
    //   ,key}=props;
    const{ project,index}= props;
    const ar=[Gmeet,LangAI,Todo];
    console.log(index);
  return (
    <div className={styles.container}>
      <img
        src={ar[index]}
        alt="Text2"
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a href={project.source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
