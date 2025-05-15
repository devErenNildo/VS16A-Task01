"use client"

import React from "react";
import styles from "./agendamento.module.scss";
import { useForm } from "react-hook-form";
import InpuntText from "../inputText/InputText";

export interface AgendamentoFormData {
    nome: string;
    email: string;
    telefone: string;
    dataNascimento: string;
    especialidade: string;
    medico: string;
    dataConsulta: string;
    horario: string;
    observacoes?: string;
    termos: boolean;
}



export default function Agendamento() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: AgendamentoFormData) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>Agendamento de Consulta</h2>

                <form id="form-agendamento" noValidate className={styles.form}>
                    <div className={styles.sectionGroup}>
                        <h5>Dados Pessoais</h5>
                        <div className={styles.row}>
                            <InpuntText
                                labelFor="nome"
                                labelText="Nome completo"
                                inputType="text"
                                id="nome"
                                required={true}
                                register={register}
                            />

                            <InpuntText
                                labelFor="email"
                                labelText="E-mail"
                                inputType="email"
                                id="email"
                                required={true}
                                register={register}
                            />

                            <InpuntText
                                labelFor="telefone"
                                labelText="telefone"
                                inputType="tel"
                                id="telefone"
                                required={true}
                                register={register}
                            />

                            <InpuntText
                                labelFor="data-nascimento"
                                labelText="Data de Nascimento"
                                inputType="date"
                                id="data-nascimento"
                                required={true}
                                register={register}
                            />
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
                        <button onClick={() => onSubmit}>Confirmar Agendamento</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
