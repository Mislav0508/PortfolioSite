import React,{useState} from 'react'
import {Link} from "react-router-dom"

export const Project = ({url,img,title,description}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <>  
      <Link to={url}>
        <img src={img} alt={title}/>
      </Link>        
      <h3 className="project-title">{title}</h3>
      <p className="project-description">
        {readMore ? description : `${description.substring(0,150)}`}
        {description.length > 150 && <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>}
      </p>
    </>
  )
}
