import "./index.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Resme from "../../assets/images/CV.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faCog,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";


const Sidebar = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the display of the mobile dropdown menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
  return (
    <div className={showMenu ? "nav-bar full-height" : "nav-bar"}>
      {/* <Button className="toggleButton " onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} color="#4d4d4e" />
      </Button> */}
      <Button className="toggleButton" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} color="#4d4d4e" />
      </Button>

      {showMenu ? (
        <div className={"is" + showMenu}>
          <nav>
            <NavLink
              exact="true"
              className="home-link"
              activeclassname="active"
              to="/"
            >
              <FontAwesomeIcon  icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="about-link"
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="skills-link"
              to="/skills"
            >
              <FontAwesomeIcon icon={faCog} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="work-link"
              to="/projects"
            >
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abhay-naidu-640053227/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/naiduabhay9731"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                className=" resume"
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1og3yxPW-plYdSZtvc8yDNuc4Ist26kI9/view?usp=drive_link"
              >
                <img src={Resme} alt="Resme"></img>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Sidebar;
