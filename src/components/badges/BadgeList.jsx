import React from "react";
import Badge from "./Badge";
import globeTrotImg from "../../assets/images/common/globe.png";

/**
 * Badges Component
 *
 * This component displays a list of badges.
 *
 * @returns {JSX.Element} The rendered component.
 */
function BadgeList() {
    // Sample data for badges
    const dummyBadges = [
        {
            id: 1,
            label: "Globe Trotter",
            desc: "Helped the team enforce the community rules",
            url: globeTrotImg,
        },
    ];

    return (
        <div
            style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 0 40px 0 rgba(94, 92, 154, 0.06)",
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
                        fontSize: "1rem",
                        fontWeight: "700",
                        fontFamily: "Rajdhani, sans-serif",
                    }}
                >
                    Badges
                </p>
                <div></div>
            </div>
            <div style={{padding: "10px 0px"}}>
                {dummyBadges.map((badge, index) => (
                    <Badge key={badge.id} badge={badge} isLast={index === dummyBadges.length - 1}/>
                ))}
            </div>
        </div>
    );
}

export default BadgeList;
