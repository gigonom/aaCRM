import React, {useState} from 'react';
import CommentList from "./CommentList";
import ContactList from "./ContactList";
import AaStatus from "./UI/status/AaStatus";
import AaModal from "./UI/modal/AaModal";
import StatusForm from "./StatusForm";
import AaButton from "./UI/button/AaButton";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {CSSTransition} from "react-transition-group";

const ClientData = ({client, editClientStatus}) => {
    const data = [
        {name: 'ID', property: 'id'},
        {name: 'Наименование организации', property: 'fullName'},
        {name: 'Краткое наименование организации', property: 'shortName'},
        {name: 'Номер в реестре туроператоров', property: 'regNumber'},
        {name: 'Регион', property: 'region'},
        {name: 'Юридический адрес', property: 'busAddress'},
        {name: 'Почтовый адрес', property: 'postAddress'},
        {name: 'Адрес сайта', property: 'site'},
        {name: 'ИНН', property: 'inn'},
        {name: 'ОГРН', property: 'ogrn'},
        {name: 'КПП', property: 'kpp'},
        {name: 'БИК', property: 'bic'},
        {name: 'Наименование банка', property: 'bankName'},
        {name: 'Корр. счёт', property: 'corrAcc'},
        {name: 'Рассчётный счёт', property: 'acc'},
    ]

    const [modal, setModal] = useState(false);

    const editStatus = (status) => {
        editClientStatus(status);
        setModal(false)
    }

    const [showButton, setShowButton] = useState(false);

    return (
        <div className="client__data">
            <div className="client__data-block">
                <h1>{client.brandName}</h1>
                <div className="client__data-row" onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>
                    <div>Статус:</div>
                    <div className="client__data-status-bar">
                        <AaStatus client={client}/>
                        <CSSTransition
                            in={showButton}
                            timeout={0}
                            unmountOnExit
                            classNames="animated-button"
                        >
                            <div className="client__data-status">
                                <AaButton onClick={() => setModal(true)}><i className="bi bi-pen"></i></AaButton>
                            </div>
                        </CSSTransition>

                    </div>
                    <AaModal visible={modal} setVisible={setModal}>
                        <StatusForm editClient={editStatus} currentStatus={client.status}/>
                    </AaModal>
                </div>
                {data.map((line, i) =>
                    <div className="client__data-row" key={i}>
                        <div>{line.name}:
                        </div>
                        <div>
                            <strong>{client[line.property]}</strong>
                        </div>
                    </div>
                )}
            </div>
            <div className="client__bar">
                <ContactList clientId={client.id}/>
                <CommentList clientId={client.id}/>
            </div>
        </div>
    );
};

export default ClientData;