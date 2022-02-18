import axios from "axios";

export default class ClientService {
    static async getAll(limit = 1, page = 1) {
        const response = await axios.get('https://localhost/clients', {
            params: {
                limit: limit,
                page: page
            },
        })
        return response
    }
}