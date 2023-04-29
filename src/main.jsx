import React from "react";
import ReactDOM from "react-dom/client";

import { FlyHigherMobileTheme } from "./styles/theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FlyHigherMobileTheme>
      <App />
    </FlyHigherMobileTheme>
  </React.StrictMode>
);
