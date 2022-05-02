import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import { UserProvider } from "./components/user/reducer/userReducer";
import useUserHook from "./components/commons/useUserHook";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      <useUserHook />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
