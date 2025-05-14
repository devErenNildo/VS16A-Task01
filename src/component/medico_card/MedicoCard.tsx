import React from 'react';
import styles from './medico_card.module.scss';

interface Medico {
    id: number;
    nome: string;
    especialidade: string;
    img: string;
    horarios: string[];
    descricao: string[];
}

const MedicoCard = ({ medico }: { medico:Medico}) => {

    return (
        <section className={styles.grid}>
            <div key={medico.id} className={styles.card}>
                <img src={medico.img} alt={medico.nome} className={styles.image} />
                <div className={styles.body}>
                    <h5 className={styles.nome}>{medico.nome}</h5>
                    <p className={styles.especialidade}>{medico.especialidade}</p>
                    <a href={`/medico/${medico.id}`} className={styles.botao}>
                        Saiba mais
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MedicoCard;
