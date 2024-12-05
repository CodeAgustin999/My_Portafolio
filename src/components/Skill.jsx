import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import "../css/Skill.css";

export const Skill = () => {
  return (
    <div className="skills">
     
      

      <h1>Habilidades</h1>
      <div className="grid-container">
        <div className="grid-items">
          <div className="html5">
            <FaHtml5 size={150} color="red" className="logo-html" />
            <h4 className="texto-skill">HTML5</h4>
          </div>
          <div className="css">
            <IoLogoCss3 size={150} color="blue" className="logo-css" />
            <h4 className="texto-skill">CSS</h4>
          </div>
          <div className="javascript">
            <IoLogoJavascript
              size={150}
              color="yellow"
              className="logo-javascript"
            />
            <h4 className="texto-skill">JAVASCRIPT</h4>
          </div>
          <div className="reactjs">
            <RiReactjsLine
              size={150}
              color="skyblue"
              className="logo-reactjs"
            />
            <h4 className="texto-skill">REACTJS</h4>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
