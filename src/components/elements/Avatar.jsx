import React from 'react';
import profileBorderImage from '../../assets/icons/profile-border.png';
import '../../assets/styles/common/Avatar.css';

/**
 * Avatar component displays a profile border image.
 * @returns {JSX.Element} The Avatar component.
 */
function Avatar() {
    return (
        <div className="image-container">
            <img src={profileBorderImage} alt="Profile Border" className="overlay-image"/>
        </div>
    );
}

export default Avatar;
