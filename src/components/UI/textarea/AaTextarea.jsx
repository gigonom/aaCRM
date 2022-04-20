import React from 'react';
import cl from "./AaTextarea.module.css";

const AaTextarea = (props) => {
    return (
        <textarea {...props} className={cl.aaTextarea}/>
    );
};

export default AaTextarea;