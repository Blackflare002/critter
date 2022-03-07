// import catLogo from "..assets/"
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../cat-logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../Constants";

const Sidebar = () => {
  return (
    <NavWrapper>
      <NavBar>
        <Logo />
        <StyledUl>
          <StyledLi>
            <NaviLink to="/">Home</NaviLink>
          </StyledLi>
          <StyledLi>
            <NaviLink to="/profile">Profile</NaviLink>
          </StyledLi>
          <StyledLi>
            <NaviLink to="/notifications">Notifications</NaviLink>
          </StyledLi>
          <StyledLi>
            <NaviLink to="/bookmarks">Bookmarks</NaviLink>
          </StyledLi>
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
  /* &.active {
    color: ${COLORS.primary};
  } */
`;

export default Sidebar;
