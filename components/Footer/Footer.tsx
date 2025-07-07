import React from 'react';
import style from "./Footer.module.css";

export default function Footer(){
    return (
        <div className={style.Footer}>
            <h6><span>© Zuhayr Damji 2025</span></h6> 
            <h6><a href="tel:+447414050138">📧 📞07414050138</a></h6>
            <h6><a href="mailto:damjizuhayr0@gmail.com">📧 damjizuhayr0@gmail.com</a></h6>
        </div>
    );
}
