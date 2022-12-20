import React from 'react'

const Navbar = ({navLinks}) => {
  return (
    <nav className='hidden md:flex gap-16'>
        {navLinks.map(item=>(
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