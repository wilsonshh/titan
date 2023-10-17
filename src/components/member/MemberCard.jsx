import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/member/MemberCard.css"; // Import the CSS file
import MemberAvatar from "./MemberAvatar";
import verified from "../../assets/icons/verified.png";

/**
 * A card component to display member information.
 *
 * @component
 * @param {Object} props - The props of the component.
 * @param {Object} props.member - The member object containing information.
 * @param {string} props.member.avatarUrl - The URL of the member's avatar.
 * @param {number} props.member.count - The count associated with the member.
 * @param {string} props.member.name - The name of the member.
 * @param {boolean} props.member.verified - Whether the member is verified.
 * @param {string} props.member.username - The username of the member.
 * @returns {JSX.Element} - The rendered MemberCompletionCard component.
 */
function MemberCompletionCard({member}) {
    return (
        <div className="member-name-container">
            <MemberAvatar src={member.avatarUrl} count={member.count}/>
            <div className="member-name-inner-container">
                <div className="member-name-icon">
                    <div className="text-name">{member.name}</div>
                    {member.verified ? (
                        <img src={verified} alt="Verified Icon" className="icon-verified"/>
                    ) : (
                        <div/>
                    )}
                </div>
                <div className="text-shortname">{member.username}</div>
            </div>
        </div>
    );
}

MemberCompletionCard.propTypes = {
    member: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        verified: PropTypes.bool.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired,
};

export default MemberCompletionCard;
