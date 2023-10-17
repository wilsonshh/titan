import React, {useState} from "react";
import PropTypes from "prop-types";

/**
 * A custom tab panel component for managing tabbed content.
 * @param {Object} props - The component props.
 * @param {number} props.value - The currently selected tab index.
 * @param {number} props.index - The index of this tab panel.
 * @param {ReactNode} props.children - The content to be displayed within the tab panel.
 * @returns {JSX.Element} - The CustomTabPanel component.
 */
function CustomTabPanel({children, value, index}) {
    return (
        <div
            hidden={value !== index}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

/**
 * A dumb tab component for rendering a set of tabs with associated content.
 * @param {Object} props - The component props.
 * @param {Array} props.tabs - An array of tab objects with label and content properties.
 * @param {string} [props.padding] - The padding for each tab item.
 * @param {string} [props.fontSize] - The font size for tab labels.
 * @returns {JSX.Element} - The DumbTabs component.
 */
function DumbTabs({tabs, padding = "0", fontSize = "inherit"}) {
    const [value, setValue] = useState(0);

    /**
     * Handles tab change when clicked.
     * @param {Event} event - The click event.
     * @param {number} newValue - The new tab index.
     */
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>
                <ul
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        flex: 1,
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {tabs.map((tab, index) => (
                        <div
                            onClick={() => handleChange(null, index)}
                            style={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                borderBottom: value === index ? "3px solid #23d2e2" : "",
                                padding: padding,
                                textDecoration: "none",
                                cursor: "pointer",
                                listStyleType: "none",
                            }}
                            key={index}
                        >
              <span
                  className="d-flex align-items-center justify-content-center"
                  key={index}
              >
                {tab.icon && tab.icon}
                  <span
                      style={{
                          marginLeft: tab.icon ? "9px" : "",
                          fontSize: fontSize,
                          fontWeight: "600",
                      }}
                  >
                  {tab.label}
                </span>
              </span>
                        </div>
                    ))}
                </ul>
            </div>
            {tabs.map((tab, index) => (
                <CustomTabPanel key={index} value={value} index={index}>
                    {tab.content}
                </CustomTabPanel>
            ))}
        </div>
    );
}

DumbTabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
    padding: PropTypes.string,
    fontSize: PropTypes.string,
};

export default DumbTabs;
