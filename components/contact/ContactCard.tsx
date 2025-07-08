import React from "react";
import style from "./ContactCard.module.css";
import Link from "next/link";

interface ContactCardProps {
    Icon: React.ReactNode;
    Text: string;
    href?: string;
}

export default function ContactCard({ Icon, Text, href }: ContactCardProps) {
    const content = (
        <div className={style.contactCard}>
            {Icon}
            <h5 className={style.text}>{Text}</h5>
        </div>
    );

    // Wrap with Next.js <Link> for internal links
    if (href?.startsWith("/")) {
        return <Link href={href} className={style.outerFrame}>{content}</Link>;
    }

    // Wrap with <a> for external links (e.g., mailto:, tel:, or https://)
    if (href) {
        return (
            <a href={href} className={style.outerFrame} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    // No link – return plain card
    return (<div className={style.outerFrame}>
        {content}
    </div>);
}