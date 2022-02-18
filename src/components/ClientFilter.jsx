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
    );
};

export default ClientFilter;