import React from "react";
import Image from "next/image";
import img from "@/../public/fundoMedico.png"

import styles from "./main.module.scss"

export default function Main() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroRow}>
                        <div className={styles.heroText}>
                            <h1>Bem-vindo à Clínica Vida Saudável</h1>
                            <p>Cuidando da sua saúde com excelência e carinho</p>
                            <a href="#agendamento" className={styles.heroButton}>Agende sua consulta</a>
                        </div>

                        <Image
                            src={img}
                            alt="Imagem Clínica"
                            width={630}
                            height={500}
                            quality={100}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}