import React from 'react';
import AaInput from "./UI/input/AaInput";
import AaSelect from "./UI/select/AaSelect";

const ClientFilter = ({filter, setFilter}) => {
    return (
        <div className="filters">
            <AaInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск клиентов'
            />
            <div className="filters__row">
                <AaSelect
                    value={filter.status}
                    onChange={value => setFilter({...filter, status: value})}
                    defaultValue="Все клиенты"
                    options={[
                        {value: '0', name: 'Новые'},
                        {value: '1', name: 'Подключеные'},
                        {value: '2', name: 'В работе'},
                        {value: '3', name: 'Не уверены'},
                        {value: '4', name: 'Отказ'}
                    ]}
                />
                <AaSelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="Сначала новые"
                    options={[
                        {value: 'brandName', name: 'По названию бренда'},
                        {value: 'fullName', name: 'По названию компании'}
                    ]}
                />
            </div>
        </div>
    );
};

export default ClientFilter;