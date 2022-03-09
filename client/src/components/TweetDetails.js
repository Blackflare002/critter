import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./HomeFeed";
import styled from "styled-components";
import moment from "moment";
import { FaRetweet } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiHeart, FiDownload } from "react-icons/fi";
import CurrentUserContext from "./CurrentUserContext";

const TweetDetails = () => {
  const { setStatus } = useContext(CurrentUserContext);
  const { tweetId } = useParams();
  const [tweetDetails, setTweetDetails] = useState(null);
  // console.log(tweetId);
  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTweetDetails(data).catch(() => {
          setStatus("Error");
        });
      });
  }, []);
  if (tweetDetails === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  } else {
    let media = tweetDetails.tweet.media[0];
    return (
      <Wrapper>
        {/* <div>Tweet Details</div> */}
        <DetailsAvatar src={tweetDetails.tweet.author.avatarSrc} />
        <span>{tweetDetails.tweet.author.displayName}</span>
        <span>{tweetDetails.tweet.status}</span>
        {media && <StyledImg src={media.url} />}
        <span>
          {moment(tweetDetails.tweet.timestamp).format("MMMM Do YYYY, h:mm A")}
        </span>
        <span> Critter Web App </span>
        <IoChatbubbleOutline />
        <FiHeart />
        <FaRetweet />
        <FiDownload />
      </Wrapper>
    );
  }
};

const StyledImg = styled.img`
  max-height: 350px;
`;

const DetailsAvatar = styled.img`
  height: 50px;
  border-radius: 15px;
`;

export default TweetDetails;
