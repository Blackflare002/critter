import { Wrapper } from "./HomeFeed";
import { FaRetweet } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiHeart, FiDownload } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";
import CurrentUserContext from "./CurrentUserContext";
import { useContext } from "react";
import GeneralUserContext from "./GeneralUserContext";
import { IconContext } from "react-icons";
import { useState } from "react";
import { Border } from "./HomeFeed";

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
      <Border>
        <TweetWrapper>
          <Avatar src={tweet.author.avatarSrc} />
          {/* to={`/profile/${handle}`} */}
          <StyledDisplayName to={`/profile/${handle}`}>
            {tweet.author.displayName}
          </StyledDisplayName>
          <StyledHandle>@{tweet.author.handle}</StyledHandle>
          <StyledLink to={`/tweet/${tweet.id}`}>
            <StyledHandle>
              {" "}
              - {moment(tweet.timestamp).format("MMM Do")}
            </StyledHandle>
            <StyledStatus>{tweet.status}</StyledStatus>
            {media && <StyledImg src={media.url} />}
          </StyledLink>
          <ActionsBarWrapper>
            <ActionsBar>
              <IoChatbubbleOutline />
              <div>
                {isLiked ? (
                  <IconContext.Provider value={{ color: "red" }}>
                    <FiHeart onClick={handleToggleLike} />
                  </IconContext.Provider>
                ) : (
                  <FiHeart onClick={handleToggleLike} />
                )}
                <span>{numLikes}</span>
              </div>
              <FaRetweet />
              <FiDownload />
            </ActionsBar>
          </ActionsBarWrapper>
        </TweetWrapper>
      </Border>
    </Wrapper>
  );
};

const ActionsBar = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ActionsBarWrapper = styled.div`
  display: block;
  padding: 10px 10px 0 10px;
`;

const StyledStatus = styled.p`
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledDisplayName = styled(StyledLink)`
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
  font-size: large;
`;

const StyledHandle = styled.span`
  /* font-weight: lighter; */
  color: grey;
  font-size: smaller;
`;

export const Avatar = styled.img`
  height: 35px;
  border-radius: 15px;
`;

const TweetWrapper = styled.div`
  margin-bottom: 10px;
  /* border: solid 1px black; */
  border-bottom: solid 1px grey;
  border-left: solid 1px grey;
  padding: 15px;
`;

const StyledImg = styled.img`
  max-height: 250px;
`;

export default Tweet;
