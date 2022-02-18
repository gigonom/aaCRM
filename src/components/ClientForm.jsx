import React, {useState} from 'react';
import AaInput from "./UI/input/AaInput";
import AaButton from "./UI/button/AaButton";

const ClientForm = ({create}) => {

    const [client, setClient] = useState({brandName: '', fullName: ''})

    const addNewClient = (e) => {
        e.preventDefault()
        const newClient = {
            ...client, id: Date.now()
        }
        create(newClient)
        setClient({brandName: '', fullName: ''})
    }

    return (
        <form>
            <AaInput
                value={client.brandName}
                onChange={e => setClient({...client, brandName: e.target.value})}
                type="text"
                placeholder="Название бренда"/>
            <AaInput
                value={client.fullName}
                onChange={e => setClient({...client, fullName: e.target.value})}
                type="text"
                placeholder="Навание организации"/>
            <AaButton onClick={addNewClient}>Создать клиента</AaButton>
        </form>
    );
};

export default ClientForm;