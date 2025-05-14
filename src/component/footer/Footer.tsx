import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>&copy; 2025 DB - Clinica – Todos os direitos reservados</p>
                </div>
            </footer>
        </>

    );
}