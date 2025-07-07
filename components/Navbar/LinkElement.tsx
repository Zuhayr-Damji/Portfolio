import React from "react";
import style from "./LinkElement.module.css";

import Link from "next/link";

interface LinkProps {
    text: string;
}

export default function LinkElement({ text }: LinkProps) {
    return (
        <Link href="/about" className={style.test}>
            <div className={style.link}>
                <h6 className={style.linkText}>{text}</h6>
            </div>
        </Link>
    );
}