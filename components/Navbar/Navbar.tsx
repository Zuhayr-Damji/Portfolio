import React from "react";
import style from "./Navbar.module.css";
import Link from "./LinkElement";

import CTA from "../utils/CTA";
import Logo from "./Logo";


export default function Navbar() {

    return (
        <div className={style.navbar}>
            <div>
                <Logo/>
            </div>
            <div className={style.nonLogo}>
                <Link text="About Me" />
                <CTA />
            </div>
        </div>
    );
}