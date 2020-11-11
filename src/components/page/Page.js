import React from "react"
import Bio from "./Bio"
import NewSingle from "./NewSingle"
import Gallery from "./Gallery"

const Page = () => {
  return(
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%"}}>
      <Bio/>
      <NewSingle/>
      <Gallery/>
    </div>
  )
}

export default Page
