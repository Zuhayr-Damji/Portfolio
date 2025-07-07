'use client'

import React from "react";
import style from "./InputField.module.css";

interface InputFieldProps{
    Question: string;
    InputText: string;
}

export default function InputField({Question, InputText}:InputFieldProps){
    return (
        <div className={style.inputField}>
            <h6>{Question}</h6>
        </div>
    );
}

// TODO: just add your email temporarily