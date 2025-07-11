import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.imageContainer}>
                {/* Default image (always shown) */}
                <Image
                    src="/images/Birmingham_Skyline_from_Digbeth_tinted.jpg"
                    alt="Skyline of Birmingham, UK"
                    fill
                    priority
                    className={styles.defaultBackgroundImage}
                    sizes="100vw"
                />

                {/* 4K image (only visible on large screens via CSS) */}
                <Image
                    src="/images/Birmingham_Skyline_from_Digbeth_tinted4k.jpg"
                    alt="Skyline of Birmingham, UK in 4K"
                    fill
                    className={styles.fourKBackgroundImage}
                    sizes="100vw"
                    placeholder="empty"
                />

                <h2 className={styles.heading}>About Me</h2>
            </div>

            <div className={styles.initialContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/developer-workspace.jpg"
                        alt="A developer's workspace"
                        fill
                        priority
                        className={styles.workspaceImage}
                        sizes="(min-width: 768px) 750px, 100vw"
                    />
                </div>
                <div className={styles.rightContainer}>
                    <h6>
                        I am a freelance web designer who's just starting out
                        professionally. I was born in Birmingham, England in 2007 and now live in Hall Green.
                        My goal is to help small businesses make a stronger impression online
                        through thoughtful, user-focused design. I’m passionate about
                        building websites that not only look great but also clearly
                        communicate what a business stands for and drive real results. I’m
                        constantly learning, experimenting, and refining my skills to stay
                        on top of modern design practices — and I enjoy turning ideas into
                        clean, functional websites that feel intuitive to use.
                    </h6>
                </div>
            </div>

            <h3 className={styles.subheading}>Skills and Tools</h3>
            <div className={styles.bottomContainer}>
                <div className={styles.helpingContainer}>
                    <h3>What I Can Help With</h3>
                    <ul className={styles.list}>
                        <li>✅ Custom Website Design</li>
                        <li>📱 Responsive Layouts (Mobile + Desktop)</li>
                        <li>⚡ SEO Basics & Performance Optimisation</li>
                    </ul>
                </div>
                <div className={styles.toolsFrame}>
                    <h3>The tools that I use</h3>
                    <div className={styles.tools}>
                        <Image src="/images/figma-original.svg" alt="Figma icon" width={100} height={100} />
                        <Image src="/images/typescript-original.svg" alt="TypeScript icon" width={100} height={100} />
                        <Image src="/images/nextjs-original.svg" alt="Next.js icon" width={100} height={100} />
                        <Image src="/images/vercel-original-wordmark.svg" alt="Vercel icon" width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    );
}
