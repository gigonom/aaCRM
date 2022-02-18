import React from 'react';
import classes from "./AaButton.module.css";

const AaButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.aaButton}>
            {children}
        </button>
    );
};

export default AaButton;