import React from "react";

import styles from "./main.module.scss"

export default function Main() {
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.heroRow}>
                    <div className={styles.heroText}>
                        <h1>Bem-vindo à Clínica Vida Saudável</h1>
                        <p>Cuidando da sua saúde com excelência e carinho</p>
                        <a href="#agendamento" className={styles.heroButton}>Agende sua consulta</a>
                    </div>
                    <div className={styles.heroImage}>
                        <img
                            src="https://medicalcarealphaville.com.br/wp-content/uploads/2024/09/2v2.png"
                            alt="Imagem Clínica"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}