import React from "react";
import Image from "next/image";
import imgCelular from "@/../public/img1.png";
import styles from "./banner_agendamento.module.scss";

export default function BannerAgendamento() {
    return (
        <>
            <div className={styles.agendamentoContainer}>
                <div className={styles.agendamentoRow}>
                    {/* Imagem */}
                    <div className={styles.agendamentoImg}>
                        <Image src={imgCelular} alt="banner celular"></Image>
                    </div>

                    {/* Texto */}
                    <div className={styles.agendamentoText}>
                        <h2>Agendamento online</h2>
                        <p>
                            Agende seus exames de forma rápida, segura e sem complicações.
                            Nossa plataforma de agendamento online permite que você escolha o melhor dia
                            e horário para realizar seus exames de radiologia, tudo no conforto da sua casa.
                        </p>
                        <a href="#agendamento" className={styles.agendamentoButton}>
                            Agendamento online
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}