import React from "react";
import Link from "next/link";
import Image from "next/image";


import style from "./Logo.module.css";

export default function Logo() {
  return (
    // <Link href="/" className={style.logoText}>
    //   <h6 className={style.logo}>Zuhayr Damji | Web Designer and Developer</h6>
    // </Link>

        <Link href="/" className={style.logoText}>
          <Image src="/images/Logo.png" width={75} height={75} alt="Logo graphic"/>
    </Link>
  );
}