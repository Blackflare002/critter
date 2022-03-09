import React, { useContext, useState } from "react";
import { Wrapper } from "./HomeFeed";
import CurrentUserContext from "./CurrentUserContext";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import GeneralUserContext from "./GeneralUserContext";

//change current user
//useParams ?
///api/:handle/feed

const Profile = () => {
  // const { user } = useContext(GeneralUserContext);

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
        // setStatus("idle");
      });
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUser(data);
        // setStatus("idle");
      });
  }, [profileId]);

  // console.log("Profile, currentUser: ", currentUser);
  if (user === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>Profile</div>
        <img src={user.profile.bannerSrc} />
        <img src={user.profile.avatarSrc} />
        <div>Handle: {user.profile.handle}</div>
        <div>Display Name: {user.profile.displayName}</div>
        <div>Location: {user.profile.location}</div>
        <div>Joined: {moment(user.profile.joined).format("MMMM, YYYY")}</div>
        <div>Bio: {user.profile.bio}</div>
        <div>Following {user.profile.numFollowing}</div>
        <div>Followers: {user.profile.numFollowers}</div>
        <div>Likes: {user.profile.numLikes}</div>
        <div>Follows you: {user.profile.isFollowingYou}</div>
        <div>Following: {user.profile.isBeingFollowedByYou}</div>
        {/* <div>{currentUser.profile.handle}</div> */}
      </Wrapper>
    );
  }
};

export default Profile;
