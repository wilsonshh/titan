import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/groups/GroupCard.css";
import GroupAvatar from "./GroupAvatar";
import {Globe} from 'feather-icons-react';

/**
 * GroupCard component displays information about a group.
 * @param {Object} props - The props for the GroupCard component.
 * @param {Object} props.group - The group object containing group details.
 * @param {string} props.group.groupicon - The URL of the group's icon.
 * @param {string} props.group.label - The label or name of the group.
 * @param {number} props.group.totalmember - The total number of members in the group.
 * @returns {JSX.Element} - A React component rendering group information.
 */
function GroupCard({group}) {
    return (
        <div className="group-name-container">
            <GroupAvatar src={group.groupicon}/>
            <div className="group-name-inner-container">
                <div className="group-name-icon">
                    <div className="text-name">{group.label}</div>
                </div>
                <div className="text-member">{group.totalmember} Member</div>
            </div>
            <div className="group-avatar">
                <Globe className="group-icon"/>
            </div>
        </div>
    );
}

GroupCard.propTypes = {
    group: PropTypes.shape({
        groupicon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        totalmember: PropTypes.number.isRequired,
    }).isRequired,
};

export default GroupCard;
