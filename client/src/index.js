import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { COLORS } from "./Constants";
import { CurrentUserProvider } from "./components/CurrentUserContext";
import { GeneralUserProvider } from "./components/GeneralUserContext";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    {/* <COLORS> */}
    <GlobalStyles />
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
    {/* </COLORS> */}
  </React.StrictMode>,
  document.getElementById("root")
);
