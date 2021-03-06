// import catLogo from "..assets/"
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../cat-logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../Constants";
import { useContext } from "react";
import CurrentUserContext from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  let handle = currentUser.profile.handle;
  // console.log(currentUser);
  return (
    <NavWrapper>
      <NavBar>
        <Logo />
        <StyledUl>
          <NaviLink exact to="/">
            <StyledLi>Home</StyledLi>
          </NaviLink>
          <NaviLink to={`/profile/${handle}`}>
            <StyledLi>Profile</StyledLi>
          </NaviLink>
          <NaviLink to="/notifications">
            <StyledLi>Notifications</StyledLi>
          </NaviLink>
          <NaviLink to="/bookmarks">
            <StyledLi>Bookmarks</StyledLi>
          </NaviLink>
        </StyledUl>
        <SidebarButton>Meow</SidebarButton>
      </NavBar>
    </NavWrapper>
  );
};

const SidebarButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  font-size: large;
  border: none;
  margin: 10px 5px;
`;

const StyledLi = styled.li`
  padding: 10px;
  margin: 10px;
  border: dashed 1px black;
  :hover {
    background-color: ${COLORS.primary};
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: solid 2px black; */
  border-right: solid 1px lightgrey;
  margin-right: 10px;
  width: 15vw;
  height: 100vh;
`;

const NaviLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  :active {
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
