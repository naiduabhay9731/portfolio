import './index.scss';
import { Link } from 'react-router-dom';
import Logot from '../../assets/images/logo-s.png';
import Loader from 'react-loaders'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';


const Home=()=>{

    const [letterClass,setLetterClass]= useState('text-animate');
    const nameArr=['b','h','a','y',' ','N','a','i','d','u'];
    const descArr=['F','u','l','l',' ','S','t','a','c','k',' ','W','e','b',' ','D','e','v','e','l','o','p','e','r'];

    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover')
        },4000)
    },[]);
    return (
        <>

       
    <div className='container home-page'>
        
        <div className='text-zone'> 
            <h1><AnimatedLetters letterClass={letterClass}
            strArray={['H','i']}
            idx={15} /> <br/> <AnimatedLetters letterClass={letterClass}
            strArray={['I',' ','a','m']}
            idx={15} />
            <img src={Logot} alt='Text2'></img>
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArr}
            idx={15}/>
            <br></br>
            <AnimatedLetters letterClass={letterClass}
            strArray={descArr}
            idx={15} />
            </h1>
            <h2>Student at IIT Guwahati</h2>
            <Link to='/contact' className='flat-button'> Contact Me</Link>
        </div>
        
    </div>
    <Loader type="pacman" />
    </>)
}
export default Home;
