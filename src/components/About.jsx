import React from "react";
import "../css/About.css";
import { Container, Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const About = () => {
  return (
    <>
      <div className="sobremi">
        <div className="info">
          <h1>Hola Soy Agustin Cáceres</h1>
          <h2>Porgramador Front-end</h2>
          <Container fluid="true">
            <Row className="contendor">
              <Col className="aboutMe">
              <div className="Contenedorlogo">
                <img src="../public/LogoProgramador.jpg" alt=""  className="logo"/>
              </div>
              <div>
                <h3>Sobre Mí</h3>
                <p>
                  Soy un porgramador Junior Front-end el cual aprende a
                  programar de forma autodidácta y mnte cursos, como por ejemplo cursos de CoderHouse, donde aprendí sobre Javascript y ReactJs, siempre tratando de mejorar e
                  ir aprendiendo cada vez más para aplicarlo en proyectos, manejo 
                  los siguientes lenguajes: 
                </p>
        
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>ReactJS</li>
                </ul>
                </div>
                <h3 className="Titulo-certificado">Certificados</h3>
                <div className="certificados">
                <div className="javascript">
                <img src="../public/certificadoJavascript.png" alt=""  height={500}/>
                </div>
                <div className="Certificadoreact">   
                  <img src="../public/certificadoReactjs.png" alt="" height={500} /></div>
                </div>
                
              </Col>
              <Col className="imageMe">
                <Image
                  src="../public/foto.jpg"
                  className="foto"
                  roundedCircle
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
