import React from 'react';
import PropTypes from 'prop-types';
import counterOuterBackground from '../../assets/icons/counter-background-outer.png';
import counterInnerBackground from '../../assets/icons/counter-background-inner.png';
import '../../assets/styles/common/Counter.css';

/**
 * Counter is a component to display a count with background images.
 *
 * @param {Object} props - The component's props.
 * @param {number} props.count - The count to be displayed.
 */
function Counter({count}) {
    return (
        <div className="counter-container">
            <img
                src={counterOuterBackground}
                alt="counter-outer-background"
                className="counter counter-back-outer"
            />
            <img
                src={counterInnerBackground}
                alt="counter-inner-background"
                className="counter counter-back-inner"
            />
            <div className="counter counter-label">{count}</div>
        </div>
    );
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
};

export default Counter;
