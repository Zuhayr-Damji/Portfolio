'use client'

import React, { useState } from "react";
import style from "./Navbar.module.css";
import Link from "./LinkElement";
import CTA from "../utils/CTA";
import Logo from "./Logo";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className={`${style.navbar} ${menuOpen ? style.open : ""}`}>
            <button className={style.menuButton} onClick={toggleMenu}>
                <Image
                    src={menuOpen ? "/images/cross-icon.svg" : "/images/burger-icon.svg"}
                    alt="Menu Toggle Icon"
                    width={32}
                    height={32}
                />
            </button>
            <div className={`${style.navContent} ${menuOpen ? style.open : ""}`}>
                <Logo />
                <div className={style.navLinks}>
                    <Link text="About Me" />
                    <CTA />
                </div>
            </div>
        </div>
    );
}
