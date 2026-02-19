import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Services'
import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Page = () => {
  return (
    <>
     <Navbar/> 
     <Hero/>
     <About/>
     <Skills/>
     <Section/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default Page;
