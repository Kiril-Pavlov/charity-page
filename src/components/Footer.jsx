import React from "react";

import logoImg from "../assets/logo.png";
import logoFB from "../assets/fb-logo.png";
import logoIG from "../assets/ig-logo.png";
import logoTwit from "../assets/twit-logo.png";

const Footer = ({ footLinks }) => {
  return (
    <footer>
      <div className="flex flex-col gap-4 items-start px-4 pt-8 max-w-5xl	m-auto md:flex-row">
        <img src={logoImg} className="flex  pb-8" alt="Logo" />
        <div>
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Privacy & Management of personal data</a>
            </li>
            <li>
              <a href="#">Cookies policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Home</h3>
          <div>
            {footLinks.map((link) => (
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
      <div className="flex px-4 max-w-5xl	m-auto">Connect via:</div>
      <div className="container flex max-w-5xl	m-auto flex-col px-4 gap-8 md:flex-row md:justify-between">
        <div className="container flex flex-row gap-5 w-1/5 justify-between basic-auto">
          <img src={logoFB} alt="Facebook Logo" className="flex h-8 w-8" />
          <img src={logoIG} alt="Instagram Logo" className="flex h-8 w-8" />
          <img src={logoTwit} alt="Twitter Logo" className="flex h-8 w-8" />
        </div>
        <div className="container flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat
          dicta eum, aliquid adipisci fugit, sapiente laudantium voluptate quo
          rerum nemo voluptates explicabo sunt magnam dolores sequi architecto
          debitis aliquam ullam, ad alias sint maiores voluptatum numquam?
          Saepe, temporibus deleniti!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
