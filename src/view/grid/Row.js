import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ numOfColumns = 'one', children }) => {
    const rowClass = numOfColumns ? `${numOfColumns} column row` : 'row'
    return (
        <div className={rowClass}>
            {children}
        </div>
    );
};

Row.propTypes = {
    numOfColumns: PropTypes.string.isRequired
}


export default Row;