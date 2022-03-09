import { Wrapper } from "./HomeFeed";
import { FaRetweet } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";
import CurrentUserContext from "./CurrentUserContext";
import { useContext } from "react";
import GeneralUserContext from "./GeneralUserContext";
import { IconContext } from "react-icons";
import { useState } from "react";

const Tweet = ({ tweet }) => {
  //   console.log(tweet);
  let media = tweet.media[0];
  let handle = tweet.author.handle;
  // let isLiked = tweet.isliked;
  const [isLiked, setIsLiked] = useState(tweet.isLiked);
  const [numLikes, setNumLikes] = useState(tweet.numLikes);

  const handleToggleLike = () => {
    // console.log("clicked");
    setIsLiked(!isLiked);
    // console.log(isLiked);
    isLiked ? setNumLikes(numLikes - 1) : setNumLikes(numLikes + 1);
  };

  return (
    <Wrapper>
      <TweetWrapper>
        <Avatar src={tweet.author.avatarSrc} />

        {/* to={`/profile/${handle}`} */}
        <StyledLink to={`/profile/${handle}`}>
          {tweet.author.displayName}
        </StyledLink>

        <span>{tweet.author.handle}</span>
        <StyledLink to={`/tweet/${tweet.id}`}>
          <p>{moment(tweet.timestamp).format("MMM Do")}</p>
          <p>{tweet.status}</p>
          {media && <StyledImg src={media.url} />}
        </StyledLink>
        <IoChatbubbleOutline />
        {isLiked ? (
          <IconContext.Provider value={{ color: "red" }}>
            <FiHeart onClick={handleToggleLike} />
          </IconContext.Provider>
        ) : (
          <FiHeart onClick={handleToggleLike} />
        )}
        <span>{numLikes}</span>
        <FaRetweet />
      </TweetWrapper>
    </Wrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Avatar = styled.img`
  height: 35px;
  border-radius: 15px;
`;

const TweetWrapper = styled.div`
  margin-bottom: 10px;
  border: solid 1px black;
`;

const StyledImg = styled.img`
  max-height: 250px;
`;

export default Tweet;
