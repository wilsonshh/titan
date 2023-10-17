import React, {useEffect, useState} from "react";
import "../assets/styles/common/Main.css";
import HeaderComponent from "./Header";
import LeftSidebar from "./LeftSidebar";
import SplashScreen from "../pages/splash/SplashScreen";

/**
 * Main component serves as the core layout for the application.
 * It displays a loading splash screen until the content is ready.
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - The child components to be rendered inside Main.
 */
function Main({children}) {
    const [loading, setLoading] = useState(true);

    // Simulate loading for 1 second, then set loading to false.
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Cleanup the timeout to prevent memory leaks.
        return () => clearTimeout(loadingTimeout);
    }, []);

    return (
        <div className="app">
            {!loading ? (
                <>
                    <HeaderComponent/>
                    <div className="content-wrapper">
                        <LeftSidebar/>
                        <div className="main-content" style={{backgroundColor: "#f8f8fb"}}>
                            <div className="container">
                                {children}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <SplashScreen/>
            )}
        </div>
    );
}

export default Main;
