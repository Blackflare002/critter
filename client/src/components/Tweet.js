import { Wrapper } from "./HomeFeed";
import { FaRetweet } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";

const Tweet = ({ tweet }) => {
  //   console.log(tweet);
  let media = tweet.media[0];
  return (
    <Wrapper>
      <TweetWrapper>
        <Link to={`/tweet/${tweet.id}`}>
          <Avatar src={tweet.author.avatarSrc} />
          <span>{tweet.author.displayName}</span>
          <span>{tweet.author.handle}</span>
          <p>{tweet.status}</p>
          {media && <StyledImg src={media.url} />}
          <p>{moment(tweet.timestamp).format("MMM Do")}</p>
          <IoChatbubbleOutline />
          <FiHeart />
          <FaRetweet />
        </Link>
      </TweetWrapper>
    </Wrapper>
  );
};

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
