import React from 'react';

const ClientItem = (props) => {
    return (
        <div className="client">
            <div className="client__content">
                <strong>{props.client.brandName}</strong>
                <div>
                    {props.client.fullName}
                </div>
            </div>
            <div className="client__bar">
                <div className="client__status">
                    <div className="status__indication"> </div>
                    <div className="status__name">Статус</div>
                </div>
                <div className="client__btns">
                </div>
            </div>
        </div>
    );
};

export default ClientItem;