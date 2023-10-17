import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/common/SearchBar.css";
import ClearIcon from "@mui/icons-material/Clear";
import {IconButton} from "@mui/material";
import {Search} from "feather-icons-react/build/IconComponents";

/**
 * SearchBar is a component for searching people or groups.
 *
 * @param {string} query - The current search query.
 * @param {function} setQuery - A function to update the search query.
 * @returns {JSX.Element} The SearchBar component.
 */
function SearchBar({query, setQuery}) {
    return (
        <div className="interactive-input">
            <input
                className="input-container"
                type="text"
                id="search-main"
                name="search_main"
                placeholder="Search here for people or groups"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="interactive-input-icon-wrap">
                {query?.length <= 0 ? (
                    <Search
                        className="search-icon"
                        style={{
                            color: "#6966E0",
                            fontSize: "20px"
                        }}
                    />
                ) : (
                    <IconButton onClick={() => setQuery("")}>
                        <ClearIcon
                            className="clear-icon"
                            style={{
                                color: "#6966E0",
                                fontSize: "30px"
                            }}
                        />
                    </IconButton>
                )}
            </div>
        </div>
    );
}

// PropTypes for type checking
SearchBar.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
