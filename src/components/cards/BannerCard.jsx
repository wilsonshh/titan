import React from "react";
import bannerImgBg from "../../assets/images/common/banner-bg.png";
import bannerImg from "../../assets/images/common/newsfeed-icon.png";
import "../../assets/styles/common/BannerCard.css";

/**
 * BannerCard component displays a banner with a title and subtitle.
 *
 * @param {Object} props - The props for the BannerCard component.
 * @param {string} props.title - The title to be displayed on the banner.
 * @param {string} props.subTitle - The subtitle to be displayed on the banner.
 * @returns {JSX.Element} A React JSX element representing the BannerCard.
 */
function BannerCard({title, subTitle}) {
    return (
        <div id="main-container">
            <div id="main-div">
                {/* Banner Background Image */}
                <img
                    style={{width: "100%"}}
                    src={bannerImgBg}
                    alt="banner background"
                    id="news-feed-bg"
                />

                {/* Banner Icon */}
                <img
                    src={bannerImg}
                    alt="banner news feed"
                    id="news-feed-img"
                />

                {/* Text Container */}
                <div
                    id="news-feed-txt-container"
                >
                    {/* Title */}
                    <p
                        id="news-feed-txt"
                    >
                        {title}
                    </p>

                    {/* Subtitle */}
                    <p
                        className="section-banner-text"
                    >
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BannerCard;
