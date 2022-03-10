// createContext,
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Tweet from "./Tweet";
import CurrentUserContext from "./CurrentUserContext";
import { Avatar } from "./Tweet";
import { spin, StyledLoadingIcon } from "../App";
import { COLORS } from "../Constants";

const HomeFeed = () => {
  const [homeFeed, setHomeFeed] = useState(null);
  const { currentUser, setStatus } = useContext(CurrentUserContext);
  const avatarSrc = currentUser.profile.avatarSrc;

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Home Feed data: ", data);
        setHomeFeed(data);
      })
      .catch(() => {
        setStatus("Error");
      });
  }, []);

  // const [charCounter, setCharCounter] = useState(null);
  const [tweetValue, setTweetValue] = useState("");

  if (homeFeed === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
        <StyledLoadingIcon />
      </Wrapper>
    );
  }
  // else {
  //   return homeFeed.tweetIds.map((el) => {
  //     return <Tweet tweet={homeFeed.tweetsById[el]} />;
  //   });
  // }

  const writeTweet = (ev) => {
    setTweetValue(ev.target.value);
  };

  const sendTweet = () => {
    fetch("/api/tweet", {
      body: JSON.stringify({ status: tweetValue }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch(() => {
        setStatus("Error");
      });
  };

  let count = 280 - tweetValue.length;

  return (
    <>
      <Wrapper>
        <HeaderDivider>
          <Border>
            <StyledHeader>Home</StyledHeader>
            <StyledHeaderAvatar src={avatarSrc} />
            <form>
              <StyledTextarea placeholder="Meow?!" onChange={writeTweet} />
              <ButtonCount>
                <Counter
                  style={
                    count <= 0
                      ? { color: "red" }
                      : count <= 55
                      ? { color: "yellow" }
                      : null
                  }
                >
                  {count}
                </Counter>
                <MeowButton onClick={sendTweet}>Meow!</MeowButton>
              </ButtonCount>
            </form>
          </Border>
        </HeaderDivider>
      </Wrapper>
      {homeFeed.tweetIds.map((el) => {
        return (
          // <Border>
          <Tweet
            key={Math.round(Math.random() * 8008135)}
            tweet={homeFeed.tweetsById[el]}
          />
          // </Border>
        );
      })}
    </>
  );

  // return (
  //   <>
  //     <Wrapper>
  //       <div>Home Feed</div>
  //       <p></p>
  //     </Wrapper>
  //   </>
  // );
};

const Counter = styled.div`
position: relative;
top: 10px;
color: lightgrey;
`

const HeaderDivider = styled.div`
  border-bottom: 15px solid lightgrey;
`;

const MeowButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  font-size: large;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 15px;
  margin-left: 5px;
`;

const ButtonCount = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  margin-right: 10px;
`;

export const Border = styled.div`
  border-right: 1px solid lightgrey;
  /* width: 90vw; */
`;

const StyledHeaderAvatar = styled(Avatar)`
  position: relative;
  top: 35px;
`;

const StyledHeader = styled.h1`
  padding: 10px;
  border-bottom: lightgray solid 1px;
  font-size: large;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  margin-left: 16%;
  max-width: 70vw;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  height: 150px;
  width: 60vw;
  position: relative;
  left: 60px;
  border: none;
`;

export default HomeFeed;
