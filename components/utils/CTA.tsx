import React from "react";
import style from "./CTA.module.css"
import Link from "next/link";

export default function CTA() {
    return (
        <Link href="/contact">
            <button className={style.cta}>Contact Me</button>
        </Link>
    );
}