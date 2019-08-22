import React from 'react';
import PropTypes from 'prop-types';

const ModalWrapper = props => {
    const handleBackgroundClick = e => {
        if (e.target === e.currentTarger) props.hideModal();
    };

    const onSubmit = () => {
        props.onSubmit();
        props.hideModal();
    };

    const actionButtons = props.showSubmit
        ? (
            <div className="actions">
                <button className="ui button">Cancel</button>

                <button
                    className="ui button"
                    onClick={onSubmit}
                    disabled={props.submitDisabled}
                >
                    {props.actionText}
                </button>
            </div>
        ) : null;

    return (
        <div className="ui dimmer modals page transition visible active" onClick={handleBackgroundClick}>
            <div className="ui modal transition visible active">
                <header className="header">
                    <h1>{props.title}</h1>

                    <button onClick={props.hideModal}>
                        <i className="close icon"></i>
                    </button>
                </header>

                {props.children}

                {actionButtons}
            </div>
        </div>
    );
};

ModalWrapper.propTypes = {
    // props
    title: PropTypes.string,
    showSubmit: PropTypes.bool,
    actionText: PropTypes.string,
    submitDisabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.element
    ]).isRequired,

    // methods
    hideModal: PropTypes.func,
    onSubmit: PropTypes.func
};

ModalWrapper.defaultProps = {
    title: '',
    showSubmit: true,
    actionText: 'Save',
    submitDisabled: false,
    onSubmit: () => { }
};

export default ModalWrapper;