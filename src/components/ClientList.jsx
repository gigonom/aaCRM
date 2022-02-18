import React from 'react';
import ClientItem from "./ClientItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ClientList = ({clients}) => {
    if (!clients.length) {
        return (
            <h1>Клиенты не найдены</h1>
        )
    }

    return (
        <div>
            <h1>Список клиентов</h1>
            <TransitionGroup>
                {clients.map(client =>
                    <CSSTransition
                        key={client.id}
                        timeout={500}
                        classNames="animated-client"
                    >
                        <ClientItem client={client}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default ClientList;