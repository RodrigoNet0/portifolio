import { useState } from 'react'
import './App.css'
import  Card  from "./components/Card.tsx";
import About  from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projets from "./components/Projets.tsx";


function App() {
  

  return (
    <>
    <Card />
<br/>
      <About />
  <br />
  <Skills />
     <Projets />
    </>
  )
}

export default App
