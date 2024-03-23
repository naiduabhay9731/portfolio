
import './App.scss';
import { Routes,Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
  
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/skills' element={<Skills />} />
      </Route>
    </Routes>
  </>
   
  );
}

export default App;
