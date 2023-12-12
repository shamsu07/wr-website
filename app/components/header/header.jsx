import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import headerLogo from '../../../public/images/header/header-logo.svg'

import styles from './header.module.css';

const Header = () => {
    return(
        <>
    <header className={`${styles.header} d-flex align-items-center`}>
    <div className="container d-flex justify-content-between">
      <div className={styles.logo}>
        <Link href="/">
          <Image src={headerLogo} alt="Wealth Right company logo." className="img-fluid" />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.unorderedList}>
          <li className={styles.list}>
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className={styles.list}>
            <Link href="/partner">
              <span>PARTNER WITH US</span>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/products">OUR PRODUCTS</Link>
          </li>
          <li className={styles.list}>
            <Link href="/contact">
              <span>CONTACT US</span>
            </Link>{" "}
          </li>
        </ul>
        <i className={`${styles.mobileNavToggle}"bi bi-list `} />
      </nav>
    </div>
  </header>
  </>
    );
};

export default Header;