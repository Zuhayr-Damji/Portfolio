import React from 'react';
import style from "./Footer.module.css";

export default function Footer(){
    return (
        <div className={style.Footer}>
            <h6><span>© Zuhayr Damji 2025</span></h6>
            <h6>📍 Hall Green, Birmingham</h6>
            <h6><a href="tel:+447414050138"> 📞07414050138</a></h6>
            <h6><a href="mailto:contact@zuhayrdesign.com">📧 contact@zuhayrdesign.com</a></h6>
        </div>
    );
}
