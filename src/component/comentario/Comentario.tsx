import React from "react";
import styles from "./comentario.module.scss";

interface ComentariosProps {
    nome: string;
    msg: string;
    img: string;
    estrelas: number;
}

export default function Comentario({ nome, msg, img, estrelas }: ComentariosProps) {
    const renderEstrelas = () => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < estrelas ? styles.starFilled : styles.starEmpty}>★</span>
        ));
    };

    return (
        <div className={styles.comment}>
            <img src={img} alt={nome} className={styles.avatar} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <h4 className={styles.name}>{nome}</h4>
                    <div className={styles.stars}>{renderEstrelas()}</div>
                </div>
                <p className={styles.message}>{msg}</p>
            </div>
        </div>
    );
}