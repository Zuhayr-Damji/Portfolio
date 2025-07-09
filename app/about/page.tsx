import React from "react";
import style from "./about.module.css";
import Image from "next/image";

export default function About() {
    return (
        <div className={style.aboutContainer}>
            <div className={style.text}>
                <div className={style.imageContainer}>
                    <h2 className={style.heading}>About Me</h2>
                </div>
                <div className={style.initialContainer}>
                    <div className={style.imageWrapper}>
                        <Image
                            src="/images/developer-workspace.jpg"
                            alt="a developer's workspace"
                            // height={500}
                            // width={750}
                            fill
                            priority={true}
                            className={style.workspaceImage}
                            />
                    </div>
                    <div className={style.rightContainer}>
                        <h6>
                            I am a freelance web designer who's just starting out
                            professionally. I was born in Birmingham, England in 2007. My goal
                            is to help small businesses make a stronger impression online
                            through thoughtful, user-focused design. I’m passionate about
                            building websites that not only look great but also clearly
                            communicate what a business stands for and drive real results. I’m
                            constantly learning, experimenting, and refining my skills to stay
                            on top of modern design practices — and I enjoy turning ideas into
                            clean, functional websites that feel intuitive to use.
                        </h6>
                    </div>
                </div>
                <h3 className={style.subheading}>Skills and Tools</h3>
                <div className={style.bottomContainer}>
                    <div className={style.helpingContainer}>
                        <h3>What I Can Help With</h3>
                        <ul className={style.list}>
                            <li>✅ Custom Website Design</li>
                            <li>📱 Responsive Layouts (Mobile + Desktop)</li>
                            <li>⚡ SEO Basics & Performance Optimisation</li>
                        </ul>
                    </div>
                    <div className={style.toolsFrame}>
                        <h3>The tools that I use</h3>
                        <div className={style.tools}>
                            <Image
                                src="/images/figma-original.svg"
                                alt="Figma - design software - icon"
                                width={100}
                                height={100}
                            />
                            <Image
                                src="/images/typescript-original.svg"
                                alt="Typescript - programming language - icon"
                                width={100}
                                height={100}
                            />
                            <Image
                                src="/images/nextjs-original.svg"
                                alt="Nextjs - web development framework - icon"
                                width={100}
                                height={100}
                            />
                            <Image
                                src="/images/vercel-original-wordmark.svg"
                                alt="Vercel - website hosting - icon"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
