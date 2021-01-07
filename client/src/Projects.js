import React, {useState, useEffect} from 'react'
import {projects} from "./data"
import {Project} from "./Project"

export const Projects = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(projects)
  },[])
  return (
    <>        
      <div className="projects">
        {data.map((project, index) => {
          return (
            <>
              <div className="project">
                <Project key={project.id} {...project}/>
              </div>
            </>
          )          
        })}
      </div>
    </>
  )
}
