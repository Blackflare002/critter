import React, { useContext } from "react";
import { Wrapper } from "./HomeFeed";
import CurrentUserContext from "./CurrentUserContext";

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
        <div>Handle: {currentUser.profile.handle}</div>
        <div>Display Name: {currentUser.profile.displayName}</div>
        <div>Location: {currentUser.profile.location}</div>
        <div>Bio: {currentUser.profile.bio}</div>
        {/* <div>{currentUser.profile.handle}</div> */}
      </Wrapper>
    );
  }
};

export default Profile;
