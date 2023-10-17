import React from "react";
import Badge from "../badges/Badge";
import questIcon from "../../assets/icons/openq-s.png";

/**
 * Quests component displays a list of quests or achievements.
 */
function Quests() {
    // Dummy data for quests
    const dummyQuests = [
        {
            id: 1,
            label: "Posting Machine",
            desc: "Posted more than 20 profile activities in 1 day",
            url: questIcon,
        },
    ];

    return (
        <div
            style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 0 40px 0 rgba(94,92,154,.06)",
                borderRadius: "10px",
                minHeight: "100px",
                marginTop: "20px",
                padding: "10px",
            }}
        >
            <div
                className="d-flex justify-content-between align-items-center"
                style={{padding: "20px 10px 0"}}
            >
                <p
                    style={{
                        fontWeight: "700",
                        fontSize: "1rem",
                    }}
                >
                    Quests
                </p>
                <div>{/* Any additional content can be placed here */}</div>
            </div>
            <div style={{padding: "10px 0px"}}>
                {dummyQuests.map((quest, index) => (
                    <Badge
                        key={quest.id}
                        badge={quest}
                        isLast={index === dummyQuests.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}

export default Quests;
