import React from "react";
import ReactDOM from "react-dom/client";

import { FlyHigherTheme } from "./styles/theme";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FlyHigherTheme>
      <App />
    </FlyHigherTheme>
  </React.StrictMode>
);
