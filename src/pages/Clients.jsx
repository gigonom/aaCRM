import {useEffect, useState} from "react";
import ClientList from "../components/ClientList";
import ClientForm from "../components/ClientForm";
import ClientFilter from "../components/ClientFilter";
import AaModal from "../components/UI/modal/AaModal";
import AaButton from "../components/UI/button/AaButton";
import {useClients} from "../hooks/useClients";
import ClientService from "../API/ClientService";
import AaLoader from "../components/UI/loader/AaLoader";
import {useFetching} from "../hooks/useFetching";

function Clients() {
    const [clients, setClients] = useState([])
    const [filter, setFilter] = useState({sort: '', query: '', status: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedClients = useClients(clients, filter.sort, filter.query, filter.status);

    const [fetchClients, isClientsLoading, clientError] = useFetching(async () => {
        const response = await ClientService.getAll();
        setClients(response.data['hydra:member'])
    })

    useEffect(() => {
        fetchClients()
    }, [])

    const createClient = async (client) => {
        await ClientService.create(client.brandName, client.fullName)
        fetchClients()
        setModal(false)
    }

    return (
        <div className="App">
            <div className="clients__bar">
                <ClientFilter filter={filter} setFilter={setFilter}/>
                <AaButton onClick={() => setModal(true)}><i className="bi bi-clipboard-plus"></i></AaButton>
            </div>
            <AaModal visible={modal} setVisible={setModal}>
                <ClientForm create={createClient}/>
            </AaModal>
            {clientError &&
                <h1>Произошла ошибка ${clientError}</h1>
            }
            {isClientsLoading
                ? <AaLoader/>
                : <ClientList clients={sortedAndSearchedClients}/>
            }
        </div>
    );
}

export default Clients;
