import React from "react";
import "../../assets/styles/groups/GroupList.css";
import GroupCard from "./GroupCard";
import twitcherImage from '../../assets/images/groups/twitch-streamers.png'
import cosplayerImage from '../../assets/images/groups/cas-players.png'
import stremDesigner from '../../assets/images/groups/stream-designers.png'
import gamingWatcher from '../../assets/images/groups/gaming-watcher.png'
import livingjapan from '../../assets/images/groups/living-in-japan.png'

/**
 * Component that displays a list of popular groups.
 *
 * @component
 */
function GroupList() {

    /**
     * An array containing information about popular groups.
     * @typedef {Object} Group
     * @property {number} id - The unique identifier for the group.
     * @property {string} label - The label or name of the group.
     * @property {number} totalmember - The total number of members in the group.
     * @property {string} groupicon - The image icon representing the group.
     */
    const list = [
        {
            id: 1,
            label: "Twitch Streamers", // Using "label" instead of "name"
            totalmember: 4,
            groupicon: twitcherImage,
        },
        {
            id: 2,
            label: "Cosplayeers of the World", // Using "label" instead of "name"
            totalmember: 3,
            groupicon: cosplayerImage,
        },
        {
            id: 3,
            label: "Stream Designers", // Using "label" instead of "name"
            totalmember: 3,
            groupicon: stremDesigner,
        },
        {
            id: 4,
            label: "Gaming Watchtower", // Using "label" instead of "name"
            totalmember: 4,
            groupicon: gamingWatcher,
        },
        {
            id: 5,
            label: "Living in Japan", // Using "label" instead of "name"
            totalmember: 2,
            groupicon: livingjapan,
        }
    ];


    return (
        <div
            className="group-card-container">
            <div className="group-title-container">
                <p>
                    Popular Groups
                </p>
            </div>
            <div style={{padding: "10px 0px"}}>
                {list.map((group) => (
                    <GroupCard key={group.id} group={group}/>
                ))}
            </div>
        </div>
    );
}


export default GroupList;
