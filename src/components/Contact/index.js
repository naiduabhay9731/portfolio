import "./index.scss";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faHome,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in Internship opportunities . However, if you have
            any other requests or questions, don't hesitate to contact me using
            below methods .
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <p>Linkedin:</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abhay-naidu-640053227/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
            </div>
            <div className="contact-item">
              <p>Email : a.naidu@iitg.ac.in</p>
              <a href="mailto:a.naidu@iitg.ac.in">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              </a>
            </div>
            <div className="contact-item">
              <p>Email: naiduabhay1412@gmail.com</p>
              <a href="mailto:naiduabhay1412@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              </a>
            </div>
            
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
