import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { COLORS } from "./Constants";
import { CurrentUserProvider } from "./components/CurrentUserContext";

ReactDOM.render(
  <React.StrictMode>
      {/* <COLORS> */}
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
      {/* </COLORS> */}
  </React.StrictMode>,
  document.getElementById("root")
);
