"use client"
import React from "react";
import styles from "./input.module.scss";
import { UseFormRegister } from "react-hook-form";

interface Props {
    labelFor: string;
    labelText: string;
    inputType: string;
    id?: string;
    required: boolean
    register: UseFormRegister<any>
}

export default function InpuntText({ labelFor, labelText, inputType, id, required, register }: Props) {
    return (
        <div className={styles.container}>
            <label htmlFor={labelFor}>{labelText}</label>
            <input
                type={inputType} id={id}
                {...register(labelFor, {required})}
            />
        </div>
    );
}