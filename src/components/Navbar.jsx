import React from 'react'

const Navbar = () => {
    let links = [
        {linkName:"Impact", linkTo:"#"},
        {linkName:"Discover charities", linkTo:"#"},
        {linkName:"Donor Basics", linkTo:"#"},
        {linkName:"About us", linkTo:"#"},
    ]
  return (
    <nav>
        {links.map(item=>(
            <a 
              href={item.linkTo} 
              key={item.linkName}
              className=""
            >
              {item.linkName}
            </a>
        ))}
    </nav>
  )
}

export default Navbar