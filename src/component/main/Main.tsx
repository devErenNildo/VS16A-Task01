import React from "react";
import Image from "next/image";
import img from "@/../public/fundoMedico.png"

import styles from "./main.module.scss"
import BtnLink from "../btn_link/BtnLink";

export default function Main() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroRow}>
                        <div className={styles.heroText}>
                            <h1>Bem-vindo à Clínica Vida Saudável</h1>
                            <p>Cuidando da sua saúde com excelência e carinho</p>
                            <BtnLink
                                href="#"
                                placeholder="Cadastre-se como medico"
                                cor="#fff"
                                
                            />
                        </div>

                        <Image
                            src={img}
                            alt="Imagem Clínica"
                            className={styles.img}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}