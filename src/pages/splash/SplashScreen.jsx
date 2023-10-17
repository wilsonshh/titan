import React from 'react'
import Loader from '../../components/elements/Loader';
import "../../assets/styles/common/SplashScreen.css";

function SplashScreen() {
    return (
        <div className="d-flex align-items-center justify-content-center splash-screen-container">
            <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="d-flex justify-content-center align-items-center" style={{padding: "0 10px 0 5px"}}>
                </div>
                <Loader/>
            </div>
        </div>
    )
}

export default SplashScreen
