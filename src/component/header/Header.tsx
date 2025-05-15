
import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";

import logo from "../../../public/logo.png";
import NavBar from "../navbar/NavBar";

export default function Header() {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div>
                        <Image
                            src={logo}
                            alt="Logo DC - CLinica"
                            width={200}
                        />
                    </div>

                    <NavBar />
                </div>
            </header>
        </>
    );
}