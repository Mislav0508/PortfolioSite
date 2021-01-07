import { useState, useEffect } from 'react'
import arrayOfArrays from "./arrayOfArrays"

export const LoadedImages = () => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([])
  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
    const data = await response.json()
    setImages(arrayOfArrays(data))
    setLoading(false)
  } 
  useEffect(() => {
    getImages()
  },[])
  return {loading, images}
}
