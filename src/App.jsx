

import { NavBar } from './components/NavBar'
import { About } from './components/About'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Portafolio } from './components/Portafolio'
import { Skill } from './components/Skill'
import { Contacto } from './components/Contacto'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='portafolio' element={<Portafolio/>}/>
      <Route path='category/skills' element={<Skill/>}/>
      <Route path='category/contacto' element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>
      <Contacto id="Contacto"/>
      <Skill id="skill"/>
      <Portafolio id="portafolio"/>
      </>
  )
}

export default App
