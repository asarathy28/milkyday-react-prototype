import React from "react"
import Nav from "./Nav"

const listToPass = [{text: "Home", href: "whocares"},{text: "Portfolio", href: "whocares"},{text: "Music", href: "whocares"}]

const Header = () => {
  return(
    <div style={{position: "relative", height: "400px", width: "100%", backgroundColor: "pink"}}>
      <Nav navlist = {listToPass}/>

      <div style={{position: "absolute", left: "70px", bottom: "50px"}}>
        <h1 style={{color: "white", fontSize: "40px"}}>Milky Day</h1>
      </div>
    </div>
  )
}

export default Header
