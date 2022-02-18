import React from 'react';
import cl from "./AaModal.module.css";

const AaModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.aaModal]
    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.aaModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default AaModal;