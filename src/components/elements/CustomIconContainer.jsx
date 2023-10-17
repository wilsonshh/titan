import React from 'react';
import PropTypes from 'prop-types';

/**
 * CustomIconContainer is a container component for custom icons.
 *
 * @param {Object} props - The component's props.
 * @param {ReactNode} props.children - The child components to be rendered within the container.
 */
function CustomIconContainer({children}) {
    return (
        <div className="d-flex align-items-center">
            {children}
        </div>
    );
}

CustomIconContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CustomIconContainer;
