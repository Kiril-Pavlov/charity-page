import React from 'react'

import LogoImg from "../assets/logo.png"

const Footer = ({footLinks}) => {
  return (
    <footer>
        <div>
            <img src={LogoImg} alt="" />
            <div>
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li><a href="">Terms of Services</a></li>
                    <li><a href="">Privacy & Management of personal data</a></li>
                    <li><a href="">Cookies policy</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h3>Home</h3>
                <div>
                    {footLinks.map(link=>(
                        <a 
                        href={link.linkTo} 
                        key={link.linkName}
                        className="font-primaryFont"
                      >
                        {link.linkName}
                      </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer