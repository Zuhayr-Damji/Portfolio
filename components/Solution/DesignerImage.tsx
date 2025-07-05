import React from "react";
import Image from "next/image";

import style from "./DesignerImage.module.css";

export default function DesignerImage() {
    return (
        <Image
            src="/images/Designer-circle.png"
            width={450}
            height={450}
            alt="Web Designer working on a laptop"
            className={style.designerImage}
            />);
}
