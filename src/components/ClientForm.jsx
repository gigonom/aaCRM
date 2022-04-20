import React, {useState} from 'react';
import AaInput from "./UI/input/AaInput";
import AaButton from "./UI/button/AaButton";
import {statusColors} from "../utils/Status";
import AaSelect from "./UI/select/AaSelect";

const ClientForm = ({create}) => {

    const [client, setClient] = useState({
        brandName: '',
        fullName: '',
        shortName: '',
        regNumber: '',
        region: '',
        busAddress: '',
        postAddress: '',
        site: '',
        inn: '',
        ogrn: '',
        kpp: '',
        bic: '',
        bankName: '',
        corrAcc: '',
        acc: '',
        status: '',
    })

    const addNewClient = (e) => {
        e.preventDefault()
        create(client)
        setClient({
            brandName: '',
            fullName: '',
            shortName: '',
            regNumber: '',
            region: '',
            busAddress: '',
            postAddress: '',
            site: '',
            inn: '',
            ogrn: '',
            kpp: '',
            bic: '',
            bankName: '',
            corrAcc: '',
            acc: '',
            status: '',
        })
    }

    return (
        <form>
            <label>
                <AaInput
                    value={client.brandName}
                    onChange={e => setClient({...client, brandName: e.target.value})}
                    type="text"
                    placeholder="arkapp"/>
                <div className="label">
                    Название бренда
                </div>
            </label>
            <label>
                <AaInput
                    value={client.fullName}
                    onChange={e => setClient({...client, fullName: e.target.value})}
                    type="text"
                    placeholder='ООО "Гигоном"'/>
                <div className="label">
                    Полное навание организации
                </div>
            </label>
            <label>
                <AaInput
                    value={client.shortName}
                    onChange={e => setClient({...client, shortName: e.target.value})}
                    type="text"
                    placeholder='ООО "Гигоном"'/>
                <div className="label">
                    Краткое навание организации
                </div>
            </label>
            <label>
                <AaInput
                    value={client.regNumber}
                    onChange={e => setClient({...client, regNumber: e.target.value})}
                    type="text"
                    placeholder="1234567890"/>
                <div className="label">
                    Номер в реестре туроператоров
                </div>
            </label>
            <label>
                <AaInput
                    value={client.region}
                    onChange={e => setClient({...client, region: e.target.value})}
                    type="text"
                    placeholder="Сахалинская область"/>
                <div className="label">
                    Регион
                </div>
            </label>
            <label>
                <AaInput
                    value={client.busAddress}
                    onChange={e => setClient({...client, busAddress: e.target.value})}
                    type="text"
                    placeholder="693000, Сахалинская область, г. Южно-Сахалинск, ул. Ленина, 248, 20"/>
                <div className="label">
                    Юридический адрес
                </div>
            </label>
            <label>
                <AaInput
                    value={client.postAddress}
                    onChange={e => setClient({...client, postAddress: e.target.value})}
                    type="text"
                    placeholder="693000, Сахалинская область, г. Южно-Сахалинск, ул. Ленина, 248, 20"/>
                <div className="label">
                    Почтовый адрес
                </div>
            </label>
            <label>
                <AaInput
                    value={client.site}
                    onChange={e => setClient({...client, site: e.target.value})}
                    type="text"
                    placeholder="gigonom.com"/>
                <div className="label">
                    Адрес сайта
                </div>
            </label>
            <label>
                <AaInput
                    value={client.inn}
                    onChange={e => setClient({...client, inn: e.target.value})}
                    type="text"
                    placeholder="6501275166"/>
                <div className="label">
                    ИНН
                </div>
            </label>
            <label>
                <AaInput
                    value={client.ogrn}
                    onChange={e => setClient({...client, ogrn: e.target.value})}
                    type="text"
                    placeholder="1156501005110"/>
                <div className="label">
                    ОГРН
                </div>
            </label>
            <label>
                <AaInput
                    value={client.kpp}
                    onChange={e => setClient({...client, kpp: e.target.value})}
                    type="text"
                    placeholder="650101001"/>
                <div className="label">
                    КПП
                </div>
            </label>
            <label>
                <AaInput
                value={client.bic}
                onChange={e => setClient({...client, bic: e.target.value})}
                type="text"
                placeholder="044525999"/>
                <div className="label">
                    БИК банка
                </div>
            </label>
            <label>
                <AaInput
                    value={client.bankName}
                    onChange={e => setClient({...client, bankName: e.target.value})}
                    type="text"
                    placeholder='ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ" г.Москва'/>
                <div className="label">
                    Наименование банка
                </div>
            </label>
            <label>
                <AaInput
                    value={client.corrAcc}
                    onChange={e => setClient({...client, corrAcc: e.target.value})}
                    type="text"
                    placeholder="30101810845250000999"/>
                <div className="label">
                    Корр. счёт
                </div>
            </label>
            <label>
                <AaInput
                    value={client.acc}
                    onChange={e => setClient({...client, acc: e.target.value})}
                    type="text"
                    placeholder="40702810902500007448"/>
                <div className="label">
                    Расчётный счёт
                </div>
            </label>
            <label>
                <AaSelect
                    value={client.status}
                    onChange={value => setClient({...client, status: Number.parseInt(value)})}
                    options={statusColors.map((status, i) => {return {value: i, name: status.name}})}
                />
                <div className="label">
                    Статус
                </div>
            </label>
            <div className="button__row">
                <AaButton onClick={addNewClient}>Создать клиента</AaButton>
            </div>
        </form>
    );
};

export default ClientForm;