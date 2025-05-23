"use client"
import React from "react";
import { useAuth } from "@/context/AuthContext";
import data from "@/dados/photos.json";
import { ImageItem } from "../hooks/usePhoto";
import Photos from "@/component/photos/Photo";
import WindowInfo from "@/component/windowInfo/WindowInfo";

export default function Logado() {
    const { logout } = useAuth();
    const images: ImageItem[] = data;

    return (
        <>
            <h2>Ainda estamos trabalhando nisso, obrigado pela confiança...</h2>
            <h3>Por enquanto, faça o Logout no botão abaixo</h3>
            <button onClick={logout}>Sair</button>
            <h3>enquanto isso aproveite algumas fotos ou teste nossa funcionalidade de respondividade</h3>
            <WindowInfo />
            <Photos data={images}/>
        </>
    );
}
