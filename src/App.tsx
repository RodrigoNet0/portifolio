import React from 'react'
import './App.css'
import About  from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projets from "./components/Projets.tsx";
import Footer from "./components/Footer.tsx";
import Object from "./components/Object.tsx";




function App() {
  

  return (
    <>
   
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
