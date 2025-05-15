"use client"

import React, { useState } from 'react';
import { IoMenuSharp, IoClose } from "react-icons/io5";
import styles from './navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {

  const [ativo, setAtivo] = useState(false);
  const alterarEstado = (): void => {
    setAtivo(!ativo);
  }

  return (
    <>
      <nav
        className={`${styles.navbar} ${ativo ? styles.menuAtivo : ""}`}
        onClick={alterarEstado}
      >
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/quemsomos">Quem Somos</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>

      {
        ativo
          ? <IoClose className={styles.icon} onClick={alterarEstado} />
          : <IoMenuSharp className={styles.icon} onClick={alterarEstado} />
      }

    </>
  );
};
