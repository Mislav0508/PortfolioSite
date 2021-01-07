import {React, useState, useRef, useEffect} from 'react'
import logo from "./logoMC.png"
import {ImMenu} from "react-icons/im"
import {links} from "./data"
import {Link} from "react-router-dom"

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const navbarListContainerRef = useRef(null) //container
  const navbarListRef = useRef(null)          // ul
  
  useEffect(() => { 
    const navbarListHeight = navbarListRef.current.getBoundingClientRect().height // Height of the ul
    if(showNavbar){
      navbarListContainerRef.current.style.height = `${navbarListHeight}px` // Height of the container
    }else{
      navbarListContainerRef.current.style.height = "0px"
    }
  },[showNavbar])
  return (
    <nav className="navbar" >
      <a href="/" className="logo"><img src={logo} alt="logo" className="logo"/></a>      
      <div className="navbar-list-container" ref={navbarListContainerRef}>
        <ul className="navbar-list" ref={navbarListRef}>
          {links.map((link,index) => {
            const {id,url,text} = link
            return (
              <>
                <Link to={url} key={id} className="nav-link">
                  <li key={index}>{text}</li>
                </Link>
              </>
            )
          })}
        </ul>
      </div>
      <ImMenu className="hamburger-btn" onClick={() => {
        setShowNavbar(!showNavbar)
      }}/>
    </nav>
  )
}
