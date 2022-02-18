import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const AaPagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="pages">
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >{p}</button>
            )}
        </div>
    );
};

export default AaPagination;