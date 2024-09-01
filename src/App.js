import React from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components/index";
import {BrowserRouter} from 'react-router-dom'
import { OrbitiCircle } from './components/OrbitCircle';
import newContact from './components/NewContact';
import { ProjectCard } from './components/ProjectCard';
const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className=' bg-cover bg-no-repeat bg-center'>
       <Navbar />
       <Hero />
       <About/>
       <Experience/>
       <OrbitiCircle />
       {/* <Tech/> */}
       <Works/>
       {/* <ProjectCard /> */}
       {/* <Feedbacks/> */}
       <Contact/>
       <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
