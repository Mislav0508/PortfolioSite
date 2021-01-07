import React from 'react'
import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {SiCss3, SiJavascript, SiMongodb, SiHeroku, SiNetlify} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {BsFillBootstrapFill} from "react-icons/bs"
import {GrNode} from "react-icons/gr"


export const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="underline"></div>
      <p className="ab-desc-me">Hello! My name is Mislav, and i'm a self taught software developer. The main area of my expertise is web development. I enjoy building web sites as well as web applications. My skillset is mostly based around Javascript and it's frameworks. Most notably would be the MERN stack which enables me to complete projects from front to back. Coding is something I really enjoy doing and am passionate about. If you have any questions please feel free to contact me. </p>
      <h1>Skills</h1>
      <section className="skills-section">
        <div className="skills-div">
          <h3 className="ab-desc">Front End</h3>
          <AiFillHtml5 className="skills-icon html"/>
          <SiCss3 className="skills-icon css"/>
          <SiJavascript className="skills-icon js"/>
          <FaReact className="skills-icon react"/>
          <BsFillBootstrapFill className="skills-icon bootstrap"/>
        </div>
        <div className="skills-div">
          <h3 className="ab-desc">Back End</h3>
          <GrNode className="skills-icon node"/>
          <SiMongodb className="skills-icon mongo"/>
        </div>
        <div className="skills-div">
          <h3 className="ab-desc">Version control</h3>
          <AiFillGithub className="skills-icon git"/>
        </div>
        <div className="skills-div">
          <h3 className="ab-desc">Deployment</h3>
          <SiHeroku className="skills-icon heroku"/>
          <SiNetlify className="skills-icon netlify"/>
        </div>
        <div className="skills-div">
          <h3 className="ab-desc">Languages</h3>
          <ul>
            <li>English</li>
            <li>German</li>
            <li>Croatian</li>
          </ul>
        </div>
      </section>
      <p></p>
    </div>
  )
}
