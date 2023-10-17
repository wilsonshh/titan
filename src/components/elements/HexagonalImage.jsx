import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import '../../assets/styles/common/HexagonalImage.css';

/**
 * HexagonalImage Component - A reusable component for displaying images inside a hexagonal container.
 *
 * @param {string} src - The source URL of the image.
 */
function HexagonalImage({src}) {
    return (
        <div className="hexagonal-image-container">
            <img src={src} alt="Hexagonal" className="hexagonal-image"/>
        </div>
    );
}

HexagonalImage.propTypes = {
    src: PropTypes.string.isRequired,
};

export default HexagonalImage;
