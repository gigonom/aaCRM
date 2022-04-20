import React, {useMemo} from 'react';

const UseComments = (comments, sort) => {
    const sortedComments = useMemo(() => {
        if (sort) {
            return [...comments].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return comments;
    }, [sort, comments])

    return sortedComments;
};

export default UseComments;