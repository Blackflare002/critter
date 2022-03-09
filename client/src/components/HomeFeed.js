// createContext,
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Tweet from "./Tweet";
import CurrentUserContext from "./CurrentUserContext";
import { Avatar } from "./Tweet";
import { spin, StyledLoadingIcon } from "../App";
// import { TextInput } from "react";
// import { TextInput } from 'react-native'

// const HomeFeedContext = createContext(null);

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
        <div>Hello</div>
        <Avatar src={avatarSrc} />
        <form>
          <StyledTextarea
            placeholder="Meow?!"
            maxLength="280"
            onChange={writeTweet}
          />
          {/* <input type="text" placeholder="Meow?!" maxLength="300" /> */}
          <div
            style={
              count <= 0
                ? { color: "red" }
                : count <= 55
                ? { color: "yellow" }
                : null
            }
          >
            {count}
          </div>
          <button onClick={sendTweet}>Meow!</button>
        </form>
      </Wrapper>
      {homeFeed.tweetIds.map((el) => {
        return (
          <Tweet
            key={Math.round(Math.random() * 8008135)}
            tweet={homeFeed.tweetsById[el]}
          />
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

export const Wrapper = styled.div`
  margin-left: 16%;
`;

const StyledTextarea = styled.textarea`
  resize: none;
`;

export default HomeFeed;
