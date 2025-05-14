import React from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';

export default function Navbar () {

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Sobre</Link></li>
        <li><Link href="#">Contato</Link></li>
      </ul>
    </nav>
  );
};
