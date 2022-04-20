import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import ClientService from "../API/ClientService";
import AaLoader from "../components/UI/loader/AaLoader";
import ClientData from "../components/ClientData";

const Client = () => {
    const {clientId} = useParams();
    const [client, setClient] = useState();
    const [fetchClient, isClientsLoading, clientError] = useFetching(async () => {
        const response = await ClientService.getClient(clientId);
        setClient(response.data)
    })
    useEffect(() => {
        fetchClient()
    }, [])

    const editClientStatus = async (status) => {
        await ClientService.edit(status, client.id)
        fetchClient()
    }

    return (
        <div>
            {clientError &&
                <h1>Произошла ошибка ${clientError}</h1>
            }
            {isClientsLoading || client === undefined
            ? <AaLoader/>
            : <ClientData client={client} editClientStatus={editClientStatus}/>
            }
        </div>
    );
};

export default Client;