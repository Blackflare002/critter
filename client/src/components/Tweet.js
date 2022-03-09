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

const Tweet = ({ tweet }) => {
  //   console.log(tweet);
  let media = tweet.media[0];

  // const { currentUser } = useContext(CurrentUserContext);
  let handle = tweet.author.handle;

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
          <IoChatbubbleOutline />
          <FiHeart />
          <FaRetweet />
        </StyledLink>
      </TweetWrapper>
    </Wrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Avatar = styled.img`
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
