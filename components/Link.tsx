import React from "react";


interface LinkProps{
    text: string;
}

export default function Link({text}:LinkProps){
    return(
        <div>
            <h3 className="bruh">{text}</h3>
        </div>
    );
}