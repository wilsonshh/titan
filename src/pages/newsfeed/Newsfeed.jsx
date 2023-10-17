import React from "react";
import "../../assets/styles/common/Newsfeed.css";
import BannerCard from "../../components/cards/BannerCard";
import BadgeList from "../../components/badges/BadgeList";
import Quests from "../../components/quests/Quests";
import DropDown from "../../components/elements/DropDown";
import MemberList from "../../components/member/MemberList";
import GroupList from "../../components/groups/GroupList";
import NewsfeedList from "../../components/newsfeed/NewsfeedList";

function NewsFeedScreen() {
    return (
        <div>
            <div className="banner-card-container">
                <BannerCard title={"Newsfeed"} subTitle={"Check what your friends have been up to!"}/>
            </div>
            <div className="container main-container">
                <div className="row main-area">
                    <div className="col-xl-3  d-none d-xl-block">
                        <MemberList/>
                        <Quests/>
                    </div>

                    <div className="col-sm-12 col-xl-6 tabs-container" style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div
                            className="tab-outer">
                            <div className="social-tabs">
                                <div>
                                    <div className="inner-tab">
                                        <p>
                                            All Updates
                                        </p>
                                    </div>
                                    <div style={{
                                        backgroundColor: "#23d2e2",
                                        height: "4px",
                                        maxWidth: "70px",
                                        borderRadius: "10px",
                                        paddingLeft: "10px",
                                    }}>
                                    </div>
                                </div>
                            </div>
                            <span className="social-dropdown">
                <DropDown/>
              </span>
                        </div>
                        <NewsfeedList/>
                    </div>
                    <div className="col-xl-3  d-none d-xl-block">
                        <GroupList/>
                        <BadgeList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsFeedScreen;
