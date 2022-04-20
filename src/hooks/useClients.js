import {useMemo} from "react";

export const useSortedClients = (clients, sort) => {
    const sortedClients = useMemo(() => {
        if (sort) {
            return [...clients].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return clients;
    }, [sort, clients])

    return sortedClients;
}

export const useClients = (clients, sort, query, status) => {
    const sortedClients = useSortedClients(clients, sort);

    const sortedAndSearchedClients = useMemo(() => {
        return sortedClients.filter(client => client.brandName.toLowerCase().includes(query.toLowerCase())).filter(client => client.status === Number.parseInt(status) || status === '')
    }, [query, sortedClients, status])

    return sortedAndSearchedClients;
}