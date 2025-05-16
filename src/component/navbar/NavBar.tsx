"use client"

import React, { useState } from 'react';
import { IoMenuSharp, IoClose } from "react-icons/io5";
import styles from './navbar.module.scss';
import Link from 'next/link';
import BtnLogin from '../btnLogin/BtnLogin';

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
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/quemsomos">Quem Somos</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/blog">Blog</Link>
          <div onClick={(e) => e.stopPropagation()}>
            <BtnLogin />
          </div>
        </div>
      </nav>


      {
        ativo
          ? <IoClose className={styles.icon} onClick={alterarEstado} />
          : <IoMenuSharp className={styles.icon} onClick={alterarEstado} />
      }

    </>
  );
};
