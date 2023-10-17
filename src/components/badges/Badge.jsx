import React from "react";
import "../../assets/styles/common/Badge.css"; // Import the CSS file
import GroupAvatar from "../groups/GroupAvatar";

/**
 * Badge Component displays information about a badge.
 *
 * @param {Object} badge - An object containing badge information.
 * @param {string} badge.url - The URL of the badge image.
 * @param {string} badge.label - The label or name of the badge.
 * @param {string} badge.desc - Description of the badge.
 * @returns {JSX.Element} - A React component for displaying a badge.
 */
function Badge({badge}) {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="badge-name-container">
                <GroupAvatar src={badge.url}/>
                <div className="badge-name-inner-container">
                    <div className="badge-name-icon">
                        <div className="text-name">{badge.label}</div>
                    </div>
                    <div className="text-member">{badge.desc}</div>
                </div>
            </div>
            {/* Divider line */}
            <div
                style={{
                    height: "3px",
                    margin: "0px 5px",
                    backgroundColor: "#f1f1f1",
                }}
            />
        </div>
    );
}

export default Badge;
