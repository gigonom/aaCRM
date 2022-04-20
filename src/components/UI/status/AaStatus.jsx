import React from 'react';
import cl from "./AaStatus.module.css";
import {statusColors} from "../../../utils/Status";

const AaStatus = ({client}) => {
    const rootClasses = [cl.aaStatus, statusColors[client.status].color]
    const rootIndicationClasses = [cl.aaStatus__indication, statusColors[client.status].color]
    const statusName = [statusColors[client.status].name]


    return (
        <div className={rootClasses.join(' ')}>
            <div className={rootIndicationClasses.join(' ')}> </div>
            <div className={cl.aaStatusName}>{statusName}</div>
        </div>
    );
};

export default AaStatus;