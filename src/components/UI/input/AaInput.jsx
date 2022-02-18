import React from 'react';
import classes from "./AaInput.module.css";

const AaInput = (props) => {
    return (
        <input {...props} className={classes.aaInput}/>
    );
};

export default AaInput;