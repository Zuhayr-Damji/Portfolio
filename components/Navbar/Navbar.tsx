import React from "react";
import style from "./Navbar.module.css";

interface NavbarProps {
    logo: React.ReactNode;
    links: React.ReactNode
    CTA: React.ReactNode;
}


export default function Navbar({logo, links, CTA}: NavbarProps) {

    return (
        <div className={style.navbar}>
            <div>
                {logo}
            </div>
            <div className={style.nonLogo}>
                {links}
                {CTA}
            </div>
        </div>
    );
}