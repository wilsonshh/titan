import React from "react";
import PropTypes from "prop-types";
import '../../assets/styles/feed/NewsfeedUserProfile.css'
import verified from "../../assets/icons/verified.png";
import MemberAvatar from "../member/MemberAvatar";

/**
 * A component that displays a user's profile in a newsfeed.
 *
 * @component
 * @param {Object} newsfeed - The newsfeed data containing user information.
 * @param {string} newsfeed.member.name - The name of the user.
 * @param {string} newsfeed.member.avatarUrl - The URL of the user's avatar.
 * @param {boolean} newsfeed.member.verified - Indicates if the user is verified.
 * @param {string} newsfeed.member.memberType - The type of the user (e.g., "Admin" or "Member").
 * @param {string} newsfeed.status - The status of the user's activity (e.g., "replied" or "posted on update").
 * @param {string} newsfeed.topic - The topic associated with the user's activity.
 * @param {string} newsfeed.postTime - The timestamp of the user's activity.
 * @returns {JSX.Element} A React component representing the user's profile in the newsfeed.
 */
function NewsfeedUserProfile({newsfeed}) {
    return (
        <div className="newsfeed-name-container">
            <MemberAvatar src={newsfeed.member.avatarUrl} count={newsfeed.totalShares}/>
            <div className="newsfeed-name-inner-container">
                <div className="newsfeed-name-icon">
                    <div className="text-name">{newsfeed.member.name}</div>
                    {newsfeed.member.verified ? (
                        <img src={verified} alt="icon verified" className="icon-verified"/>
                    ) : (
                        <div/>
                    )}
                    <div className="container-user-type">
                        {newsfeed.member.memberType}
                    </div>
                    <div className="text-posted">
                        {newsfeed.status === 'replied' ? "replied to topic" : "posted on update"}
                    </div>
                </div>
                {newsfeed.topic ? (
                    <div dangerouslySetInnerHTML={{__html: newsfeed.topic}}/>
                ) : null}
                <div className="text-shortname">{newsfeed.postTime}</div>
            </div>
        </div>
    );
}

NewsfeedUserProfile.propTypes = {
    newsfeed: PropTypes.shape({
        member: PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatarUrl: PropTypes.string.isRequired,
            verified: PropTypes.bool.isRequired,
            memberType: PropTypes.string.isRequired,
        }).isRequired,
        status: PropTypes.string.isRequired,
        topic: PropTypes.string,
        postTime: PropTypes.string.isRequired,
        totalShares: PropTypes.number,
    }).isRequired,
};

export default NewsfeedUserProfile;
