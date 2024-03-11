import { useState } from 'react'
import './App.css'
import  Card  from "./components/Card.tsx";
import About  from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projets from "./components/Projets.tsx";
import Footer from "./components/Footer.tsx";
import Object from "./components/Object.tsx";




function App() {
  

  return (
    <>
   <Card />
   <br /> <br />
      <About />
  <Projets />
  <Object/>
  <br />
  <Skills />
  
  <br />
  <Footer />
    </>
  )
}

export default App
