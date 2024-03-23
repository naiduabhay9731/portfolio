import  './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import Resme from '../../assets/images/CV.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCog, faEnvelope,  faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin ,faGithub} from '@fortawesome/free-brands-svg-icons' 

const Sidebar =()=>{
    return (<div className='nav-bar'>
        <Link className='logo' to="/">
            <img className='main-logo 'src ={LogoS} alt ="Logo"></img>
            

        </Link>
        <nav>
            <NavLink exact="true" className='home-link'  activeclassname  ="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname ="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname ="active" className='skills-link'  to="/skills">
                <FontAwesomeIcon icon={faCog} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname ="active" className='work-link' to="/projects">
                <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname ="active" className='contact-link'  to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/abhay-naidu-640053227/'><FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/></a>
            </li>
            <li>
                <a  target='_blank' rel='noreferrer' href='https://github.com/naiduabhay9731'><FontAwesomeIcon icon={faGithub} color='#4d4d4e'/></a>
            </li>
            <li>
                <a className=' resume' target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1og3yxPW-plYdSZtvc8yDNuc4Ist26kI9/view?usp=drive_link'><img src={Resme} alt='Resme'></img></a>
            </li>
            
        </ul>

         
    </div>)
}
export default Sidebar;