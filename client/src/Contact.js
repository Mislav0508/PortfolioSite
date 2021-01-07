import {React, useState} from 'react'
import {FaPhone} from "react-icons/fa"
import {GiHouse} from "react-icons/gi"
import {MdEmail} from "react-icons/md"
import axios from "axios"

export const Contact = () => {
  const [person, setPerson] = useState({name:"",email:"",subject:"",phone:"",message:""})
  const [people,setPeople] = useState([])
  const handleChange = (e) => {
    const name = e.target.name //input name property
    const value = e.target.value//value we type in the input
    setPerson({...person,[name]: value})
  } 
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(person.name && person.email && person.subject && person.phone && person.message){
      const newPerson = {...person, id:new Date().getTime().toString()}
      setPeople([...people, newPerson])         
      axios.post("https://crnkovicmislav.herokuapp.com/contact", person) //change URI when deploying app.
      .then((result) => {
        const client = result.data.client
        alert(`Thank you ${client.name} for contacting me! I will respond as soon as possible. Have a great day!`)
      })
      .catch(err => console.log(err))
      setPerson({name:"",email:"",subject:"",phone:"",message:""})
      }else{
      console.log("please fill out all fields!")
      alert("please fill out all fields!")
    }
  }
  return (
    <div className="contact">
      <div className="contact-me">
        <h2>Contact Me</h2>
        <div className="div-line"></div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form-grid" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            className="grid-name" 
            value={person.name} 
            name="name" 
            onChange={handleChange}
          />
          <input 
          type="email" 
          placeholder="Email" 
          className="grid-email" 
          value={person.email} 
          name="email" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          placeholder="Subject" 
          className="grid-subject" 
          value={person.subject} 
          name="subject" 
          onChange={handleChange}
          />
          <input 
          type="number" 
          placeholder="Phone" 
          className="grid-phone" 
          value={person.phone} 
          name="phone" 
          onChange={handleChange}
          />
          <textarea 
          type="text" 
          placeholder="Message" 
          className="grid-message" 
          value={person.message} 
          name="message" 
          onChange={handleChange}> 
          </textarea>
          <button type="submit" className="grid-submit-btn">SUBMIT</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="info-box">
          <FaPhone className="info-icon"/>
          <p>097-6254-262</p>
        </div>
        <div className="info-box">          
          <GiHouse className="info-icon"/>
          <p>Ožegovićeva 14, 10000 Zagreb</p>
        </div>
        <div className="info-box">
          <MdEmail className="info-icon"/>
          <p>mislav0508@hotmail.com</p>
        </div>
      </div>
    </div>
  )
}
