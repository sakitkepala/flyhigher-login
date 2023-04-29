import React from "react";
import ReactDOM from "react-dom/client";

import { FlyHigherTheme } from "./styles/theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FlyHigherTheme>
      <App />
    </FlyHigherTheme>
  </React.StrictMode>
);
