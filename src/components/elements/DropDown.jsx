import React from "react";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import "../../assets/styles/common/DropDown.css";

/**
 * Dropdown component for selecting options.
 * @returns {JSX.Element} The Dropdown component.
 */
function DropDown() {
    return (
        <div className="custom-dropdown">
            <select
                id="dropdown"
                name="fruit"
                className="select-tag"
                style={dropdownStyles}
            >
                <option value="everything">Everything</option>
                <option value="groups">Groups</option>
            </select>
            <ArrowDropDownOutlinedIcon style={iconStyles}/>
        </div>
    );
}

/**
 * Styles for the dropdown select element.
 */
const dropdownStyles = {
    backgroundColor: "#fff",
    padding: "12px 30px",
    width: "100%",
    outline: "none",
    border: "none",
    fontSize: "13px",
    fontWeight: "700",
    color: "#333",
    boxShadow: "none",
    cursor: "pointer",
    appearance: "none",
    WebkitAppearance: "none",
    fontFamily: "Rajdhani, sans-serif",
};

/**
 * Styles for the dropdown arrow icon.
 */
const iconStyles = {
    color: "black",
    marginRight: "10px",
};

export default DropDown;
