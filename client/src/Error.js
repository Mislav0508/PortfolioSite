import React from 'react'
import {Link} from "react-router-dom"

export const Error = () => {
  return (
    <div className="error">
      <h1>Oops! There was an Error, please try again.</h1>
      <Link to="/"><button className="home-btn">Home</button></Link>
      
    </div>
  )
}
