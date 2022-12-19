import React from 'react'

const Navbar = () => {
    let links = [
        {linkName:"Impact", linkTo:"#"},
        {linkName:"Discover charities", linkTo:"#"},
        {linkName:"Donor Basics", linkTo:"#"},
        {linkName:"About us", linkTo:"#"},
    ]
  return (
    <nav className='flex gap-16'>
        {links.map(item=>(
            <a 
              href={item.linkTo} 
              key={item.linkName}
              className="font-primaryFont"
            >
              {item.linkName}
            </a>
        ))}
    </nav>
  )
}

export default Navbar