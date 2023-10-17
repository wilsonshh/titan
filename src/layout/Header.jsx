import React, {useState} from "react";
import {Nav, Navbar} from "react-bootstrap";
import "../assets/styles/common/Header.css";
import GridViewIcon from "@mui/icons-material/GridView";
import Logo from "../assets/icons/logo.png";
import SearchBar from "../components/elements/SearchBar";
import sideDrawerIcon from "../assets/icons/side-drawer-icon.png";
import CustomIconContainer from "../components/elements/CustomIconContainer";
import ButtonComp from '../components/elements/Button';
import {constants} from "../config/default";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

/**
 * The Header component represents the navigation header of the application.
 * It includes a logo, navigation links, search bar, and additional buttons.
 */
function Header() {
    // State for managing search query and hover state
    const [query, setQuery] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    // Event handlers for mouse hover
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Navbar className="fixed-top header-body" variant="dark" expand="lg">
            <div className="d-flex align-items-center justify-content-between" style={{flexGrow: 1, padding: 0}}>
                <div className="navlinks-branc-container">
                    <Navbar.Brand href="/"
                                  className="d-flex align-items-center justify-content-center nav-brand-container">
                        <div>
                            <img src={Logo} alt="echo logo" style={{height: "60px"}}/>{" "}
                        </div>
                        <span className="side-drawer-icon-container">
              <div className="d-flex align-items-center" style={{margin: 0, padding: 0}}>
                <img src={sideDrawerIcon} alt="side drawer icon" height={"25px"} style={{marginLeft: "10px"}}/>
              </div>
            </span>
                        <div className="brand-name">
                            {constants.brand.toLocaleUpperCase()}
                        </div>
                    </Navbar.Brand>
                    <div className="nav-links">
            <span className="grid-icon-container">
              <div className="d-flex align-items-center" style={{height: "80px"}}>
                <CustomIconContainer>
                  <GridViewIcon className="grid-icon"/>
                </CustomIconContainer>
              </div>
            </span>
                        <Nav className="ml-auto nav-items-container">
                            <div className="d-flex align-items-center nav-link-item">
                                <Nav.Link href="/" className="menu-main-item-link">
                                    Home
                                </Nav.Link>
                            </div>
                            <div className="d-flex align-items-center nav-link-item">
                                <div
                                    className={`more-icon ${isHovered}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="menu-main-item-link">
                                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                            <p>Features</p>
                                            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" size="1x"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div
                                    className={`more-icon ${isHovered}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="menu-main-item-link">
                                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                            <p>More</p>
                                            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" size="1x"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Nav>
                        <span className="more-icon-container">
              <div className="d-flex align-items-center">
                <div
                    className={`more-icon ${isHovered}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                </div>
              </div>
            </span>
                    </div>
                </div>
                <div className="search-bar">
                    <SearchBar query={query} setQuery={setQuery}/>
                </div>
                <div className="nav-additional-links">
                    <div className="d-flex align-items-center" style={{marginRight: "20px"}}>
                        <ButtonComp backgroundColor="#23d2e2" title="Login"
                                    onClickCallback={() => alert("Button Clicked")}/>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}

export default Header;
