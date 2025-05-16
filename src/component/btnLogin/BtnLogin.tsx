"use client";

import React, { useState } from "react";
import styles from "./btnLogin.module.scss";
import { FaGoogle, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/context/AuthContext";

export default function BtnLogin() {
  const [open, setOpen] = useState(false);
  const { login } = useAuth();

  const handleGoogleLogin = () => {
    login();
  };

  const handleFacebookLogin = () => {
    alert("Ainda estamos trabalhando nisso..")
  };

  const handleTwitterLogin = () => {
    alert("Ainda estamos trabalhando nisso..")
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={() => setOpen(!open)}>
        Entrar com...
      </button>
      {open && (
        <div className={styles.dropdownMenu}>
          <button onClick={handleGoogleLogin}>
            <FcGoogle /> Google
          </button>
          <button onClick={handleFacebookLogin}>
            <FaFacebookF /> Facebook
          </button>
          <button onClick={handleTwitterLogin}>
            <FaXTwitter /> X
          </button>
        </div>
      )}
    </div>
  );
}
