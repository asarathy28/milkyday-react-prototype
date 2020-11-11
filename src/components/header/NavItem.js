import React from "react"

const NavItem = ({item}) => {
  return(
    <li style={{listStyleType: "none", width: "auto", paddingLeft: "1em"}}>
      {item}
    </li>
  )
}

export default NavItem
