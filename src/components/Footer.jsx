import React from 'react'

import LogoImg from "../assets/logo.png"

const Footer = ({footLinks}) => {
  return (
    <footer>
        <div className='flex flex-col gap-4 items-start px-4 pt-8 md:flex-row'>
            <img src={LogoImg} className="flex  pb-8" alt="Logo" />
            <div>
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li><a href="#">Terms of Services</a></li>
                    <li><a href="#">Privacy & Management of personal data</a></li>
                    <li><a href="#">Cookies policy</a></li>
                    <li><a href="#">FAQ</a></li>
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
        <div>Connect via:</div>
        <div>
          <div>Socials</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aut fugiat dicta eum, aliquid adipisci fugit,
             sapiente laudantium voluptate quo rerum nemo voluptates
             explicabo sunt magnam dolores sequi architecto 
            debitis aliquam ullam, ad alias sint maiores
             voluptatum numquam? Saepe, temporibus deleniti!</div>
        </div>
    </footer>
  )
}

export default Footer