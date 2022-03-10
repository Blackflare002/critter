import React, { useContext, useState } from "react";
import { Wrapper } from "./HomeFeed";
import CurrentUserContext from "./CurrentUserContext";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import GeneralUserContext from "./GeneralUserContext";
import Tweet from "./Tweet";
import styled from "styled-components";
import { DisplayName, Handle } from "./TweetDetails";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { COLORS } from "../Constants";

const Profile = () => {
  const { setStatus } = useContext(CurrentUserContext);

  const [user, setUser] = useState(null);
  const [feed, setFeed] = useState(null);

  const { profileId } = useParams();
  // console.log({ profileId });

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFeed(data);
      })
      .catch(() => {
        setStatus("Error");
      });
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUser(data);
      })
      .catch(() => {
        setStatus("Error");
      });
  }, [profileId]);

  // console.log("Profile, currentUser: ", currentUser);
  if (user === null) {
    // setStatus("Loading");
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }
  if (feed === null) {
    // setStatus("Loading");
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  } else {
    return (
      <>
        <Wrapper>
          {/* <div>Profile</div> */}
          <div>
            <Banner src={user.profile.bannerSrc} />
            <ProfileAvatar src={user.profile.avatarSrc} />
            {user.profile.isBeingFollowedByYou ? (
              <FollowButton1>Following</FollowButton1>
            ) : // <FollowButton2>Follow</FollowButton2>
            null}
            <ProfileDisplayName>{user.profile.displayName}</ProfileDisplayName>
            <HandleBox>
              <ProfileHandle>@{user.profile.handle}</ProfileHandle>
              {user.profile.isFollowingYou ? (
                <FollowsYou>Follows you!</FollowsYou>
              ) : null}
            </HandleBox>
            <div>{user.profile.bio}</div>
            <LocationBox>
              <Loc>
                <MdOutlineLocationOn />
                <div>Location: {user.profile.location}</div>
              </Loc>
              <Join>
                <FiCalendar />
                <div>
                  Joined: {moment(user.profile.joined).format("MMMM, YYYY")}
                </div>
              </Join>
            </LocationBox>
            <FollowBox>
              <Following>
                <Number>{user.profile.numFollowing}</Number>
                <Word>Following</Word>
              </Following>
              <Following>
                <Number>{user.profile.numFollowers}</Number>
                <Word>Followers</Word>
              </Following>
            </FollowBox>
            {/* <div>Likes: {user.profile.numLikes}</div> */}
          </div>
          <SortBox>
            <ActiveSort>Tweets</ActiveSort>
            <p>Media</p>
            <p>Likes</p>
          </SortBox>
        </Wrapper>
        <div>
          <div>
            {feed.tweetIds.map((el) => {
              return (
                <Tweet
                  key={Math.round(Math.random() * 8008135)}
                  tweet={feed.tweetsById[el]}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

const ActiveSort = styled.p`
  color: ${COLORS.primary};
  border-bottom: ${COLORS.primary} 4px solid;
`;

const SortBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
  padding: 25px 0;
  border-bottom: 2px solid lightgray;
  font-weight: bold;
  color: grey;
`;

const FollowButton1 = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  float: right;
  position: relative;
  top: 85px;
  border: none;
  padding: 15px 35px;
  border-radius: 25px;
  font-weight: bold;
  font-size: large;
`;

// const FollowButton2 = styled(FollowButton1)`
//   background-color: white;
//   color: ${COLORS.primary};
//   outline: ${COLORS.primary} solid 3px;
// `;

const FollowsYou = styled.div`
  background-color: lightgrey;
  padding: 3px;
`;

const HandleBox = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const Word = styled.div`
  color: grey;
`;

const Number = styled.div`
  font-weight: bold;
`;

const Following = styled.div`
  display: flex;
  gap: 5px;
`;

const FollowBox = styled.div`
  display: flex;
  gap: 15px;
  font-size: large;
  margin-bottom: 10px;
`;

const Join = styled.div`
  display: flex;
  gap: 5px;
`;

const Loc = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 25px;
`;

const LocationBox = styled.div`
  display: flex;
  margin: 15px 0 15px 0;
  color: grey;
`;

const ProfileDisplayName = styled(DisplayName)`
  font-size: x-large;
  margin-bottom: 10px;
`;

const ProfileHandle = styled(Handle)`
  font-size: medium;
`;

const ProfileAvatar = styled.img`
  max-height: 200px;
  border-radius: 95px;
  outline: white solid 4px;
  position: relative;
  bottom: 90px;
`;

const Banner = styled.img`
  max-height: 300px;
  max-width: 100vw;
`;

export default Profile;
