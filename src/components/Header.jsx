import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="w-full h-[104px] bg-cyan-200">
        <div className="max-w-5xl h-[104px]	m-auto flex flex-row items-center justify-between">
          <div className='flex flex-row gap-5'>
            <div>LOGO</div>
            <div>My donor</div>
          </div>
          <div>
            <Navbar/>
          </div>
        </div>
    </header>
  )
}

export default Header