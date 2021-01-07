const arrayOfArrays = (images) => {
  let imagesPerPage = 9
  let pages = Math.ceil(images.length / imagesPerPage)
  const newImages = Array.from({length: pages},(v,index) => {
    const start = index * imagesPerPage
    return images.slice(start, start + imagesPerPage)
  })
  return newImages
}

export default arrayOfArrays