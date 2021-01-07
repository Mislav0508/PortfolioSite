import React, { useState, useEffect } from 'react'
import "./pages.css"
import {LoadedImages} from "./getImages"

export const Pages = () => {
  const {loading, images} = LoadedImages()
  const [loadedImg, setLoadedImg] = useState([])
  const [page, setPage] = useState(0)
  useEffect(() => {
    if(loading) return
    setLoadedImg(images[page])
  },[loading,images,page])
  const changePage = (index) => {
    setPage(index)
  }
  const prevPage = () => {
    if(page > 0){
      setPage(page - 1)
    }  
  }
  const nextPage = () => {
    if(page < loadedImg.length - 1){
      setPage(page + 1)
    }else{
      setPage(0)
    }    
  }
  return (
    <div className="home">
      <section className="pages-section">
        <h1 className="title">{loading ? "Loading..." : "List of images from an API"}</h1>
        <div className="underline-images"></div>
        <div className="images-div">
          {loadedImg.map((image) => {
            const {id, author, download_url} = image
            return <div className="img-container" key={id}>
              <img src={download_url} alt="img"/>
              <h3>Author: {author}</h3>
            </div>
          })}
        </div>
        <div className="btn-div">
          <button className="images-btn" onClick={prevPage}>Prev</button>
          {loadedImg.map((image,index) => {
            return <button 
            className={index === page ? "images-btn active-images-btn" : "images-btn" }
            key={index} 
            onClick={()=>changePage(index)}>{index + 1}</button>
          })}
          <button className="images-btn" onClick={nextPage}>Next</button>
        </div>
        
      </section>
    </div>
  )
}
