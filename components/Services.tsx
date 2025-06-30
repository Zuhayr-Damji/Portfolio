import React from "react";
import IconWithText from "./IconWithText";
import Logo from "./Logo";

import style from "./Services.module.css";

export default function Services() {
    return (
        <div className={style.Services}>
            <div className={style.headers}>
                <h3>Our Services</h3>
                <h6>Choose from our range of solutions</h6>
            </div>
            <div className={style.IconsDiv}>
                <IconWithText 
                    Icon=<Logo/>
                    subText={"SEO Optimisation"}
                    Text={"Enhance your search visibility"}
                    />
                <IconWithText 
                    Icon=<Logo/>
                    subText={"Content Creation"}
                    Text={"Engaging and relevant content"}
                    />
                <IconWithText 
                    Icon=<Logo/>
                    subText={`Site Audits (Most Popular)`}
                    Text={"Identify and fix website issues"}
                    />

            </div>
        </div>
    );
}