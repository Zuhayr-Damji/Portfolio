'use client'

import React from "react";
import style from "./CTA.module.css"
import Link from "next/link";

export default function CTA() {
    return (
        <Link href="/contact" className={style.test}>
            <button className={style.cta}>Contact Me</button>
        </Link>
    );
}