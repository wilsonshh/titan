import React from "react";
import NewsFeed1 from "./ImageFeedItem";
import NewsFeed2 from "./BasicFeedItem";

/**
 * Component for displaying a list of news feed items.
 *
 * @component
 * @example
 * // Usage inside a parent component
 * <NewsfeedList />
 */
function NewsfeedList() {
    // Dummy feed list data
    const dummyFeedList = [
        {
            postId: 3,
            postTime: "4 hours ago",
            member: {
                name: "Sarah Diamond",
                avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg",
                memberType: "Pro Member",
                verified: true,
                status: "replied",
            },
            type: 2,
            postText: "Good morning, everyone!",
            totalLikes: 30,
            totalShares: 12,
            topic: `
        <div>
          <p style={{
            fontSize: ".95rem",
            fontWeight: "700",
            fontFamily: "Rajdhani,sans-serif",
            color: "#8f91ac"
          }}>
            Welcome to <strong style="
              font-size: .95rem;
              font-weight: 700;
              font-family: Rajdhani,sans-serif;
              color: #3e3f5e;">Casplayers Group Forum!</strong>
            This is the place to discuss all things related to
            <strong style="
              font-size: .95rem;
              font-weight: 700;
              font-family: Rajdhani,sans-serif;
              color: #3e3f5e;">Casplayers Group.</strong>
          </p>
        </div>
      `,
        },
        {
            postId: 4,
            postTime: "5 hours ago",
            member: {
                name: "Bob Johnson",
                avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
                memberType: "Pro Member",
                verified: false,
                status: "posted",
            },
            type: 1,
            feedImage: 'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80',
            postText: 'https://www.twitch.tv/bilzzard',
            totalLikes: 20,
            totalShares: 8,
        },
    ];

    return (
        <div style={{padding: "10px 0px"}}>
            {dummyFeedList.map((feed) => (
                <React.Fragment key={feed.postId}>
                    {feed.type === 1 && <NewsFeed1 feed={feed}/>}
                    {feed.type === 2 && <NewsFeed2 feed={feed}/>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default NewsfeedList;
