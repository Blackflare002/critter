import React, { useContext } from "react";
import { Wrapper } from "./HomeFeed";
import CurrentUserContext from "./CurrentUserContext";
import moment from "moment";

const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("Profile, currentUser: ", currentUser);
  if (currentUser === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>Profile</div>
        <img src={currentUser.profile.bannerSrc} />
        <img src={currentUser.profile.avatarSrc} />
        <div>Handle: {currentUser.profile.handle}</div>
        <div>Display Name: {currentUser.profile.displayName}</div>
        <div>Location: {currentUser.profile.location}</div>
        <div>
          Joined: {moment(currentUser.profile.joined).format("MMMM, YYYY")}
        </div>
        <div>Bio: {currentUser.profile.bio}</div>
        <div>Following {currentUser.profile.numFollowing}</div>
        <div>Followers: {currentUser.profile.numFollowers}</div>
        <div>Likes: {currentUser.profile.numLikes}</div>
        <div>Follows you: {currentUser.profile.isFollowingYou}</div>
        <div>Following: {currentUser.profile.isBeingFollowedByYou}</div>
        {/* <div>{currentUser.profile.handle}</div> */}
      </Wrapper>
    );
  }
};

export default Profile;
