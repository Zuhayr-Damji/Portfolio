import React from "react";
import Link from "next/link";

import style from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={style.logoText}>
      <h6 className={style.logo}>Zuhayr Damji | Web Designer and Developer</h6>
    </Link>
  );
}