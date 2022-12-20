import React from 'react'
import Navbar from './Navbar'

import Logo from "../assets/logo.png"

import {GiHamburgerMenu} from "react-icons/gi"

const Header = ({navLinks}) => {
  return (
    <header className="w-full h-[104px] bg-primaryColor px-4">
        <div className="max-w-5xl h-[104px]	m-auto flex flex-row items-center justify-between">
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
            <GiHamburgerMenu size={25}/>
          </div>
        </div>
    </header>
  )
}

export default Header