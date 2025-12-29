import React from 'react';
import Themetoogle from '../components/Themetoogle'
import Starbackground from '../components/Starbackground'
import { Navbar } from '../components/Navbar';
import Herosection from '../components/Herosection';
import About from '../components/About';
import Skills from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from 'lucide-react';
import { Contactsection } from '../components/Contactsection';
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
       <Themetoogle />
    <Starbackground />
    <Navbar />
    <Herosection />
    <About />
    <Skills />  
    <Projects />
    <Contactsection />
    </div>
  )
}

export default Home