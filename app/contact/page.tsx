import React from "react";

import style from "./contact.module.css";
import { InputField } from "../../components/contact";

export default function Contact() {
    return (
        <div>
            <div className={style.contact}>
                <div className={style.headers}>
                    <h3>Some basic information</h3>
                    <h5>Give us your data</h5>
                </div>
                <div>
                    <InputField Question="Question" InputText="This will send a request"/>
                </div>
            </div>
        </div>
    );
}
