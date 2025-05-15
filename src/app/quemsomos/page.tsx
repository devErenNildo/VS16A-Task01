import React from "react";
import Image from "next/image";
import styles from "./quem_somos.module.scss";
import medicos from "@/dados/medicos.json";
import comments from "@/dados/comentarios.json";

import imgMedicos from "@/../public/medico3.png";
import MedicoCard from "@/component/medico_card/MedicoCard";
import Comentario from "@/component/comentario/Comentario";
import Link from "next/link";


export default function QuemSomos() {

    const primeirosComentarios = comments.slice(0, 6);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.texto}>
                        <h2>Quem somos</h2>
                        <h5>
                            Somos uma clínica especializada em consultas gerais, ortopedia e infectologia
                        </h5>
                        <p>
                            A Clínica de Medicina DB-Clinica foi fundada no ano 2024, pelos seus sócios Dr. Erenildo
                            Gomes e Dr. Pedro Ap.Possari. Com o propósito de oferecer sempre o melhor atendimento aos seus pacientes.
                        </p>
                        <p>
                            Hoje, contamos com mais de 20 médicos no corpo clínico, oferecemos uma gama completa de
                            exames de diagnóstico por imagem e somos reconhecidos como uma das melhores clínicas da região.
                        </p>
                        <a href="#" className={styles.button}>Saiba mais</a>
                    </div>

                    {/* Imagem */}
                    <div className={styles.imagem}>
                        <Image src={imgMedicos} alt="Profissional da saúde com paciente" />
                    </div>
                </div>
            </div>


            <h3 className={styles.textMedicos}>Nossos especialistas</h3>
            <div className={styles.cardsContainer}>
                {medicos.map((medico) => (
                    <MedicoCard key={medico.id} medico={medico} />
                ))}
            </div>

            <div className={styles.boxComent}>
                <h3>O que as pessoas estão comentando</h3>
                <div className={styles.containerComentario}>
                    {primeirosComentarios.map((comment) => (
                        <Comentario
                            key={comment.id}
                            nome={comment.nome}
                            msg={comment.msg}
                            img={comment.img}
                            estrelas={comment.estrelas}
                        />
                    ))}

                </div>
                <div className={styles.buttonMais}>
                    <Link href="/comentarios">Ver mais comentarios</Link>
                </div>
            </div>
        </>
    );
}