import React, {useState} from "react";
import "../assets/styles/common/LeftSidebar.css";
import {
    Award,
    BarChart2,
    Calendar,
    FileText,
    Monitor,
    ShoppingBag,
    Star,
    User,
    Users,
    Video,
} from "feather-icons-react/build/IconComponents";
import {Tooltip} from "@mui/material";

/**
 * Component for the left sidebar that displays icons and handles icon clicks.
 */
function LeftSidebar() {
    // State to track the active icon
    const [activeIcon, setActiveIcon] = useState("Newsfeed");

    /**
     * Customized Tooltip component for consistent styling.
     * @param {string} title - Tooltip title text.
     * @param {ReactNode} children - Child elements.
     * @param {object} props - Additional props for Tooltip component.
     */
    const StyledTooltip = ({title, children, ...props}) => (
        <Tooltip
            {...props}
            title={title}
            placement="right"
            componentsProps={{
                tooltip: {
                    sx: {
                        fontSize: "12px",
                        color: "#ffffff",
                        borderRadius: "20px",
                        backgroundColor: "#000",
                    },
                },
            }}
        >
            {children}
        </Tooltip>
    );

    /**
     * Handles the click event when an icon is clicked.
     * @param {string} iconTitle - Title of the clicked icon.
     * @param {Event} e - Click event object.
     */
    const handleIconClick = (iconTitle, e) => {
        e.preventDefault(); // Prevent the default link behavior
        setActiveIcon(iconTitle);
    };

    return (
        <div className="left-sidebar">
            <StyledTooltip title="News Feed">
                <div
                    className={activeIcon === "Newsfeed" ? "left-sidebar-icon-active" : "left-sidebar-icon"}
                    title="Newsfeed"
                >
                    <a href="/" data-title="Newsfeed" onClick={(e) => handleIconClick("Newsfeed", e)}>
                        <Monitor
                            className="icon-menu"
                            style={{
                                color: activeIcon === "Newsfeed" ? "#ffffff" : "#adafca",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </a>
                </div>
            </StyledTooltip>
            <StyledTooltip title="Analytics">
                <div
                    className={activeIcon === "Analytics" ? "left-sidebar-icon-active" : "left-sidebar-icon"}
                    title="Analytics"
                >
                    <a href="#?" data-title="Analytics" onClick={(e) => handleIconClick("Analytics", e)}>
                        <BarChart2
                            style={{
                                color: activeIcon === "Analytics" ? "#ffffff" : "#adafca",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </a>
                </div>
            </StyledTooltip>
            <StyledTooltip title="Groups">
                <div
                    className={activeIcon === "Groups" ? "left-sidebar-icon-active" : "left-sidebar-icon"}
                    title="Groups"
                >
                    <a href="#?" data-title="Groups" onClick={(e) => handleIconClick("Groups", e)}>
                        <Users
                            style={{
                                color: activeIcon === "Groups" ? "#ffffff" : "#adafca",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </a>
                </div>
            </StyledTooltip>
            <StyledTooltip title="Members" placement="right">
                <div className={activeIcon === "Members" ? "left-sidebar-icon-active" : "left-sidebar-icon"}>
                    <a href="#?" data-title="Members" onClick={(e) => handleIconClick("Members", e)}>
                        <User style={{
                            color: activeIcon === "Members" ? "#ffffff" : "#adafca",
                            width: "24px",
                            height: "24px"
                        }}/>
                    </a>
                </div>
            </StyledTooltip>
            <StyledTooltip title="Achievements" placement="right">
                <div className={activeIcon === "Achievements" ? "left-sidebar-icon-active" : "left-sidebar-icon"}>
                    <a href="#?" data-title="BadgeList" onClick={(e) => handleIconClick("Achievements", e)}>
                        <Award style={{
                            color: activeIcon === "Achievements" ? "#ffffff" : "#adafca",
                            width: "24px",
                            height: "24px"
                        }}/>
                    </a>
                </div>
            </StyledTooltip>
            <StyledTooltip title="Favourites" placement="right">
                <div className={activeIcon === "Favourites" ? "left-sidebar-icon-active" : "left-sidebar-icon"}>
                    <a href="#?" data-title="Favourites" onClick={(e) => handleIconClick("Favourites", e)}>
                        <Star style={{
                            color: activeIcon === "Favourites" ? "#ffffff" : "#adafca",
                            width: "24px",
                            height: "24px"
                        }}/>
                    </a>
                </div>
            </StyledTooltip>
            <StyledTooltip title="Video" placement="right">
                <div className={activeIcon === "Video" ? "left-sidebar-icon-active" : "left-sidebar-icon"}>
                    <a href="#?" data-title="Video" onClick={(e) => handleIconClick("Video", e)}>
                        <Video style={{
                            color: activeIcon === "Video" ? "#ffffff" : "#adafca",
                            width: "24px",
                            height: "24px"
                        }}/>
                    </a>
                </div>
            </StyledTooltip>
            <StyledTooltip title="Calender" placement="right">
                <div className={activeIcon === "Calender" ? "left-sidebar-icon-active" : "left-sidebar-icon"}>
                    <a href="#?" data-title="Calender" onClick={(e) => handleIconClick("Calender", e)}>
                        <Calendar style={{
                            color: activeIcon === "Calender" ? "#ffffff" : "#adafca",
                            width: "24px",
                            height: "24px"
                        }}/>
                    </a>
                </div>
            </StyledTooltip>

            <StyledTooltip title="Notes" placement="right">
                <div className={activeIcon === "Notes" ? "left-sidebar-icon-active" : "left-sidebar-icon"}>
                    <a href="#?" data-title="Notes" onClick={(e) => handleIconClick("Notes", e)}>
                        <FileText style={{
                            color: activeIcon === "Notes" ? "#ffffff" : "#adafca",
                            width: "24px",
                            height: "24px"
                        }}/>
                    </a>
                </div>
            </StyledTooltip>
            <StyledTooltip title="Carts" placement="right">
                <div className={activeIcon === "Cart" ? "left-sidebar-icon-active" : "left-sidebar-icon"}>
                    <a href="#?" data-title="Cart" onClick={(e) => handleIconClick("Cart", e)}>
                        <ShoppingBag style={{
                            color: activeIcon === "Cart" ? "#ffffff" : "#adafca",
                            width: "24px",
                            height: "24px"
                        }}/>
                    </a>
                </div>
            </StyledTooltip>
        </div>
    );
}

export default LeftSidebar;
