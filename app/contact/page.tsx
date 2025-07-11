import React from "react";
import Image from "next/image";

import style from "./contact.module.css";

import { ContactCard } from "../../components/contact";

export default function Contact() {
    return (
        <div className={style.contact}>
            <div className={style.upperFrame}>
                {/* Optimized background image */}
                <Image
                    src="/images/envelope.jpg"
                    alt="Envelope background"
                    fill
                    priority
                    className={style.backgroundImage}
                />
                <h3 className={style.heading}>Contact Me</h3>
            </div>

            <div className={style.lowerFrame}>
                <div className={style.flexContainer}>
                    <ContactCard 
                        Icon={<Image src="/images/email-icon.svg" alt="Email icon" height={100} width={100} />}
                        Text="contact@zuhayrdesign.com" 
                        href="mailto:contact@zuhayrdesign.com"
                    />
                    <ContactCard 
                        Icon={<Image src="/images/phone-icon.svg" alt="Phone icon" height={100} width={100} />}
                        Text="07414050138" 
                        href="tel:+447414050138"
                    />
                </div>
                <div className={style.textFrame}>
                    Expect a reply within 1–2 business days
                </div>
            </div>
        </div>
    );
}
