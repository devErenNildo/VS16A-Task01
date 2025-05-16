import React from "react";
import { useAuth } from "@/context/AuthContext";


const { logout } = useAuth();
export default function Logado() {
    return (
        <>
            <h2>Ainda estamos trabalhando nisso, obrigado pela confiança...</h2>
            <h3>Por enquanto, faça o Logout no botão abaixo</h3>
            <button onClick={() => logout()} style={{}}> Sair</button>
        </>
    );
}