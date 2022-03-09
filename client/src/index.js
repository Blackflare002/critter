import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { COLORS } from "./Constants";
import { CurrentUserProvider } from "./components/CurrentUserContext";
import { GeneralUserProvider } from "./components/GeneralUserContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <COLORS> */}
    <CurrentUserProvider>
      {/* <GeneralUserProvider> */}
      <App />
      {/* </GeneralUserProvider> */}
    </CurrentUserProvider>
    {/* </COLORS> */}
  </React.StrictMode>,
  document.getElementById("root")
);
