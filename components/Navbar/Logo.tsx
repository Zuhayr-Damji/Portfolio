import React from "react";
import Link from "next/link";

import style from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" legacyBehavior>
      <a className={style.logoText}>
        <h6>Zuhayr Damji | Web Designer and Developer</h6>
      </a>
    </Link>
  );
}
