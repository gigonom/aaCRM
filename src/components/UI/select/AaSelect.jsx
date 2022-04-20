import React from 'react';
import cl from "./AaSelect.module.css";

const AaSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={cl.aaSelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {defaultValue !== undefined && <option value="">{defaultValue}</option>}
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default AaSelect;