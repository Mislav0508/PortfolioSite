import React from 'react'
import {Link} from "react-router-dom"

export const Home = () => {
  return (
    <div className="home">
      <div className="home-name">
      <h1>Mislav Crnković</h1>
      <h2>FULL STACK WEB DEVELOPER</h2>
      <Link to="./projects">
      <button className="home-btn">
        SEE PROJECTS
      </button>
      </Link>
      
      </div>
      
    </div>
  )
}
