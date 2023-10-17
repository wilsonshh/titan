import React from 'react';
import PropTypes from 'prop-types';
import imgBorder from "../../assets/icons/profile-border.png";
import "../../assets/styles/member/MemberAvatar.css";
import Counter from '../elements/Counter';
import HexagonalImage from '../elements/HexagonalImage';

/**
 * MemberAvatar is a component that displays a user's avatar image with an optional count.
 *
 * @param {string} src - The source URL of the avatar image.
 * @param {number} count - The count to display next to the avatar image (optional).
 */
function MemberAvatar({src, count}) {
    return (
        <div className="image-container">
            <img src={imgBorder} alt="Profile Border" className="image image1"/>
            <HexagonalImage src={src} alt="User Avatar"/>
            {count !== undefined && (
                <div className="image counter">
                    <Counter count={count}/>
                </div>
            )}
        </div>
    );
}

MemberAvatar.propTypes = {
    src: PropTypes.string.isRequired,
    count: PropTypes.number,
};

export default MemberAvatar;
