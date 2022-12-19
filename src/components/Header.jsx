import React from 'react'
import Navbar from './Navbar'

import Logo from "../assets/logo.png"

const Header = ({navLinks}) => {
  return (
    <header className="w-full h-[104px] bg-primaryColor">
        <div className="max-w-5xl h-[104px]	m-auto flex flex-row items-center justify-between">
          <div className='flex flex-row gap-5 items-center'>
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <div className='font-primaryFont font-bold text-3xl'>My donor</div>
          </div>
          <div>
            <Navbar navLinks={navLinks}/>
          </div>
        </div>
    </header>
  )
}

export default Header