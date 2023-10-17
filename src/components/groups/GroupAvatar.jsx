import React from 'react';

/**
 * GroupAvatar Component
 *
 * This component displays a group avatar image.
 *
 * @param {string} src - The source URL of the image to display.
 * @returns {JSX.Element} - Rendered GroupAvatar component.
 */
function GroupAvatar({src}) {
    return (
        <div className="image-container">
            <img src={src} alt="Group Avatar" className="image image2"/>
        </div>
    );
}

export default GroupAvatar;
