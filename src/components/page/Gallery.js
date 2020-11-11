import React from "react"
import './Gallery.css'
import bw from "./img-gallery/bw-producing-two.JPG"
import noMilky from "./img-gallery/no-milky.JPG"
import pantry from "./img-gallery/pantry.JPG"

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="one-and-two">
        <div className="one">
          <img className="gallery-pic" src={pantry}/>
        </div>
        <div className="two">
          <img className="gallery-pic" src={bw}/>
        </div>
      </div>
      <div className="three">
        <img className="gallery-pic" src={noMilky}/>
      </div>
    </div>
  )
}

export default Gallery
