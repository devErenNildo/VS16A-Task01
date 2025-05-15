import React from "react";
import styles from "./comentarios.module.scss";
import comments from "@/dados/comentarios.json";
import Comentario from "@/component/comentario/Comentario";

export default function Comentarios() {
    return (
        <div className={styles.boxComent}>
            <h3>O que as pessoas estão comentando</h3>
            <div className={styles.containerComentario}>
                {comments.map((comment) => (
                    <Comentario
                        key={comment.id}
                        nome={comment.nome}
                        msg={comment.msg}
                        img={comment.img}
                        estrelas={comment.estrelas}
                    />
                ))}

            </div>
        </div>
    );
}