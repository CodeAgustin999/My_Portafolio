import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import "../css/contacto.css"
import { SendMail } from "./SendMail";

export const Contacto = () => {
  return (
    <>
    <div className="contacto">

    
      <h1>Formas de contactarme</h1>
      <h3>Puedes contactarme por estos medios</h3>
   <div className="contenedorLinks" >
    <div className="linkedin">
    <a href="https://www.linkedin.com/in/agustin-c%C3%A1ceres-757b0a208/">
      <FaLinkedin  size={150}/>
      </a>

    </div>
    <div className="whatsaap">

    <a
             href="https://api.whatsapp.com/send?phone=543516378352&text=Hola,necesito info"

              target="_blank"
              className="button button_small button_green"
            >
             <SiWhatsapp  size={150} color="green"/>
             

            </a>
    </div>
    <SendMail />
   </div>



<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br />
      



      </div>
</>
  );
};
