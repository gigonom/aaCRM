import axios from "axios";

export default class ClientService {
    static async getAll() {
        return await axios.get('https://localhost/clients')
    }

    static async getByID(clientId) {
        return await axios.get('https://localhost/clients/' + clientId)
    }

    static async create(brandName, fullName) {
        return await axios.post('https://localhost/clients', {brandName: brandName, fullName: fullName})
    }

    static async edit(status, clientId) {
        return await axios.put('https://localhost/clients/' + clientId, {status: status})
    }

    static async getClient(clientId) {
        return await axios.get('https://localhost/clients/' + clientId)
    }

    static async getComments(clientId) {
        return await axios.get('https://localhost/comments', {params: {clientId: clientId, 'order[publicationDate]': 'desc'}})
    }

    static async createComment(content, clientId) {
        return await axios.post('https://localhost/comments', {content: content, clientId: clientId})
    }

    static async getContacts(clientId) {
        return await axios.get('https://localhost/contacts', {params: {clientId: clientId}})
    }

    static async createContact(name, tel, email, clientId) {
        return await axios.post('https://localhost/contacts', {name: name, tel: tel, email: email, clientId: clientId})
    }
}