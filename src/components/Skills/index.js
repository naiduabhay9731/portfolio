import "./index.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/images/meter1.svg";
import meter2 from "../../assets/images/meter2.svg";
import meter3 from "../../assets/images/meter3.svg";

import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import { useEffect, useState } from "react";

const Skills = () => {
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
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={["S", "k", "i", "l", "l", "s"]}
                    idx={15}
                  />
                </h2>

                <p>
                  Aspiring MERN stack developer with experience of 3 years in
                  ReactJS and NodeJS/ExpressJS, very efficient in C/C++,if you
                  want to know more about me You can find my cv on the Sidebar.
                </p>
                <Carousel
                  responsive={responsive}
                  autoPlay
                  autoPlaySpeed={2000}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                 <div className="item">
                    <img src={meter1} alt="Percentage" />
                    <h3>HTML/CSS</h3>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Percentage" />
                    <h3>C/C++</h3>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Percentage" />
                    <h3>JavaScript</h3>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Percentage" />
                    <h3>Python</h3>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Percentage" />
                    <h3>ReactJS</h3>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Percentage" />
                    <h3>NodeJS</h3>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Percentage" />
                    <h3>ExpressJS</h3>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Percentage" />
                    <h3>MongoDB/Mongoose</h3>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Percentage" />
                    <h3>MySQL</h3>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Percentage" />
                    <h3>Git/Github</h3>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Percentage" />
                    <h3>Docker</h3>
                  </div>
                  

                  <div className="item">
                    <img src={meter2} alt="Percentage" />
                    <h3>Latex</h3>
                  </div>
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

export default Skills;
