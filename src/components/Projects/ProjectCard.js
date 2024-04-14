import React from "react";

import styles from "./ProjectCard.module.css";
import LangAI from "./images/LangAI.png";
import Gmeet from "./images/Gmeet2.png";
import Todo from "./images/Todo.png";
import 'react-multi-carousel/lib/styles.css';

export const ProjectCard = (props) => {
    
    // const {
    //      { title, imageSrc, description, skills, demo, source },
    //   ,key}=props;
    const{ project,index}= props;
    const ar=[Gmeet,LangAI,Todo];
    console.log(index);
  return (
    <div className=" item ">
      <img
        src={ar[index]}
        alt="Text2"
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description2}>{project.description}</p>
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
      {(project.demo!=="")?
        (<a href={project.demo}  rel="noreferrer" target="_blank" className={styles.link}>
          Demo
        </a>):<></>
      }
        <a href={project.source}  rel="noreferrer" target="_blank" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
