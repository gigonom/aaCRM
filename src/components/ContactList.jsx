import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import ClientService from "../API/ClientService";
import AaButton from "./UI/button/AaButton";
import AaLoader from "./UI/loader/AaLoader";
import AaModal from "./UI/modal/AaModal";
import ContactForm from "./ContactForm";

const ContactList = ({clientId}) => {
    const [contacts, setContacts] = useState([])
    const [fetchContacts, isContactLoading, contactError] = useFetching(async () => {
        const response = await ClientService.getContacts(clientId);
        setContacts(response.data['hydra:member'])
    })
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchContacts()
    }, [])

    const createContact = async (name, tel, email) => {
        await ClientService.createContact(name, tel, email, clientId)
        fetchContacts()
        setModal(false)
    }

    return (
        <div className="client__contacts">
            <div className="client__bar-head">
                <h2>Контакты:</h2>
                <AaButton onClick={() => setModal(true)}><i className="bi bi-person-plus"></i></AaButton>
            </div>
            {contactError &&
                <h1>Произошла ошибка ${contactError}</h1>
            }
            {isContactLoading
                ? <AaLoader/>
                :
                contacts.map(contact =>
                    <div className="client__bar-item" key={contact.id}>
                        <div className="client__contact-name">{contact.name}</div>
                        <div>
                            <div>{contact.tel}</div>
                            <div>{contact.email}</div>
                        </div>
                    </div>
                )
            }
            <AaModal visible={modal} setVisible={setModal}>
                <ContactForm createContact={createContact}/>
            </AaModal>
        </div>
    );
};

export default ContactList;