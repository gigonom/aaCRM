import React from 'react';
import cl from './AaLoader.module.css';

const AaLoader = () => {
    return (
        <div className={cl.loader__wrapper}>
            <div className={cl.loader__content}>
            </div>
        </div>
    );
};

export default AaLoader;