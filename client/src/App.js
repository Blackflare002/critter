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

const App = () => {
  return (
    <>
      <div>
        <Sidebar />
        <h1>Hello</h1>
      </div>
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" element={<HomeFeed />}>
              <HomeFeed />
            </Route>
            <Route exact path="/notifications" element={<Notifications />}>
              <Notifications />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route exact path="/:profileId">
              <Profile />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    </>
  );
};

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
