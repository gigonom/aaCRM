import React from 'react';
import {Link} from "react-router-dom";
import AaStatus from "./UI/status/AaStatus";

const ClientItem = (props) => {
    return (
        <Link to={"/clients/" + props.client.id}>
            <div className="client">
                <div className="client__content">
                    <strong>{props.client.id}. {props.client.brandName}</strong>
                    <div>
                        {props.client.fullName}
                    </div>
                </div>
                <div className="client__status-bar">
                    <AaStatus client={props.client}/>
                    <div className="client__btns">
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ClientItem;