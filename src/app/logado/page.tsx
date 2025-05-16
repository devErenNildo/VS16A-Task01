import React from "react";
import { useAuth } from "@/context/AuthContext";

export default function Logado() {
    const { logout } = useAuth();

    return (
        <>
            <h2>Ainda estamos trabalhando nisso, obrigado pela confiança...</h2>
            <h3>Por enquanto, faça o Logout no botão abaixo</h3>
            <button onClick={logout}>Sair</button>
        </>
    );
}
