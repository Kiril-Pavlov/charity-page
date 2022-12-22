import React from "react";

import logoImg from "../assets/logo.png";
import logoFB from "../assets/fb-logo.png";
import logoIG from "../assets/ig-logo.png";
import logoTwit from "../assets/twit-logo.png";

const Footer = ({ footLinks }) => {
  return (
    <footer>
      <div className="flex flex-col items-start pt-8 px-4 md:px-0 max-w-5xl	m-auto md:flex-row">
        <div className="flex pb-8 w-1/5">
          <img src={logoImg} className="flex pb-8" alt="Logo" />
        </div>
        <div className="flex flex-col pb-8 md:w-2/5">
          <h3 className="font-bold pb-4">USEFUL LINKS</h3>
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
        <div className="flex flex-col pb-8 md:w-2/5">
          <h3 className="font-bold pb-4">Home</h3>
          <div className="flex flex-col">
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
      <div className="flex max-w-5xl	m-auto pb-4 px-4 md:px-0">Connect via:</div>
      <div className="container flex max-w-5xl	m-auto px-4 md:px-0 flex-col gap-8 md:flex-row md:justify-between">
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
