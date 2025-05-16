import React from "react";
import Image from "next/image";
import img from "@/../public/fundo-medico.png"

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

                            <div className={styles.containerBtn}>
                                <BtnLink
                                    href="#"
                                    placeholder="Cadastre-se como medico"
                                    cor="#fff"

                                />

                                <BtnLink
                                    href="#"
                                    placeholder="Cadastre-se como paciente"
                                    cor="#fff"

                                />

                            </div>
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