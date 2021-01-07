import React, {useEffect, useState} from 'react'
import {BsFillPersonCheckFill, BsCalendar} from "react-icons/bs"
import {AiOutlineMail, AiTwotonePhone} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {RiLockPasswordLine} from "react-icons/ri"
import "./randomPerson.css"

const defaultImage = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"

export const RandomPerson = () => {
  const [loading,setLoading] = useState(true)
  const [person,setPerson] = useState(null)
  const [attribute, setAttribute] = useState("name")
  const [value, setValue] = useState("mislav crnkovic")
  const getPerson = async () => {
    const response = await fetch("https://randomuser.me/api")
    const data = await response.json()
    const person = data.results[0]
    const {first, last} = person.name
    const {email} = person
    const {age} = person.dob
    const country = person.location.country
    const {phone} = person 
    const {password} = person.login
    const {large} = person.picture
    const fetchedPerson = {
      name: `${first} ${last}`,
      email,
      age,
      country,
      number: phone,
      password,
      large
    }
    setPerson(fetchedPerson)
    setLoading(false)
    setAttribute("name")
    setValue(fetchedPerson.name)

  } 
  useEffect(() => {
    getPerson()
  },[])
  const handleHover = (e) => {   
    const newValue = e.target.dataset.value 
    if(e.target.classList.contains("random-icon")){
      setAttribute(e.target.dataset.value)
    setValue(person[newValue])
    }    
  }
  return (
    <div className="home">
      <div className="div-one">
        <div className="">
          <button className="random-btn" onClick={getPerson}>{loading ? "LOADING..." : "RANDOM USER"}</button>
        </div>
        <div>
          <img src={(person && person.large) || defaultImage} alt="user" className="random-img"/>
        </div>
      </div>
      <h3 className="title-div">My {attribute} is: </h3>
      <h3 className="info-div">{value}</h3>
      <div className="div-two">
        <div className="random-icons-container">
          <button className="random-icon" data-value="name" onMouseOver={handleHover}>
            <BsFillPersonCheckFill />
          </button>
          <button className="random-icon" data-value="age" onMouseOver={handleHover}>
            <BsCalendar />
          </button>
          <button className="random-icon" data-value="email" onMouseOver={handleHover}>
            <AiOutlineMail />
          </button>
          <button className="random-icon" data-value="number" onMouseOver={handleHover}>
            <AiTwotonePhone />
          </button>
          <button className="random-icon" data-value="country" onMouseOver={handleHover}>
            <GoLocation />
          </button>
          <button className="random-icon" data-value="password" onMouseOver={handleHover}>
            <RiLockPasswordLine />
          </button>
        </div>
      </div>
    </div>
  )
}
