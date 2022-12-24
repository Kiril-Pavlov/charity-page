import React, { useState } from 'react'
import Navbar from './Navbar'

import Logo from "../assets/logo.png"

import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"

const Header = ({navLinks}) => {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <header className="w-full h-24 bg-primaryColor px-4">
        <div className="max-w-5xl h-24	m-auto flex flex-row items-center justify-between">
          <div className='flex flex-row gap-5 items-center'>
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <div className='font-primaryFont font-bold text-3xl hidden md:flex'>My donor</div>
          </div>
          <div>
            <Navbar navLinks={navLinks}/>
          </div>
          <div className='flex md:hidden'>
            {isOpen === false ? (
              <GiHamburgerMenu size={25}  onClick={()=>setIsOpen(!isOpen)}/>
            ):(
              <GrClose size={25}  onClick={()=>setIsOpen(!isOpen)}/>
            )
            }
          </div>
        </div>
    </header>
  )
}

export default Header