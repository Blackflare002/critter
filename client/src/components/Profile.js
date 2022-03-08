import React, { useContext } from "react";
import { Wrapper } from "./HomeFeed";
import CurrentUserContext from "./CurrentUserContext";

const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("Profile, currentUser: ", currentUser);
  if (currentUser === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <Wrapper>
        <div>Profile</div>
        <div>{currentUser.handle}</div>
      </Wrapper>
    );
  }
};

export default Profile;
