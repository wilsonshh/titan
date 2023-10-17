import React from "react";
import PropTypes from "prop-types";
import '../../assets/styles/feed/BasicFeed.css';
import NewsfeedUserProfile from "./NewsfeedUserProfile";
import 'font-awesome/css/font-awesome.min.css';

/**
 * BasicFeed component displays a basic feed item.
 *
 * @component
 * @param {Object} props - The props for this component.
 * @param {Object} props.feed - The feed data to be displayed.
 */
function BasicFeedItem({feed}) {
    return (
        <div className="feed-container">
            <div style={{display: "flex"}}>
                <NewsfeedUserProfile newsfeed={feed}/>
            </div>
            <div className="feed2-description">
                {feed.postText}
            </div>
            <div className="separator"></div>
            {/* Add this separator */}
            <div className="action-bar">
                <div className="action">
                    <div>
            <span role="img" aria-label="smiley emoji">
              😀
            </span>
                    </div>
                    <span className="action-text">{feed.totalLikes} </span>
                </div>
                <div style={{display: "flex", flexGrow: "1"}}></div>
                <div className="action">
                    <span className="action-text"> 3 Comment</span>
                </div>
                <div className="action" style={{marginLeft: "20px"}}>
                    <span className="action-text">{feed.totalShares} Share</span>
                </div>
            </div>
        </div>
    );
}

BasicFeedItem.propTypes = {
    feed: PropTypes.shape({
        postText: PropTypes.string.isRequired,
        totalLikes: PropTypes.number.isRequired,
        totalShares: PropTypes.number.isRequired,
    }).isRequired,
};

export default BasicFeedItem;
