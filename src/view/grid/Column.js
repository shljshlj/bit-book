import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ numOfColumns, children }) => {
    return (
        <div className={`${numOfColumns} wide column`}>
            {children}
        </div>
    );
};

Column.propTypes = {
    numOfColumns: PropTypes.string
}

export default Column;