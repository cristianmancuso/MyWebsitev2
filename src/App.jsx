import './App.css'
import Top from './Top.jsx'
import Inicio from './Inicio.jsx'
import Skill from './Skill.jsx'
import Projects from './Projects.jsx'
import Aboutme from './Aboutme.jsx'


function App() {


  return (
    <>
    <div className='h-auto w-screen py-2 bg-bgWeb flex flex-col'>
      <Top />
      <Inicio/>
      <Skill/>
      <Projects/>
      <Aboutme/>
      
    </div>
    
    </>
  )
}

export default App
