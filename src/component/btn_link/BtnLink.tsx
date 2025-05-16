import React from "react";
import Link from "next/link";
import styles from "./btnLink.module.scss";

interface PropsLink {
    href: string;
    placeholder: string;
    cor?: string;
    corTexto?: string;
}

export default function BtnLink({ href, placeholder, cor,  corTexto }: PropsLink) {
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: cor || '#0047ff' }}
        >
            <Link href={href} style={{color: corTexto}}>
                {placeholder}
            </Link>
        </div>
    );
}