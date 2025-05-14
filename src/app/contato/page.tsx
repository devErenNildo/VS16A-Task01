import React from "react";
import styles from "./contato.module.scss";

export default function Contato() {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>Agendamento de Consulta</h2>

                <form id="form-agendamento" noValidate className={styles.form}>
                    <div className={styles.sectionGroup}>
                        <h5>Dados Pessoais</h5>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="nome">Nome Completo*</label>
                                <input type="text" id="nome" required />
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="email">E-mail*</label>
                                <input type="email" id="email" required />
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="telefone">Telefone*</label>
                                <input type="tel" id="telefone" required />
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="data-nascimento">Data de Nascimento*</label>
                                <input type="date" id="data-nascimento" required />
                            </div>
                        </div>
                    </div>

                    <div className={styles.sectionGroup}>
                        <h5>Detalhes da Consulta</h5>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="especialidade">Especialidade*</label>
                                <select id="especialidade" required>
                                    <option value="">Selecione uma especialidade</option>
                                    <option value="clinico">Clínico Geral</option>
                                    <option value="pediatria">Pediatria</option>
                                    <option value="cardiologia">Cardiologia</option>
                                </select>
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="medico">Médico*</label>
                                <select id="medico" required disabled>
                                    <option value="">Primeiro selecione uma especialidade</option>
                                </select>
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="data-consulta">Data da Consulta*</label>
                                <input type="date" id="data-consulta" required />
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="horario">Horário*</label>
                                <select id="horario" required disabled>
                                    <option value="">Primeiro selecione um médico</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sectionGroup}>
                        <h5>Informações Adicionais</h5>
                        <label htmlFor="observacoes">Observações</label>
                        <textarea id="observacoes" rows={3} placeholder="Informe qualquer detalhe adicional sobre sua saúde ou preferências..." />
                    </div>

                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" id="termos" required />
                        <label htmlFor="termos">Li e aceito os termos de agendamento*</label>
                    </div>

                    <div className={styles.botaoArea}>
                        <button type="submit">Confirmar Agendamento</button>
                    </div>
                </form>
            </div>
        </div>
    )
}