import React from "react";

import Loader from "react-loaders";
import Carousel from 'react-multi-carousel';
import { useEffect, useState } from "react";
import 'react-multi-carousel/lib/styles.css';
import AnimatedLetters from "../AnimatedLetters";
import projects from "./projects.json";
import "./index.scss";


import { ProjectCard } from "./ProjectCard";

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <section className="skill2" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={["P", "r", "o", "j", "e", "c","t","s"]}
                  idx={15}
                />
              </h2>

             
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                        
          {projects.map((project, id) => {
            return <ProjectCard index={id} project={project} />;
          })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Loader type="pacman" />
  </>
  );
};
export default Project;
