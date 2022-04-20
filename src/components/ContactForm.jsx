import React, {useState} from 'react';
import AaInput from "./UI/input/AaInput";
import AaButton from "./UI/button/AaButton";

const ContactForm = ({createContact}) => {
    const [contact, setContact] = useState({name: '', tel: '', email: ''})

    const addNewContact = (e) => {
        e.preventDefault()
        createContact(contact.name, contact.tel, contact.email)
        setContact({name: '', tel: '', email: ''})
    }

    return (
        <form>
            <label>
                <AaInput
                    value={contact.name}
                    onChange={e => setContact({...contact, name: e.target.value})}
                    type="text"
                    placeholder="Иван"/>
                <div className="label">Имя</div>
            </label>
            <label>
                <AaInput
                    value={contact.tel}
                    onChange={e => setContact({...contact, tel: e.target.value})}
                    type="text"
                    placeholder="+79999999999"/>
                <div className="label">Телефон</div>
            </label>
            <label>
                <AaInput
                    value={contact.email}
                    onChange={e => setContact({...contact, email: e.target.value})}
                    type="text"
                    placeholder="mail@mail.com"/>
                <div className="label">Email</div>
            </label>
            <div className="button__row">
                <AaButton onClick={addNewContact}>Создать клиента</AaButton>
            </div>
        </form>
    );
};

export default ContactForm;