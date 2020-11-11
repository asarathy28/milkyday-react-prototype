import React from "react"
import NavItem from "./NavItem"

const Nav = ({navlist}) => {
  return(

    <nav>
      <ul style={{display: "flex", justifyContent: "flex-start"}}>
        {navlist.map((itemyoupass) => {
          return (
            <NavItem item ={itemyoupass.text}/>
          )
        })}
      </ul>
    </nav>

  )
}

export default Nav
