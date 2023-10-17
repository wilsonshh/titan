import React from "react";
import "../../assets/styles/member/Memberlist.css";
import MemberCompletionCard from "./MemberCard";

/**
 * Component for displaying a list of members.
 */
function MemberList() {
    // List of members with their information
    const list = [
        {
            id: 1,
            name: "Sandra Strange",
            username: "sandrastrange",
            avatarUrl: "https://randomuser.me/api/portraits/women/59.jpg",
            verified: true,
            count: 6,
        },
        {
            id: 2,
            name: "Rosie Sakura",
            username: "@sakuran",
            avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg",
            verified: false,
            count: 4,
        },
        {
            id: 3,
            name: "Domian Greysin",
            username: "@dgreyson",
            avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
            verified: true,
            count: 5,
        },
        {
            id: 4,
            name: "The Green Goo",
            username: "@greengoo",
            avatarUrl: "https://randomuser.me/api/portraits/women/76.jpg",
            verified: true,
            count: 6,
        },
        {
            id: 5,
            name: "Bearded Wonder",
            username: "@brdwonder",
            avatarUrl: "https://randomuser.me/api/portraits/women/27.jpg",
            verified: false,
            count: 8,
        },
        {
            id: 6,
            name: "David Wilson",
            username: "davidwilson",
            avatarUrl: "https://randomuser.me/api/portraits/women/93.jpg",
            verified: true,
            count: 4,
        },
        // Add more members as needed
    ];

    return (
        <div className="member-card-container">
            <div className="member-title-container">
                <p>Newest Members</p>
            </div>
            <div style={{padding: "10px 0px"}}>
                {list.map((member) => (
                    // Render a MemberCompletionCard component for each member in the list
                    <MemberCompletionCard key={member.id} member={member}/>
                ))}
            </div>
        </div>
    );
}

export default MemberList;
