// createContext,
import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Tweet from "./Tweet";

// const HomeFeedContext = createContext(null);

const HomeFeed = () => {
  const [homeFeed, setHomeFeed] = useState(null);
  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Home Feed data: ", data);
        setHomeFeed(data);
      });
  }, []);
  if (homeFeed === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  } else {
    return homeFeed.tweetIds.map((el) => {
      return <Tweet tweet={homeFeed.tweetsById[el]} />;
    });
  }

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

export default HomeFeed;
