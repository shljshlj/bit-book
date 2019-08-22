import React from 'react';
import PropTypes from 'prop-types';

const GridContainer = ({ numOfColumns, container = false, children }) => {
    let gridClass;

    if (container) {
        gridClass = numOfColumns ? `ui ${numOfColumns} column grid container` : 'ui grid container';
    } else {
        gridClass = numOfColumns ? `ui ${numOfColumns} column grid` : 'ui grid';
    }

    return (
        <div className={gridClass}>
            {children}
        </div>
    );
};

GridContainer.propTypes = {
    numOfColumns: PropTypes.string
}

export default GridContainer;