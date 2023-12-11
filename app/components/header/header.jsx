import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import headerLogo from '../../../public/images/header/header-logo.svg'

const Header = () => {
    return(
        <>
    <header id="header" className="d-flex align-items-center">
    <div className="container d-flex justify-content-between">
      <div className="logo">
        <Link href="/">
          <Image src={headerLogo} alt="Wealth Right company logo." className="img-fluid" />
        </Link>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link href="/about">ABOUT US</Link>
          </li>
          <li>
            <Link href="/partner">
              <span>PARTNER WITH US</span>
            </Link>
          </li>
          <li>
            <Link href="/products">OUR PRODUCTS</Link>
          </li>
          <li>
            <Link href="/contact">
              <span>CONTACT US</span>
            </Link>{" "}
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  </>
    );
};

export default Header;