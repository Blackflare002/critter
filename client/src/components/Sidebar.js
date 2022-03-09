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
  console.log(currentUser);
  return (
    <NavWrapper>
      <NavBar>
        <Logo />
        <StyledUl>
          <NaviLink exact to="/">
            <StyledLi>Home</StyledLi>
          </NaviLink>
          {/* api/:handle/profile */}
          {/* /api/me/profile */}
          {/* /profile */}
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
      </NavBar>
    </NavWrapper>
  );
};

const StyledLi = styled.li`
  padding: 10px;
  margin: 10px;
  border: dashed 1px black;
  /* background-color: ${COLORS.primary}; */
  :hover {
    background-color: ${COLORS.primary};
  }
`;

const StyledUl = styled.ul`
  display: flex;
  /* gap: 20px; */
  flex-direction: column;
`;

const NavBar = styled.div`
  display: flex;
  /* gap: 20px; */
  flex-direction: column;
  /* justify-content: space-evenly; */
`;

const NavWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  border: solid 2px black;
  width: 15vw;
  height: 100vh;
  /* z-index: 0; */
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
