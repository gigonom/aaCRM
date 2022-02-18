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
import {getPageCount, getPagesArray} from "../utils/pages";
import AaPagination from "../components/UI/pagination/AaPagination";

function Clients() {
    const [clients, setClients] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);
    const sortedAndSearchedClients = useClients(clients, filter.sort, filter.query);

    const [fetchClients, isClientsLoading, clientError] = useFetching(async (limit, page) => {
        const response = await ClientService.getAll(limit, page);
        setClients(response.data['hydra:member'])
        const totalCount = response.data['hydra:totalItems']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchClients(limit, page)
    }, [])

    const createClient = (newClient) => {
        setClients([...clients, newClient])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)
        fetchClients(limit, page)
    }

    return (
        <div className="App">
            <div className="clients__bar">
                <ClientFilter filter={filter} setFilter={setFilter}/>
                <AaButton onClick={() => setModal(true)}>Создать клиента</AaButton>
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
            <AaPagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Clients;
