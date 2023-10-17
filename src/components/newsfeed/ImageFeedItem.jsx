import React from "react";
import '../../assets/styles/feed/ImageFeed.css';
import NewsfeedUserProfile from "./NewsfeedUserProfile";
import 'font-awesome/css/font-awesome.min.css';

const validUrl = require('valid-url');

/**
 * ImageFeed Component
 * @param {Object} feed - The feed object containing post details.
 * @returns {JSX.Element} - Rendered ImageFeed component.
 */
function ImageFeedItem({feed}) {
    /**
     * Check if a given text is a valid URL.
     * @param {string} text - The text to check.
     * @returns {boolean} - True if the text is a valid URL, otherwise false.
     */
    function isLink(text) {
        if (validUrl.isUri(text)) {
            return true;
        } else {
            console.log("false");
            return false;
        }
    }

    return (
        <div className="feed-container">
            <div style={{display: "flex"}}>
                {/* Render NewsfeedUserProfile component with feed data */}
                <NewsfeedUserProfile newsfeed={feed}/>
            </div>

            <div className={isLink(feed.postText) ? "highlight-link" : "feed2-description"}>
                {/* Render post text with HTML formatting */}
                <div dangerouslySetInnerHTML={{__html: feed.postText}}/>
            </div>

            {/* Render the feed image */}
            <img
                src={feed.feedImage}
                alt="Feed 1"
                className="large-photo"
            />

            <div className="separator1"></div>
            {/* Add this separator */}

            <div className="action-bar" style={{marginBottom: "8px"}}>
                {/* Action buttons for like, comment, and share */}
                <div className="action">
                    <i className="fa fa-heart"></i> <span className="action-text"
                                                          style={{display: "flex", textAlign: "start"}}> Like</span>
                </div>
                <div className="action">
                    <i className="fa fa-comment"></i> <span className="action-text"> Comment</span>
                </div>
                <div className="action">
                    <i className="fa fa-share-alt"></i> <span className="action-text"> Share</span>
                </div>
            </div>
        </div>
    );
}

export default ImageFeedItem;
