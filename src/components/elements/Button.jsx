import React from 'react';
import PropTypes from 'prop-types';

/**
 * ButtonComp is a reusable button component.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.title - The text displayed on the button.
 * @param {string} props.backgroundColor - The background color of the button.
 * @param {function} props.onClickCallback - The callback function when the button is clicked.
 */
function ButtonComp({title, backgroundColor, onClickCallback}) {
    /**
     * Handles the button click event.
     */
    const handleClick = () => {
        if (onClickCallback) {
            onClickCallback();
        }
    };

    return (
        <button
            onClick={handleClick}
            id="c-btn"
            className={`btn ${backgroundColor ? 'text-white' : 'default-bg-color'}`}
            style={{
                backgroundColor: backgroundColor,
                padding: '10px 20px',
                borderRadius: '10px',
                margin: '0 5px',
                fontSize: '.75rem',
                color: '#adafca',
                fontWeight: '700',
                boxShadow: backgroundColor
                    ? '4px 7px 12px 0 rgba(97, 93, 250, .2)'
                    : 'none',
                minWidth: '70px',
            }}
        >
            {title}
        </button>
    );
}

ButtonComp.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    onClickCallback: PropTypes.func,
};

ButtonComp.defaultProps = {
    backgroundColor: '#adafca',
};

export default ButtonComp;
