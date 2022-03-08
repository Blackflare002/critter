import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./HomeFeed";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweetDetails, setTweetDetails] = useState(null);
  // console.log(tweetId);
  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTweetDetails(data);
      });
  }, []);
  if (tweetDetails === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>Tweet Details</div>
        <span>{tweetDetails.tweet.author.displayName}</span>
      </Wrapper>
    );
  }
};

export default TweetDetails;
