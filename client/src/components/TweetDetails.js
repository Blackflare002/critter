import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./HomeFeed";
import styled from "styled-components";
import moment from "moment";
import { FaRetweet } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiHeart, FiDownload } from "react-icons/fi";
import CurrentUserContext from "./CurrentUserContext";
import { BsArrowLeft } from "react-icons/bs";
import { ActionsBarWrapper, ActionsBar } from "./Tweet";
import { ComponentSpinner } from "./HomeFeed";

const TweetDetails = () => {
  const { setStatus } = useContext(CurrentUserContext);
  const { tweetId } = useParams();
  const [tweetDetails, setTweetDetails] = useState(null);
  // console.log(tweetId);
  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTweetDetails(data);
      })
      .catch(() => {
        setStatus("Error");
      });
  }, []);
  if (tweetDetails === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
        <ComponentSpinner />
      </Wrapper>
    );
  } else {
    let media = tweetDetails.tweet.media[0];
    return (
      <Wrapper>
        <BackBox>
          <BsArrowLeft />
          <div>Meow</div>
        </BackBox>
        <div>
          <UserDeets>
            <DetailsAvatar src={tweetDetails.tweet.author.avatarSrc} />
            <UserDeetsText>
              <DisplayName>{tweetDetails.tweet.author.displayName}</DisplayName>
              <Handle>@{tweetDetails.tweet.author.handle}</Handle>
            </UserDeetsText>
          </UserDeets>
        </div>
        <Status>{tweetDetails.tweet.status}</Status>
        <div>{media && <StyledImg src={media.url} />}</div>
        <Time>
          <p>
            {moment(tweetDetails.tweet.timestamp).format(
              "MMMM Do YYYY, h:mm A"
            )}
          </p>
          <span> - Critter Web App </span>
        </Time>
        <ActionsWrapper>
          <ActionsBar>
            <IoChatbubbleOutline />
            <FiHeart />
            <FaRetweet />
            <FiDownload />
          </ActionsBar>
        </ActionsWrapper>
      </Wrapper>
    );
  }
};

const ActionsWrapper = styled(ActionsBarWrapper)`
  display: block;
  padding: 15px 10px 15px 10px;
  border: solid 1px lightgrey;
`;

const Time = styled.div`
  display: flex;
  gap: 5px;
  color: grey;
  font-size: small;
  padding: 15px;
`;

const Status = styled.div`
  font-size: larger;
  margin: 10px 0 10px 0;
`;

export const Handle = styled.p`
  color: grey;
  font-size: smaller;
`;

export const DisplayName = styled.p`
  font-weight: bold;
  font-size: large;
`;

const UserDeetsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const UserDeets = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const BackBox = styled.div`
  display: flex;
  padding: 15px;
  margin-bottom: 10px;
  gap: 10px;
  border-bottom: 1px solid grey;
  font-weight: bold;
  font-size: large;
`;

const StyledImg = styled.img`
  max-height: 350px;
  border-radius: 15px;
`;

const DetailsAvatar = styled.img`
  height: 50px;
  border-radius: 15px;
`;

export default TweetDetails;
