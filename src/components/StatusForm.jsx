import React, {useState} from 'react';
import AaSelect from "./UI/select/AaSelect";
import AaButton from "./UI/button/AaButton";
import {statusColors} from "../utils/Status";

const StatusForm = ({editClient, currentStatus}) => {
    const [status, setStatus] = useState(currentStatus)

    const editClientStatus = (e) => {
        e.preventDefault()
        editClient(status)
        setStatus('')
    }
    return (
        <form>
            <AaSelect
                value={status}
                onChange={value => setStatus(Number.parseInt(value))}
                options={statusColors.map((status, i) => {return {value: i, name: status.name}})
                }/>
            <AaButton onClick={editClientStatus}>Изменить статус</AaButton>
        </form>
    );
};

export default StatusForm;