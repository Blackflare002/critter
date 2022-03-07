import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const HomeFeed = () => {
  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setCurrentUser(data);
        // setStatus("idle");
      });
  }, []);
  return (
    <>
      <Wrapper>Home Feed</Wrapper>
    </>
  );
};

export const Wrapper = styled.div`
  margin-left: 16%;
`;

export default HomeFeed;
