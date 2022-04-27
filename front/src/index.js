import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import { UserProvider } from "./components/user/reducer/userReducer";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
