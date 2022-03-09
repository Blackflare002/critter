import React from "react";
import catLogo from "./cat-logo.svg";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
// import Icons from "react-icons";
import { IconName } from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import GlobalStyles from "./components/GlobalStyles";
import CurrentUserContext from "./components/CurrentUserContext";
import { useContext } from "react";
import { Wrapper } from "./components/HomeFeed";
import { ImSpinner9 } from "react-icons/im";
import styled, { keyframes } from "styled-components";
import { FaSkull } from "react-icons/fa";

const App = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  if (status === "Error") {
    return (
      <>
        <Wrapper>
          <FaSkull />
          <h2>Error</h2>
          <p>Try refreshing the page!</p>
        </Wrapper>
      </>
    );
  }
  if (currentUser === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
        <StyledLoadingIcon className="loading-spinner" />
      </Wrapper>
    );
  } else {
    return (
      <>
        <GlobalStyles />
        <BrowserRouter>
          <div>
            <Sidebar />
          </div>
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route exact path="/profile/:profileId">
              <Profile />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
};

export const spin = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

export const StyledLoadingIcon = styled(ImSpinner9)`
  /* color: red; */
  animation: ${spin} 2s infinite;
`;

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import catLogo from "./cat-logo.svg";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
