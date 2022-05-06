import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import { UserProvider } from "./components/user/reducer/userReducer";
import { SnackbarProvider } from "notistack";
// import useUserHook as UserHook from "./components/commons/useUserHook";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
