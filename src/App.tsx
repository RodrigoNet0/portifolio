import { useState } from 'react'
import './App.css'
import  Card  from "./components/Card.tsx";
import About  from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
function App() {
  

  return (
    <>
      <Card />
<br/>
      <About />
 <br />
      <Skills />     
    </>
  )
}

export default App
