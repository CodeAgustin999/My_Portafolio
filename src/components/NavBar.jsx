import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/navBar.css"
import { Link, animateScroll as scroll } from 'react-scroll';

export const NavBar = () => {
  return (
    <div className='navBar'>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="../public/LogoProgramador.jpg" alt="" height={50} /></Navbar.Brand>
          <Nav className="BarraNav" >
            
            <Link   to="sobremi"  href="#sobremi"smooth="true" duration={500} className='navButton ms-3' > Sobre mi</Link>
            <Link   to="contacto"  href="#contacto"smooth="true" duration={500} className='navButton ms-3'> contacto</Link>
            <Link   to="skills"  href="#skills"smooth="true" duration={500} className='navButton ms-3' > Habilidades</Link>
            <Link   to="portafolio"  href="#portafolio"smooth="true" duration={500} className='navButton ms-3' > portafolio</Link>
          
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}
